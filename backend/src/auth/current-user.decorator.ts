// Decoretor ditador de algo-- Crio um decorator que pega o resultado da requisição 

import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();
        return req.user;
    },
);