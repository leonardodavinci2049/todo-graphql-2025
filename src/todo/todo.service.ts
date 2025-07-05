import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {


  private todos: Todo[] = [
    {
      id: 1,
      description: 'Todo 1',
      done: false,
    },
    {
      id: 2,
      description: 'Todo 2',
      done: true,
    },
    {
      id: 3,
      description: 'Todo 3',
      done: false,
    },
  ];


  create(createTodoInput: CreateTodoInput) {
    return 'This action adds a new todo';
  } 

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return ;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
