import { MessageModel } from '../models/messageModel'
import { SessionUtil } from './sessionUtil'

export class MessageModelUtil {
    public static createDefault(msg: string): MessageModel {
        return {
            content: msg,
            date: new Date().toString(),
            isNotify: false,
            user: {
                userId: SessionUtil.getUserId(),
                userName: SessionUtil.getUserName(),
                isTempUser: SessionUtil.getUserIsTemp()
            }
        }
    }
    public static createNotify(msg: string): MessageModel {
        let msgModel = this.createDefault(msg);
        msgModel.isNotify = true;
        return msgModel;
    }
    public static isCurrentUserMessage(msg: MessageModel): boolean {
        return SessionUtil.getUserId() === msg.user.userId;
    }
}