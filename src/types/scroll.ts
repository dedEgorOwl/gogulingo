export interface ScrollAction {
    type: string;
    payload: number;
}

export enum ScrollActionTypes {
    CHANGE_SCROLL = "CHANGE_SCROLL",
}
