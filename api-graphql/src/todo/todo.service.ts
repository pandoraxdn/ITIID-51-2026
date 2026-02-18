import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateTodoInput} from './dto/create-todo.input';
import {UpdateTodoInput} from './dto/update-todo.input';
import {Todo} from './entities/todo.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}

  async create(data: CreateTodoInput): Promise<Todo> {
    const register = this.todoRepository.create(data);
    return await this.todoRepository.save(register);
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOne(id_todo: string) {
    return await this.todoRepository.findOneBy({id_todo});
  }

  async update(id_todo: string, data: UpdateTodoInput): Promise<Todo> {
    const register = await this.todoRepository.preload(data);
    if (!register) {
      throw new NotFoundException(`Todo with id_todo: ${id_todo} not found`)
    }
    return this.todoRepository.save(register);
  }

  async remove(id_todo: string): Promise<Todo> {
    const register = await this.findOne(id_todo);
    return await this.todoRepository.remove(register);
  }
}
