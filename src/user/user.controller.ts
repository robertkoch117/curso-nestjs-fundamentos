import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Delete, Patch } from "@nestjs/common/decorators/http";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() data: CreateUserDTO){
        return this.userService.create(data);
    }

    @Get()
    async list(){
        return this.userService.list();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number){
        return this.userService.show(id);
    }

    @Put(':id')
    async update(@Body() {email, name, password}: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number){
        return {
            method: 'put',
            email, name, password, 
            id
        }
    }

    @Patch(':id')
    async updatePartial(@Body() {email, name, password}:UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number){
        return{
            method: 'patch',
            email, name, password,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return{
            id
        }
    }
}