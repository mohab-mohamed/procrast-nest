import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserType } from 'src/dto/create-user.dto';
import { UserInput } from 'src/inputs/user.input';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService,
    ) { }

    @Query(() => String)
    async hello() {
        return 'hello';
    }
    @Query(() => [UserType])
    async users() {
        return this.usersService.findAll();
    }
    @Mutation(() => UserType)
    async createUser(@Args('input') input: UserInput) {
        return this.usersService.create(input);
    }
}