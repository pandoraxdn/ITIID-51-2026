import {Resolver, Query, Mutation, Args, Int} from '@nestjs/graphql';
import {TodoService} from './todo.service';
import {Todo} from './entities/todo.entity';
import {CreateTodoInput} from './dto/create-todo.input';
import {UpdateTodoInput} from './dto/update-todo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  /*
    query{
      todos{
        id_todo,
        description,
        done
      }
    }

    mutation createTodo($data: CreateTodoInput!) {
      createTodo(data: $data) {
            id_todo
            description
            done
      }
    }

    {
      "data": {
        "description": "Anillo de promesa"
      }
    }

    // Consulta de Registro
    query findOne($id_todo: String!) {
        findOne(id_todo: $id_todo) {
          description
          done
        }
    }

    Variables:
    {
      "id_todo": "ef9c32fd-89ee-4f9a-b529-2d32a8c92c74"
    }

    mutation updateTodo($data: UpdateTodoInput!) {
      updateTodo(data: $data) {
        id_todo
        description
        done
      }
    }

    {
      "data": {
        "id_todo": "ef9c32fd-89ee-4f9a-b529-2d32a8c92c74",
        "done": true
      }
    }

    mutation removeTodo($id_todo: String!) {
      removeTodo(id_todo: $id_todo) {
        description
        done
      }
    }

    Variables:
    {
      "id_todo": "ef9c32fd-89ee-4f9a-b529-2d32a8c92c74"
    }
  */

  @Mutation(() => Todo)
  async createTodo(
    @Args('data') data: CreateTodoInput
  ) {
    return await this.todoService.create(data);
  }

  @Query(() => [Todo], {name: "todos"})
  async findAll() {
    return await this.todoService.findAll();
  }

  @Query(() => Todo)
  async findOne(
    @Args('id_todo') id_todo: string
  ): Promise<Todo> {
    return await this.todoService.findOne(id_todo);
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Args('data') data: UpdateTodoInput
  ) {
    return await this.todoService.update(data.id_todo, data);
  }

  @Mutation(() => Todo)
  async removeTodo(
    @Args('id_todo') id_todo: string
  ) {
    return await this.todoService.remove(id_todo);
  }
}
