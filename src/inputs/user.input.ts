import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class UserInput {
    @Field()
    readonly email: String;
}