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

  create(createTodoInput: CreateTodoInput): Todo {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      description: createTodoInput.description,
      done: createTodoInput.done || false,
    };

    this.todos.push(newTodo);
    return newTodo;
  }

  findAll(): Todo[] {
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
