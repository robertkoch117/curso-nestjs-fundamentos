import { createParamDecorator, NotFoundException } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common/interfaces";

export const User = createParamDecorator((filter: string, context: ExecutionContext) => {

    const request = context.switchToHttp().getRequest();

    if(request.user){
        // decorator user agora funciona com ou sem parametro
        if(filter){
            return request.user[filter];
        }else{
            return request.user;
        }

    }else{
        throw new NotFoundException("Usuário não encontrado no Request. Use o AuthGuard para obter o usuário.");
    }

})