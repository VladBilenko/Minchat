import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';

@Controller('users')
export class UserController {

  @Get()
  public findAll() {
    return 'It is users';
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return `User ${id}`;
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
