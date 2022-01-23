import { MinLength, IsNotEmpty, IsOptional } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductDTO {
  @Field()
  @MinLength(4, {
    message: 'Mínimo de $constraint1 caracteres para o nome',
  })
  @IsNotEmpty()
  name!: string;

  @Field()
  @MinLength(2, {
    message: 'Mínimo de $constraint1 caracteres para o fabricante',
  })
  @IsNotEmpty()
  manufacturer!: string;

  @Field({ defaultValue: 0 })
  @IsOptional()
  stock!: number;

  @Field()
  price!: number;
}
