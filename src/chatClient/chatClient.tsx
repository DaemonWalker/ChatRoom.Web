import { Constance } from '../utils/constance';
import { SessionUtil } from '../utils/sessionUtil';
import { MessageModel } from '../models/messageModel';
import { MessageModelUtil } from '../utils/messageModelUtil'

export class ChatClient {
    private ws!: WebSocket;
    private isClosed: boolean = false;
    constructor(url: string, msgHandler: (msg: MessageModel) => any) {
        let connOk = false;
        let retryTime = 0;
        while (connOk === false && retryTime < 5) {
            try {
                this.ws = new WebSocket(`${Constance.URL_WS_URL()}${url}`);
                this.ws.onopen = (event: Event) => {
                    this.sendMessage(MessageModelUtil.createNotify(`${SessionUtil.getUserName()}已加入聊天室`));
                }

                this.ws.onmessage = (event: MessageEvent) => {
                    let message = JSON.parse(event.data);
                    msgHandler(message);
                }
                this.ws.onerror = (event: Event) => {
                    this.ws = new WebSocket(`${Constance.URL_WS_URL()}${url}`);
                }
                connOk = true;
            }
            catch{
                retryTime++;
                if (retryTime > 5) {
                    console.error("Can't connect to server");
                }
            }
        }
    }
    public sendMessage(message: MessageModel) {
        console.log("send");
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