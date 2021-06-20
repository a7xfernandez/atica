import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';
import { AccountEntity } from 'src/account/models/account.entity';
import { UserCreateReqDto } from './dto/user.create.request.dto';
import { UserResDto } from './dto/user.response.dto';
import { UsersService } from './services/users.service';

@ApiTags('Users')
@Controller(`${ApplicationConfigs.router}/users`)
export class UsersController {
  constructor(
    private usersService: UsersService,
  ) {}

  @ApiBody({ type: UserCreateReqDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserResDto,
    description: 'Registro creado correctamente',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'El registro no pudo ser creado',
  })
  @Post('/create')
  async create(
    @Res() res,
    @Body() createUserReqDto: UserCreateReqDto,
  ): Promise<UserResDto> {
    try {
      let userDto: UserResDto = new UserResDto();

      let user = new AccountEntity()

      user.firstName= createUserReqDto.firstName;
      user.lastName = createUserReqDto.lastName;
      user.userName = createUserReqDto.userName;
      user.email = createUserReqDto.email;
     
      let result = await this.usersService.create(user);

      console.log(result);

      return res.status(HttpStatus.OK).json(userDto);
    } catch (error) {
      return res.status(HttpStatus.FORBIDDEN);
    }
  }
}

