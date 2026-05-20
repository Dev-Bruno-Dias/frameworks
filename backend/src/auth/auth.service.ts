import { Injectable } from "@nestjs/common";
import { LoginUseCase} from "./use-cases/login.use-cases";
import { RegisterDto } from "./dto/register.dto";
import { RegisterUseCase } from "./use-cases/register.use-cases";
import { loginDto } from "./dto/login.dto";

@Injectable()
export class AuthService{
constructor(
    private readonly redgisterUseCase: RegisterUseCase,
    private readonly loginUseCase: LoginUseCase,
){}
  async register(data: RegisterDto){
    return await this.redgisterUseCase.execute(data);
  }
  async login(data: loginDto){
    return await this.loginUseCase.execute(data);
  }
  
}
