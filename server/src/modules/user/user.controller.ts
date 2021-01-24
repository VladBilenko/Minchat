import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get()
  public getUser() {
    return 'It is user';
  }
}
