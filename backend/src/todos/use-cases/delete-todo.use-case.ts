import { Injectable, Logger } from "@nestjs/common";
import { DeleteTodoRepository } from "../repositoy";



@Injectable()
export class DeleteTodoUseCase{
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly logger: Logger, 
    ) {}

    async execute(id: string){
        try{
            this.logger.log('Deleting toDo...');
            const todo = await this.deleteTodoRepository.delete(id);
            this.logger.log('ToDo Deleted sucessfully');
            return todo;
        }
        catch(error) {
            this.logger.error(error);
            throw new Error('Falied to delete toDo')
        }
    }
}