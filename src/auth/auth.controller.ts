import { CreateAccessToken } from "./dto/create-access-token.dto";
import { Controller, Req, Res, Post, UseGuards, Get } from "@nestjs/common";
import { ApiTags, ApiBody, ApiResponse, ApiUnauthorizedResponse, ApiHeader, ApiSecurity } from "@nestjs/swagger";
import { AccessToken } from "./dto/access-token.dto";
import { AuthGuard } from "@nestjs/passport";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { AuthService } from "./services/auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { ApiKeyAuthGuard } from "./guards/apikey-auth.guard";

@ApiTags('auth')
@Controller('authenticate')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: CreateAccessToken })
  @ApiResponse({ status: 200, type: AccessToken })
  @ApiUnauthorizedResponse()
  @ApiHeader({
     name: 'HTTP-X-API-KEY',
    description: 'Llave de servicio',
  })
  @UseGuards(LocalAuthGuard)
  @ApiSecurity('api_key', ['api_key'])
  @UseGuards(ApiKeyAuthGuard)  
  @Post()
  async authenticate(@Req() req) {
    return this.authService.generateToken(req.user);
  }
}
