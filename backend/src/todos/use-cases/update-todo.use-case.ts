import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { UpdateTodoByIDtodoRepository } from "../repositoy";
import { UpdateTodoDto } from "../dto/update-todo.dto";
import { FindTodoByIDRepository } from "../repositoy";

@Injectable()
export class UpdateTodoByIDUseCase{
    constructor(
        //               Escolho o nome         :  Arquivo do Reposity que vai ser lido pela Private Readonly-- Private- Somente um arquivo
        private readonly updateTodoByIDRepository: UpdateTodoByIDtodoRepository,// será especifico abrirá o outro no caso:       
        private readonly findtodobyidRepository: FindTodoByIDRepository,       // updateTodoByIDRepository(somente ele) vai abrir e ler o
        private readonly logger: Logger,                                      // UpdateTodoByIDtodoRepository
    ) {}                                                                        

    async execute(id: string, data:UpdateTodoDto ){
        try{
            this.logger.log('Updating toDo by id...');
   
            const todo = await this.findtodobyidRepository.FindById(id);
           
            if (!todo){
                throw new NotFoundException ('ToDo not found');
            }
            await this.updateTodoByIDRepository.update(id, data);

            this.logger.log('ToDo found by id sucessfully');

            return todo;
        }
        catch(error) {
            this.logger.error(error);
            throw new Error('Falied to find by toDo id')
        }
    }
}