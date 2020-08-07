import { ApiUtil } from './apiUtil';
import { Constance } from './constance'
import { LoginModel } from '../models/loginModel';
import { LoginResponseModel } from '../models/loginResponseModel'
export class Api {
    static checkAuth(): Promise<boolean> {
        let result = ApiUtil.get<boolean>(Constance.URL_AUTH,
            (res: boolean) => res);
        return result;
    }
    static login(info: LoginModel, success: (sessionId: LoginResponseModel) => any, error: (res: any) => any) {
        ApiUtil.post(Constance.URL_LOGIN, "post", info, success, error);
    }
}