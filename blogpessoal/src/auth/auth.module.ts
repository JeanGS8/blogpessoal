import { Module } from "@nestjs/common/decorators";
import { Bcrypt } from "./bcrypt/bcrypt";

@Module({
    controllers: [],
    exports: [Bcrypt],
    imports: [],
    providers: [Bcrypt]
})

export class AuthModule{}