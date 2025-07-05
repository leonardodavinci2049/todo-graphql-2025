import {
  Query,
  Resolver,
  Float,
  Int,
  Args,
  ObjectType,
  Field,
} from '@nestjs/graphql';

// Definindo um tipo para o item
@ObjectType()
class Item {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;

  @Field()
  createdAt: Date;
}

@Resolver()
export class HelloworldResolver {
  @Query(() => String, {
    description: 'Olá Mundo é o que retorno',
    name: 'hello',
  })
  helloWotld(): string {
    return 'Hello, World!';
  }

  @Query(() => Float, {
    description: 'Retorna um numero aleatorio entre 0 e 100',
    name: 'randomNumber',
  })
  randomNumber(): number {
    const randomNumber = Math.random() * 100;
    return parseFloat(randomNumber.toFixed(2));
  }

  @Query(() => Int, {
    description: 'Retorna um numero inteiro de 0 a 10',
    name: 'randomFromZeroTo',
  })
  randomFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 10,
  ): number {
    if (to <= 0) {
      throw new Error('O numero deve ser maior que 0');
    }
    if (to > 100) {
      throw new Error('O numero deve ser menor que 100');
    }
    // retorne um numero inteiro de 0 a 10
    return Math.floor(Math.random() * to);
  }

  @Query(() => Item, {
    description: 'Busca um item pelo ID',
    name: 'findItem',
  })
  findItem(@Args('id', { type: () => Int }) id: number): Item {
    // Simulando dados de exemplo
    const items = [
      {
        id: 1,
        name: 'Produto A',
        description: 'Descrição do produto A',
        price: 29.99,
        createdAt: new Date('2025-01-01'),
      },
      {
        id: 2,
        name: 'Produto B',
        description: 'Descrição do produto B',
        price: 49.99,
        createdAt: new Date('2025-01-02'),
      },
      {
        id: 3,
        name: 'Produto C',
        description: 'Descrição do produto C',
        price: 19.99,
        createdAt: new Date('2025-01-03'),
      },
    ];

    const item = items.find((item) => item.id === id);

    if (!item) {
      throw new Error(`Item com ID ${id} não encontrado`);
    }

    return item;
  }
}
