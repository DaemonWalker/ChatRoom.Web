export class Constance {
    public static readonly URL_API_BASE: string = "http://localhost:50000/api/";
    public static readonly URL_AUTH: string = `${Constance.URL_API_BASE}auth/`;
    public static readonly URL_LOGIN: string = `${Constance.URL_API_BASE}auth/signin`
    public static readonly URL_LOGOUT: string = `${Constance.URL_API_BASE}auth/signout`;
    public static readonly URL_SPEACHRANK:string=`${Constance.URL_API_BASE}statistics/speachrank`
    public static readonly URL_WS_URL: string = "ws://127.0.0.1:7181/";
}