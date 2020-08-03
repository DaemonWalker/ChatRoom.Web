import { Constance } from '../utils/constance';
import { SessionUtil } from '../utils/sessionUtil';

export class ChatClient {
    private readonly ws: WebSocket;
    constructor(url: string, msgHandler: (msg: string) => any) {
        this.ws = new WebSocket(`${Constance.URL_WS_URL}${url}`);
        this.ws.onopen = (event: Event) => this.ws.send(`${SessionUtil.getUserName()}已加入聊天室`);
        this.ws.onclose = (event: Event) => this.ws.send(`${SessionUtil.getUserName()}已退出聊天室`);
        this.ws.onmessage = (event: MessageEvent) => msgHandler(event.data);
    }
    public sendMessage(msg: string) {
        this.ws.send(msg);
    }
}