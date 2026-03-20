import { Injectable, Logger } from "@nestjs/common";


@Injectable()
export class FindTodoByIDRepository{
    constructor(
        private readonly FindTodoByIDRepository: FindTodoByIDRepository,
        private readonly logger: Logger, 
    ) {}

    async execute(id: string){
        try{
            this.logger.log('Finding toDo by id...');
            const todo = await this.FindTodoByIDRepository.findUnique(Where:{id},);
            this.logger.log('ToDo found by id sucessfully');
            return todo;
        }
        catch(error) {
            this.logger.error(error);
            throw new Error('Falied to find by toDo id')
        }
    }
}