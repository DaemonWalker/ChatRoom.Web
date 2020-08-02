export class ApiUtil {
    public static get<T>(url: string, success: (res: any) => any, error?: (res: any) => any): Promise<T> {
        return fetch(url).then(res => res.json).then(success, error);
    }
    public static post(url: string, success: (res: any) => any, method?: "post" | "put" | "delete", error?: (res: any) => any): Promise<any> {
        return fetch(url, { method: method })
            .then(res => res.json)
            .then(success, error);
    }
}