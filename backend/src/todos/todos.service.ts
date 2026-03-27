import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {CreateTodoUseCase,DeleteTodoUseCase,FindAlltodoUseCase,FindTodoByIDUseCase,UpdateTodoByIDUseCase } from './use-cases/index';

@Injectable()
export class TodosService {
  constructor (
   private readonly createTodoUseCase: CreateTodoUseCase,
   private readonly deleteTodoUseCase: DeleteTodoUseCase,
   private readonly findAllTodoUseCase:FindAlltodoUseCase,
   private readonly findByIdTodoUseCase:FindTodoByIDUseCase,
   private readonly updateTodoUseCase:UpdateTodoByIDUseCase,
  ){}

  create(createTodoDto: CreateTodoDto) {
    return this.createTodoUseCase.execute(createTodoDto);
  }

  findAll() {
    return this.findAllTodoUseCase.execute();
  }

  findById(id: string) {
    return this.findByIdTodoUseCase.execute(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.updateTodoUseCase.execute(id, updateTodoDto);
  }

  delete(id: string) {
    return this.deleteTodoUseCase.execute(id);
  }
}
