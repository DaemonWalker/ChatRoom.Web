export class Constance {
    public static readonly URL_API_BASE: string = "http://localhost:50000";
    public static readonly URL_AUTH: string = `${Constance.URL_API_BASE}/api/auth/`;
    public static readonly URL_LOGIN:string=`${Constance.URL_API_BASE}/api/auth/signin`
    public static readonly URL_WS_URL: string = "ws://127.0.0.1:7181/";
}