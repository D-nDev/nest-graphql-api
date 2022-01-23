import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ObjectType()
export class StockDTO {
  @Field({ nullable: true })
  @IsOptional()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  manufacturer: string;

  @Field({ nullable: true })
  @IsOptional()
  stock: number;

  @Field({ nullable: true })
  @IsOptional()
  price: number;
}
