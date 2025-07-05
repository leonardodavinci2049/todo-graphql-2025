import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field(() => Number, { description: '' })
  id?: number;

  @Field(() => String, { description: 'Descrição do todo' })
  description: string;

  @Field(() => Boolean, {
    description: 'Se o todo foi concluido',
    nullable: true,
  })
  done?: boolean;
}
