import jwt from 'jsonwebtoken';
import { dotenvInit } from '../dotenvInit.js';

import tokenModel from '../models/token-model.js';

class tokenService {
	generateTokens(payload) {
		const accessToken = jwt.sign(payload, dotenvInit.parsed.JWT_ACCESS_SECRET, { expiresIn: '30m' });
		const refreshToken = jwt.sign(payload, dotenvInit.parsed.JWT_REFRESH_SECRET, { expiresIn: '30d' });
		return {
			accessToken,
			refreshToken,
		};
	}

	validateAccessToken(token) {
		try {
			const userData = jwt.verify(token, dotenvInit.parsed.JWT_ACCESS_SECRET);
			return userData;
		} catch (error) {
			return null;
		}
	}

	validateRefreshToken(token) {
		try {
			const userData = jwt.verify(token, dotenvInit.parsed.JWT_REFRESH_SECRET);
			return userData;
		} catch (error) {
			return null;
		}
	}

	async saveToken(userId, refreshToken) {
		const tokenData = await tokenModel.findOne({ user: userId });
		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return tokenData.save();
		}
		const token = await tokenModel.create({ user: userId, refreshToken });
		return token;
	}

	async removeToken(refreshToken) {
		const tokenData = await tokenModel.deleteOne({ refreshToken });
		return tokenData;
	}

	async findToken(refreshToken) {
		const tokenData = await tokenModel.findOne({ refreshToken });
		return tokenData;
	}
}

export default new tokenService();
