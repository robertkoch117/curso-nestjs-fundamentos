import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({
        secret: "N&IzU$V?ABqT.8-32jWq<:D@&DEM}J>D"
    })]
})
export class AuthModule{

}