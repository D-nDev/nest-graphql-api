import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetProductDTO {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  manufacturer!: string;

  @Field()
  stock!: number;

  @Field()
  price!: number;
}
