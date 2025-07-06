import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class StatusArgs {
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
