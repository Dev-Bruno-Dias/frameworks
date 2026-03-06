import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client/extension";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateTodoDto } from "../create-todo.dto";

@Injectable()
export class CreateTodoRepository {
    constructor(private readonly prisma: PrismaService){} //Inicializa o serviço 

    async execute(data: CreateTodoDto){ // Cria Dados - baseando do se no que foi tipado no Dto
        return await this.prisma.todo.create({ data }); // passe o parametro para especificar qual os dados serão utilizados
    }
}