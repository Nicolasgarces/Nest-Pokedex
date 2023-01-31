import { IsInt } from "class-validator";
import { IsPositive, IsString, MinLength } from "class-validator/types/decorator/decorators";

export class CreatePokemonDto {

    @IsInt()
    @IsPositive()
    @MinLength(1)
    no: number;

    @IsString()
    @MinLength(1)
    name: string;


}
