export class SessionUtil {
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
        let jwt = SessionUtil.get("auth");
        return jwt !== undefined && jwt !== "";
    }
}