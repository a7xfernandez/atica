import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/:page/:limit')
  async findAll(
    @Param('limit') limit: number,
    @Param('page') page: number,
  ) {
    let take = limit;
    let skip = (page - 1) * limit;
    return this.usersService.findAll(skip, take);
  }
}
