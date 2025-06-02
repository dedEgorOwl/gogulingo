import bcrypt from 'bcrypt';
import { v4 } from 'uuid';

import UserModel from '../models/user-model.js';
import mailService from './mail-service.js';
import tokenService from './token-service.js';
import UserDto from '../dtos/user-dto.js';
import { ApiError } from '../exceptions/api-error.js';
import ListeningTaskModel from '../models/listeningTask-model.js';
import PutTogetherTaskModel from '../models/putTogetherTask-model.js';
import TranslateTaskModel from '../models/translateTask-model.js';

const generateRandomTasks = () => {
	const tasks = [];

	const generateNumber = (array) => {
		const number = Math.floor(Math.random() * (2 - 0 + 1) + 0);
		if (array.includes(number)) return generateNumber(array);
		return number;
	};
	tasks.push(generateNumber(tasks));
	tasks.push(generateNumber(tasks));
	tasks.push(generateNumber(tasks));

	return tasks;
};

class userService {
	async registration(username, email, password) {
		const candidate = await UserModel.findOne({ email });
		if (candidate) throw ApiError.BadRequest(`Пользователь с почтовым адрессом ${email} уже существует`);

		const hashPassword = await bcrypt.hash(password, 3);
		const activationLink = v4();

		const randomTasks = generateRandomTasks();
		const user = await UserModel.create({
			username: username,
			email: email,
			password: hashPassword,
			activationLink: activationLink,
			role: 'customer',
			tasks: randomTasks,
		});
		await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {
			...tokens,
			user: userDto,
		};
	}

	async activate(activationLink) {
		const user = await UserModel.findOne({ activationLink });
		if (!user) {
			throw ApiError.BadRequest('Неверная ссылка активации');
		}
		user.isActivated = true;
		await user.save();
	}

	async login(email, password) {
		const user = await UserModel.findOne({ email });
		if (!user) {
			throw ApiError.BadRequest('Пользователь с таким email не найден');
		}
		const isPassEquals = await bcrypt.compare(password, user.password);
		if (!isPassEquals) {
			throw ApiError.BadRequest('Некоректный пароль');
		}
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });

		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return {
			...tokens,
			user: userDto,
		};
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken);
		return token;
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw new ApiError.UnauthorizedError();
		}
		const userData = tokenService.validateRefreshToken(refreshToken);
		const tokenFromDb = await tokenService.findToken(refreshToken);
		if (!userData || !tokenFromDb) {
			throw ApiError.UnauthorizedError();
		}

		const user = await UserModel.findById(userData.id);
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });

		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return {
			...tokens,
			user: userDto,
		};
	}

	async getListeningTasks() {
		const listeningTasks = await ListeningTaskModel.find();
		return listeningTasks;
	}

	async getPutTogetherTasks() {
		const putTogetherTasks = await PutTogetherTaskModel.find();
		return putTogetherTasks;
	}

	async getTranslateTasks() {
		const translateTasks = await TranslateTaskModel.find();
		return translateTasks;
	}
}

export default new userService();
