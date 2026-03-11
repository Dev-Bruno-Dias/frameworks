import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client/extension";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateTodoDto } from "../create-todo.dto";

@Injectable()
export class DeleteTodoRepository {
    constructor(private readonly prisma: PrismaService){} //Inicializa o serviço 

    async delete(id: string){ 
        return await this.prisma.todo.delete({ where: {id}});
}