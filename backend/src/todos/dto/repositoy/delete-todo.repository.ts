import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class DeleteTodoRepository {
    constructor(private readonly prisma: PrismaService){} //Inicializa o serviço 

    async delete(id: string){ 
        return await this.prisma.todo.delete(
            { where: {id}
            });
}
}
