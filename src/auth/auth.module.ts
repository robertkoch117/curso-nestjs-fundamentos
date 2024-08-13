import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";

@Module({
    imports: [
        JwtModule.register({
            secret: "N&IzU$V?ABqT.8-32jWq<:D@&DEM}J>D"
        }),
        UserModule,
        PrismaModule
    ],
    controllers: [AuthController]
})
export class AuthModule{

}