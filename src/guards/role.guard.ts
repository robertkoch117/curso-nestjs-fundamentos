import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
    
    constructor(
        private readonly reflector: Reflector
    ) {}

    canActivate(context: ExecutionContext){
        
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [context.getHandler(), context.getClass()])
        
        console.log({requiredRoles});

        if(!requiredRoles){
            return true;
        }else{
            const {user} = context.switchToHttp().getRequest();
    
            const rolesFilted = requiredRoles.filter(role => role === user.role);

            if(rolesFilted.length > 0){
                return true;
            }else{
                return false;
            }

        }
    }
    
}