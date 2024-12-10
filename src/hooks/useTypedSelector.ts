import { RootState } from "../store/reducers";
import { TypedUseSelectorHook } from "./../../node_modules/@types/react-redux/index.d";
import { useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
