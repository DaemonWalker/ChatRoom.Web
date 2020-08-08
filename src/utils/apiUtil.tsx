import { SessionUtil } from "./sessionUtil";

export class ApiUtil {
    public static get<T>(url: string, success: (res: any) => any, error?: (res: any) => any): Promise<T> {
        return fetch(url).then(res => res.json()).then(success, error);
    }
    public static post<T>(url: string, method: "post" | "put" | "delete", data: any, success: (res: T) => any, error?: (res: any) => any): Promise<any> {
        return fetch(url,
            {
                method: method,
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": SessionUtil.getSessionId()
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                return res.json();
            })
            .then(success, error);
    }
}