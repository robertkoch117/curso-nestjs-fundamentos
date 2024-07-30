import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) {
    }

    async create(data: CreateUserDTO) {

        return await this.prisma.user.create({
            data,
            // caso queira retornar o id criado no banco
            // select: {
                // id: true,
                // name: true,
            // }
        });

    }

}