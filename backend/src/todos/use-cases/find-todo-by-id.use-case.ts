import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByIDRepository } from "../repositoy";

@Injectable()
export class FindTodoByIDUseCase{
    constructor(
        private readonly findTodoByIDRepository: FindTodoByIDRepository,
        private readonly logger: Logger, 
    ) {}

    async execute(id: string){
        try{
            this.logger.log('Finding toDo by id...');
            const todo = await this.findTodoByIDRepository.FindById(id);
            this.logger.log('ToDo found by id sucessfully');
            return todo;
        }
        catch(error) {
            this.logger.error(error);
            throw new Error('Falied to find by toDo id')
        }
    }
}