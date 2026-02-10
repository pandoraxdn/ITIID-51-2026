import {Resolver, Query, Float, Args, Int} from "@nestjs/graphql";

@Resolver()
export class HelloWorldResolver {

  @Query(() => String, {name: 'hello', description: "Hola mundo es lo que retorna"})
  helloWorld(): string {
    return "Hola dsm51";
  }

  @Query(() => Float, {name: 'randomNumber', description: "Retonar un número aleatorio"})
  getRandomNumber(): number {
    return Math.random() * 1000;
  }

  @Query(() => Int, {name: "randomFromZero", description: "Retorna un número entre 0 y el argumento"})
  getRandomFromZero(
    @Args('to', {type: () => Int, nullable: true}) to: number = 6,
  ): number {
    const min = Math.ceil(0);
    const max = Math.floor(to);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
