import { Injectable } from '@nestjs/common';

import { Todo } from './entities/todo.entity';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { StatusArgs } from './dto/args/status.args';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Piedra del Alma', done: false },
    { id: 2, description: 'Piedra del Espacio', done: true },
    { id: 3, description: 'Piedra del Poder', done: false },
    { id: 4, description: 'Piedra del Tiempo', done: false },
  ];

  create(createTodoInput: CreateTodoInput): Todo {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      description: createTodoInput.description,
      done: createTodoInput.done || false,
    };

    this.todos.push(newTodo);

    return newTodo;
  }

  findAll(statusArgs: StatusArgs): Todo[] {
    const { status } = statusArgs;
    if (status !== undefined)
      return this.todos.filter((todo) => todo.done === status);

    return this.todos;
  }

  findOneSvc(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    return todo;
  }

  update(id: number, updateTodoInput: UpdateTodoInput): Todo {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new Error(`Todo with id ${id} not found`);
    }

    this.todos[todoIndex] = { ...this.todos[todoIndex], ...updateTodoInput };
    return this.todos[todoIndex];
  }

  remove(id: number): boolean {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new Error(`Todo with id ${id} not found`);
    }

    this.todos.splice(todoIndex, 1);
    return true;
  }
}
