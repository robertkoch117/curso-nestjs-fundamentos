import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Delete, Patch } from "@nestjs/common/decorators/http";
import { CreateUserDTO } from "./dto/create-user.dto";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() {email, name, password}: CreateUserDTO){
        return {email, name, password};
    }

    @Get()
    async list(){
        return {users:[]};
    }

    @Get(':username')
    async show(@Param() params){
        return{user:{}, params};
    }

    @Put(':id')
    async update(@Body() body, @Param() params){
        return {
            method: 'put',
            body, 
            params
        }
    }

    @Patch(':id')
    async updatePartial(@Body() body, @Param() params){
        return{
            method: 'patch',
            body,
            params
        }
    }

    @Delete(':id')
    async delete(@Param() param){
        return{
            param
        }
    }
}