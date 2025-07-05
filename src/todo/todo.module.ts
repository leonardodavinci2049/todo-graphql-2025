import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';

@Module({
  providers: [TodoResolver, TodoService],
  exports: [TodoService],
  
})
export class TodoModule {}
