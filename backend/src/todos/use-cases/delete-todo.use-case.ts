import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoRepository } from "../repositoy";
import { CreateTodoDto } from "../dto/create-todo.dto";


@Injectable()
export class DeleteTodoRepository{
    constructor(
        private readonly DeleteTodoRepository: DeleteTodoRepository,
        private readonly logger: Logger, 
    ) {}

    async execute(id: string){
        try{
            this.logger.log('Deleting toDo...');
            const todo = await this.DeleteTodoRepository.delete(where: {id});
            this.logger.log('ToDo Deleted sucessfully');
            return todo;
        }
        catch(error) {
            this.logger.error(error);
            throw new Error('Falied to delete toDo')
        }
    }
}