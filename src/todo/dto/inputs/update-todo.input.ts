import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { CreateTodoInput } from './create-todo.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field(() => Number, { description: 'id do todo' })
  @IsInt({ message: 'O id deve ser um número inteiro' })
  @IsNotEmpty({ message: 'O id não pode ser vazio' })
  @IsPositive({ message: 'O id deve ser um número positivo' })
  id: number;

  @Field(() => String, { description: 'Descrição do todo', nullable: true })
  @IsOptional()
  @IsString({ message: 'A descrição deve ser uma string' })
  description?: string;

  @Field(() => Boolean, {
    description: 'Se o todo foi concluido',
    nullable: true,
  })
  @IsBoolean({ message: 'O campo done deve ser um booleano' })
  @IsOptional()
  done?: boolean;
}
