import { Injectable, Logger } from "@nestjs/common";
import { UpdateTodoByIDtodoRepository } from "../repositoy";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoByIDUseCase{
    constructor(
        //               Escolho o nome         :  Arquivo do Reposity que vai ser lido pela Private Readonly-- Private- Somente um arquivo
        private readonly updateTodoByIDRepository: UpdateTodoByIDtodoRepository,// será especifico abrirá o outro no caso: 
        private readonly logger: Logger,                                        // updateTodoByIDRepository(somente ele) vai abrir e ler o 
    ) {}                                                                        // UpdateTodoByIDtodoRepository

    async execute(id: string, data:UpdateTodoDto ){
        try{
            this.logger.log('Updating toDo by id...');
            const todo = await this.updateTodoByIDRepository.update(id, data);
            this.logger.log('ToDo found by id sucessfully');
            return todo;
        }
        catch(error) {
            this.logger.error(error);
            throw new Error('Falied to find by toDo id')
        }
    }
}