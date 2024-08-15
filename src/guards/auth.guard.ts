import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private readonly authService: AuthService){}

    canActivate(context: ExecutionContext){

        const request = context.switchToHttp().getRequest();
        const {authorization} = request.headers;

        const tokenSemBearer = authorization ? authorization.split(' ')[1] : '';

        try{
            const data = this.authService.checkToken(tokenSemBearer);

            request.tokenPayload = data;

            return true;
        }catch(e){
            return false;
        }
    }

}