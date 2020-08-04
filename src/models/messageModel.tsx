import { UserModel } from "./userModel";

export interface MessageModel {
    content: string;
    date: string;
    isNotify: boolean;
    user: UserModel;
}