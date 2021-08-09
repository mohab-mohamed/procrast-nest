import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/users.schema';
import { UserInput } from '../inputs/user.input';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) { }

    async create(UserType: UserInput): Promise<User> {
        const createdUser = new this.UserModel(UserType);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.UserModel.find().exec();
    }
}