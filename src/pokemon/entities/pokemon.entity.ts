import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Prop } from "@nestjs/mongoose/dist";
import { Document } from "mongoose";

@Schema()// indica que es un esquema de bases de datos
export class Pokemon extends Document{// al agregar <Document  podemos agregar mas funcionalidades  y metodos

    //id: string // mongo me lo da
    @Prop({
        unique: true,
        index: true,
    })
    name: string;
    
    @Prop({
        unique: true,
        index: true,
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);