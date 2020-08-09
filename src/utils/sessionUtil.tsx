import { LoginResponseModel } from "../models/loginResponseModel";
import { Constance } from "./constance";
import { GlobalUtil } from "./globalUtil";

export class SessionUtil {
    private static readonly KEY_USERNAME = "userName";
    private static readonly KEY_USERID = "userId";
    private static readonly KEY_SESSIONID = "sessionId";
    private static readonly KEY_USERISTEMP = "isTemp";
    private static readonly KEY_WSPORT = "wsPort";
    public static get(key: string): string {
        let value = window.localStorage.getItem(key);
        if (value === undefined || value === null) {
            return "";
        }
        else {
            return value;
        }
    }
    public static set(key: string, value: string) {
        window.localStorage.setItem(key, value);
    }
    public static isAuth(): boolean {
        let jwt = SessionUtil.getSessionId();
        return jwt !== undefined && jwt !== "";
    }

    public static getUserName(): string {
        return this.get(this.KEY_USERNAME);
    }
    public static getUserId(): string {
        return this.get(this.KEY_USERID);
    }
    public static getUserIsTemp(): boolean {
        return this.get(this.KEY_USERISTEMP) !== "0";
    }
    public static getSessionId(): string {
        return this.get(this.KEY_SESSIONID);
    }
    public static setUserId(id: string) {
        this.set(this.KEY_USERID, id);
    }
    public static setUserName(name: string) {
        this.set(this.KEY_USERNAME, name);
    }
    public static setSessionId(id: string) {
        this.set(this.KEY_SESSIONID, id);
    }
    public static setUserIsTemp(isTemp: boolean) {
        this.set(this.KEY_USERISTEMP, isTemp ? "1" : "0");
    }
    public static setLoginInfo(info: LoginResponseModel) {
        this.setUserId(info.userId);
        this.setUserName(info.userName);
        this.setSessionId(info.sessionId);
    }
    public static setDefaultSever(port: string) {
        this.set(this.KEY_WSPORT, port);
    }
    public static getDefaultServer(): string {
        let port = this.get(this.KEY_WSPORT);
        if (GlobalUtil.stringIsNullOrEmpty(port)) {
            return "7181";
        }
        else {
            return port;
        }
    }
    public static getCurrentServerName(): string {
        let port = this.getDefaultServer();
        if (port === "7181") {
            return "电信一区";
        }
        else if (port === "7182") {
            return "网通一区";
        }
        else {
            return "bug了"
        }
    }
}