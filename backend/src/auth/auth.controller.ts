import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { loginDto } from "./dto/login.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { CurrentUser } from "./current-user.decorator";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() data: RegisterDto){
        return await this.authService.register(data);
    }
    @Post('login')
    async login(@Body() data: loginDto){
        return await this.authService.login(data)
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    me(@CurrentUser() user:{id: string; email:string}){
        return user;
    }
}