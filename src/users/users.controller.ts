import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApplicationConfigs } from 'config/application.properties.settings';
import { AccountCredentialEntity } from 'src/account-credential/models/account-credential.entity';
import { AccountEntity } from 'src/account/models/account.entity';
import { UserCreateDto } from './dto/user.create.request.dto';
import { UserIdDto } from './dto/user.id.dto';
import { UserDto } from './dto/user.response.dto';
import { UsersService } from './services/users.service';

@ApiTags('Users')
@Controller(`users`)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserDto,
    description: 'Registro creado correctamente',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'El registro no pudo ser creado',
  })
  @Get('/find/:id')
  async findUser(@Res() res, @Param('id') id: string): Promise<UserDto> {
    try {
      let userDto = await this.usersService.find(id);

      return res.status(HttpStatus.OK).json(userDto);
    } catch (error) {
      return res.status(HttpStatus.FORBIDDEN);
    }
  }

  @ApiParam({ name: 'page' })
  @ApiParam({ name: 'limit' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserDto,
    description: 'Registro creado correctamente',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'El registro no pudo ser creado',
  })
  @Get('/find/all/:page/:limit')
  async findAll(
    @Res() res,
    @Param('limit') limit: number,
    @Param('page') page: number,
  ) {
    try {
      let take = limit;
      let skip = (page - 1) * limit;
      let usersDto = await this.usersService.findAll(skip, take);

      return res.status(HttpStatus.OK).json(usersDto);
    } catch (error) {
      return res.status(HttpStatus.FORBIDDEN);
    }
  }

  @ApiBody({ type: UserCreateDto })
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserDto,
    description: 'Registro creado correctamente',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'El registro no pudo ser creado',
  })
  @Post('/create')
  async create(
    @Res() res,
    @Body() createUserReqDto: UserCreateDto,
  ): Promise<UserDto> {
    try {
      let userDto = await this.usersService.create(createUserReqDto);

      return res.status(HttpStatus.OK).json(userDto);
    } catch (error) {
      return res.status(HttpStatus.FORBIDDEN);
    }
  }
}

