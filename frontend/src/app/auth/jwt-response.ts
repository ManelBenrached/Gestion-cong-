import { User } from "../shared/model/user";

export class JwtResponse {
    access_token: string;
    user:User;
    /*type: string;
    email: string;*/
 }
