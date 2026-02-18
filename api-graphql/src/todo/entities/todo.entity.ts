import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {ObjectType, ID, Field} from "@nestjs/graphql";

@Entity("todos")
@ObjectType()
export class Todo {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id_todo: string;

  @Field(() => String)
  @Column("varchar")
  description: string;

  @Field(() => Boolean, {nullable: true})
  @Column("boolean", {nullable: true, default: false})
  done?: boolean;
}
