import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateTodoDto } from "../dto/create-todo.dto";


@Injectable()
export class CreateTodoRepository {
    create(data: CreateTodoDto) {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService){} //Inicializa o serviço do adaptador 

    async execute(data: CreateTodoDto){ // Cria Dados - baseando do se no que foi tipado no Dto
        return await this.prisma.todo.create({ data }); // passe o parametro para especificar qual os dados serão utilizados
    }
}