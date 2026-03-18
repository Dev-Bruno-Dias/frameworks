import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client/extension";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class FindAlltodoRepository {
    constructor(private readonly prisma: PrismaService){}

    async FindAll(){ 
        return await this.prisma.todo.findMany();  // prisma vai na minha tabela todo e busque todos 
    }
}