import { createParamDecorator } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common/interfaces";

export const ParamId = createParamDecorator((_data: unknown, context: ExecutionContext) => {

    return Number(context.switchToHttp().getRequest().params.id);
    
})