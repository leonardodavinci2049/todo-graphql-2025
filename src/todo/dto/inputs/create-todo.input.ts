import { InputType, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
} from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field(() => Number, { description: 'id do todo' })
  @IsInt({ message: 'O id deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O id não pode ser vazio' })
  @IsPositive({ message: 'O id deve ser um número positivo' })
  id: number;

  @Field(() => String, { description: 'Descrição do todo' })
  @IsString({ message: 'A descrição deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição não pode ser vazia' })
  description: string;

  @Field(() => Boolean, {
    description: 'Se o todo foi concluido',
    nullable: true,
  })
  @IsBoolean({ message: 'O campo done deve ser um booleano' })
  @IsNotEmpty({ message: 'O campo done não pode ser vazio' })
  done?: boolean;
}
