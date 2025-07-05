import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int, { description: 'ID do todo' })
  id: number;

  @Field(() => String, { description: 'Descrição do todo' })
  description: string;

  @Field(() => Boolean, { description: 'Se o todo foi concluido' })
  done: Boolean = false;
}
