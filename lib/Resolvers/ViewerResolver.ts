import {Resolver, Query, Mutation, Field as GQLField, InputType, Arg, } from 'type-graphql';
import 'reflect-metadata';
import {User, UserModel} from "@/models";


@InputType()
class LoginInputType {
  @GQLField(() => String)
  email?: string;


  @GQLField(() => String)
  password?: string;
}




@Resolver()
export class ViewerResolver {

  @Query(() => [User])
  async users() {
    return UserModel.find();
  }

  @Mutation(() => User)
  async login(@Arg('loginInputType') loginInputType: LoginInputType) {
    try {
      const user = await UserModel.findOne({email: loginInputType.email});

      return user;
    } catch (error) {
      throw new Error('Something happened');
    }


    // return UserModel.create(createUserInputType);
  }
}