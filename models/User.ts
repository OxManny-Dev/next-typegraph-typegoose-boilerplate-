import {
  prop as DbField,
  getModelForClass,
} from '@typegoose/typegoose';
import {Field as GQLField, ObjectType} from 'type-graphql';

@ObjectType()
export class User {

  @GQLField()
  @DbField()
  email: string;


  @GQLField()
  @DbField()
  password: string;

}

export const UserModel = getModelForClass(User);
