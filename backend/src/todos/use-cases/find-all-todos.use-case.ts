import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoRepository } from "../repositoy";
import { CreateTodoDto } from "../dto/create-todo.dto";


@Injectable()
export class FindAlltodoRepository{
    constructor(
        private readonly FindAlltodoRepository: FindAlltodoRepository,
        private readonly logger: Logger, 
    ) {}

    async execute(){
        try{
            this.logger.log('Finding All toDo...');
            const todo = await this.FindAlltodoRepository.findMany();
            this.logger.log('ToDo found sucessfully');
            return todo;
        }
        catch(error) {
            this.logger.error(error);
            throw new Error('Falied to find all toDo')
        }
    }
}