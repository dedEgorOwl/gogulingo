import bcrypt from "bcrypt";
import { v4 } from "uuid";

import userModel from "../models/user-model.js";
import mailService from "./mailService.js";
import tokenService from "./token-service.js";
import UserDto from "../dtos/user-dto.js";

const generateRandomTasks = () => {
    const tasks = [];

    const generateNumber = (array) => {
        const number = Math.floor(Math.random() * (4 - 0 + 1) + 0);
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
        const candidate = await userModel.findOne({ email });
        if (candidate) throw new Error(`Пользователь с почтовым адрессом ${email} уже существует`);

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = v4();

        const randomTasks = generateRandomTasks();
        const user = await userModel.create({
            username: username,
            email: email,
            password: hashPassword,
            activationLink: activationLink,
            role: "customer",
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
}

export default new userService();
