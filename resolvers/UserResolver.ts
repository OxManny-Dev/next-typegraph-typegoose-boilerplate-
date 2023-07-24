import 'reflect-metadata';
import {Resolver, Query, Mutation, Field as GQLField, InputType, Arg, ArgsType, Args} from 'type-graphql';
import {User, UserModel} from "@/models";


@InputType()
class CreateUserInputType {
  @GQLField(() => String)
  email?: string;


  @GQLField(() => String)
  password?: string;
}




@Resolver()
export class UserResolver {

  @Query(() => [User])
  async users() {
    return UserModel.find();
  }

  @Mutation(() => User)
  async createUser(@Arg('createUserInputType') createUserInputType: CreateUserInputType) {
    // console.log(email);

    return UserModel.create(createUserInputType);
  }
}