import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { DeleteTodoRepository } from "../repositoy";
import { FindTodoByIDRepository } from "../repositoy";



@Injectable()
export class DeleteTodoUseCase{
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly findtodobyidRepository: FindTodoByIDRepository,
        private readonly logger: Logger, 
    ) {}

    async execute(id: string){
        try{
            this.logger.log('Deleting toDo...');

            const todos = await this.findtodobyidRepository.FindById(id)

            if (!todos) {
                throw new NotFoundException('ToDo not found');
            }

            await this.deleteTodoRepository.delete(id);

            this.logger.log('ToDo Deleted sucessfully');
            
            return todos;
        }
        catch(error) {
            this.logger.error(error);
            throw new Error('Falied to delete toDo')
        }
    }
}