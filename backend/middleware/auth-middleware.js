import ApiError from "../exceptions/api-error.js";
import TokenService from "../service/token-service.js";

export default function authMiddleware(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) throw ApiError.UnautharizedError();

        const accessToken = authorizationHeader.split(" ")[1];
        if (!accessToken) throw ApiError.UnautharizedError();

        const userData = TokenService.validateAccessToken(accessToken);
        if (!userData) return next(ApiError.UnautharizedError());

        req.user = userData;
        next();
    } catch (e) {
        return next(ApiError.UnautharizedError());
    }
}
