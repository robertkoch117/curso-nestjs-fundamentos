import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Delete, Patch } from "@nestjs/common/decorators/http";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body){
        return {body};
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