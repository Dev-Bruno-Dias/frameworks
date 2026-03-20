import { Injectable, Logger } from "@nestjs/common";
import { FindAlltodoRepository } from "../repositoy";



@Injectable()
export class FindAlltodoUseCase{
    constructor(
        private readonly findAlltodoRepository: FindAlltodoRepository, //primeira letra minuscula
        private readonly logger: Logger, 
    ) {}

    async execute(){
        try{
            this.logger.log('Finding All toDo...');
            //const todo = await this.FindAlltodoRepository.findMany();
            const todo = await this.findAlltodoRepository.FindAll();// dentro do meu aquivo find all no repository tem a função que puxa as informações, e por conta disso eu só chamo a função
            this.logger.log('ToDo found sucessfully');              //  por conta disso eu só chamo a função e por conta disso eu só chamo a função
            return todo;
        }
        catch(error) {
            this.logger.error(error);
            throw new Error('Falied to find all toDo')
        }
    }
}