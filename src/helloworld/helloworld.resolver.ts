import { Query, Resolver, Float, Int, Args } from '@nestjs/graphql';

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
  randomFromZeroTo(@Args('to', {nullable: true,  type: () => Int }) to: number = 10): number {
    if (to <= 0) {
      throw new Error('O numero deve ser maior que 0');
    }
    if (to > 100) {
      throw new Error('O numero deve ser menor que 100');
    }
    // retorne um numero inteiro de 0 a 10
    return Math.floor(Math.random() * to);
  }



}
