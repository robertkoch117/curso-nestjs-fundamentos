import { IsString, IsEmail, MinLength, IsOptional, IsDateString } from "class-validator";

export class CreateUserDTO{
    
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    // class-validators ^0.14.0
    // @IsStrongPassword({
    //     minLength: 6,
    //     minNumbers: 0,
    //     minLowercase: 0,
    //     minSymbols: 0,
    //     minUppercase: 0
    // })

    // class-validators ^0.13.0
    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsDateString()
    birthAt: string;

}