import { Query, Resolver, Float } from '@nestjs/graphql';

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
    name: 'randomNumber',
  })
  randomNumber(): number {
    const randomNumber = Math.random() * 100;
    return parseFloat(randomNumber.toFixed(2));
  }
}
