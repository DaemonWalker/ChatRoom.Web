import { ApiUtil } from './apiUtil';
import { Constance } from './constance'
import { LoginModel } from '../models/loginModel';
import { SpeachRankModel } from '../models/speachRankModel';
import { LoginResponseModel } from '../models/loginResponseModel'
import { SessionUtil } from './sessionUtil';
import { RouteComponentProps } from 'react-router-dom';
export class Api {
    static checkAuth(): Promise<boolean> {
        let result = ApiUtil.get<boolean>(Constance.URL_AUTH,
            (res: boolean) => res);
        return result;
    }
    static login(info: LoginModel, success: (sessionId: LoginResponseModel) => any, error: (res: any) => any) {
        ApiUtil.post(Constance.URL_LOGIN, "post", info, success, error);
    }

    static logout(props: RouteComponentProps) {
        ApiUtil.post(Constance.URL_LOGOUT, "post", {}, (res: any) => {
            console.log(res);
            SessionUtil.setLoginInfo({
                sessionId: "",
                userId: "",
                userName: ""
            })
            props.history.push("/login");
        });
    }

    static speachRank(count: number, success: (res: SpeachRankModel[]) => any) {
        ApiUtil.post(Constance.URL_SPEACHRANK, "post", count, success);
    }
}