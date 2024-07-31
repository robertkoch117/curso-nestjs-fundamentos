import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";

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

    async list(){
        return await this.prisma.user.findMany();
    }

    async show(id: number){
        return await this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }

    async update(id: number, {email, name, password, birthAt}: UpdatePutUserDTO){
        return await this.prisma.user.update({
            data: {email, name, password, birthAt: birthAt ? new Date(birthAt) : null},
            where: {
                id
            }
        });
    }

    async updatePartial(id: number, {email, name, password, birthAt}: UpdatePatchUserDTO){

        const data: any = {};

        if(birthAt){
            data.birthAt  = new Date(birthAt);
        }

        if(email){
            data.email = email;
        }

        if(name){
            data.name = name;
        }

        if(password){
            data.password = password;
        }

        return await this.prisma.user.update({
            data,
            where: {
                id
            }
        });
    }
}