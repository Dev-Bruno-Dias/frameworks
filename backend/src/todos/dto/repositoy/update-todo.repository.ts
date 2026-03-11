import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client/extension";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateTodoDto } from "../create-todo.dto";

@Injectable()
export class UpdateTodoByID {
    constructor(private readonly prisma: PrismaService){}

    async update(data: CreateTodoDto){  //parece que está faltando o where id
        return await this.prisma.todo.update({data}); 
    }
}