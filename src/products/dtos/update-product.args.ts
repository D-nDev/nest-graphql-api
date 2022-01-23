import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProductDTO {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  manufacturer?: string;

  @Field({ nullable: true })
  stock?: number;

  @Field({ nullable: true })
  price?: number;
}
