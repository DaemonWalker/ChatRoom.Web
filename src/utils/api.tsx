import { ApiUtil } from './apiUtil';
import { Constance } from './constance'
export class Api {
    static  checkAuth(): Promise<boolean> {
        let result =  ApiUtil.get<boolean>(Constance.URL_AUTH,
            (res: boolean) => res);
        return result;
    }
}