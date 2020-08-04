import { Constance } from '../utils/constance';
import { SessionUtil } from '../utils/sessionUtil';
import { MessageModel } from '../models/messageModel';
import { MessageModelUtil } from '../utils/messageModelUtil'

export class ChatClient {
    private readonly ws: WebSocket;
    private isClosed: boolean = false;
    constructor(url: string, msgHandler: (msg: MessageModel) => any) {
        this.ws = new WebSocket(`${Constance.URL_WS_URL}${url}`);

        this.ws.onopen = (event: Event) => {
            this.sendMessage(MessageModelUtil.createNotify(`${SessionUtil.getUserName()}已加入聊天室`));
        }

        this.ws.onmessage = (event: MessageEvent) => {
            let message = JSON.parse(event.data);
            msgHandler(message);
        }
    }
    public sendMessage(message: MessageModel) {
        this.ws.send(JSON.stringify(message));
    }
    public closeConnection() {
        if (this.isClosed === false) {
            this.isClosed = true;
            this.sendMessage(MessageModelUtil.createNotify(`${SessionUtil.getUserName()}已退出聊天室`));
            this.ws.close();
        }
    }
}