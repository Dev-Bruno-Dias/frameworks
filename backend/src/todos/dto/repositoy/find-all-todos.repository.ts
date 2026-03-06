import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client/extension";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateTodoDto } from "../create-todo.dto";

@Injectable()
export class FindAlltodoRepository {
    constructor(private readonly prisma: PrismaService){}

    async FindAll(){ 
        return await this.prisma.todo.findMany(); 
    }
}