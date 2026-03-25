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
    return createTodoUseCase;
  }

  findAll() {
    return ;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
