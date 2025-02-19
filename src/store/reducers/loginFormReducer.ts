import { IUser } from "../../models/IUser";
import AuthService from "../../services/AuthService";
import { LoginFormAction, LoginFormActionTypes, loginFormState } from "../../types/loginForm";

const initialState: loginFormState = {
    currentUser: { email: "", isActivated: false, id: "99999999" },
    isAuth: false,
};

export const loginFormReducer = async (state: loginFormState = initialState, action: LoginFormAction): Promise<loginFormState> => {
    switch (action.type) {
        case LoginFormActionTypes.LOGIN:
            try {
                const response = await AuthService.login(action.payload.email, action.payload.password);
                localStorage.setItem("token", response.data.accessToken);
                console.log(response);
                return { isAuth: true, currentUser: response.data.user };
            } catch (e) {
                console.log(e.response?.data?.message);
            }
            break;
        case LoginFormActionTypes.LOGOUT:
            try {
                const response = await AuthService.logout();
                localStorage.removeItem("token");
                console.log(response);
                return { isAuth: false, currentUser: {} as IUser };
            } catch (e) {
                console.log(e.response?.data?.message);
            }
            break;
        case LoginFormActionTypes.REGISTER:
            try {
                const response = await AuthService.registration(action.payload.email, action.payload.password);
                localStorage.setItem("token", response.data.accessToken);
                console.log(response);
                return { isAuth: true, currentUser: response.data.user };
            } catch (e) {
                console.log(e.response?.data?.message);
            }
            break;
        default:
            break;
    }
};
