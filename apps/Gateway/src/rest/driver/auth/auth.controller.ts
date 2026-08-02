import { Controller, Post } from "@nestjs/common";
import { DriverAuthService } from "./auth.service";
import { ApiOperation } from "@nestjs/swagger";
import { DriverSignUpDto } from "src/dtos/driver.dto";

@Controller('auth')
export class DriverAuthController {
    constructor(private readonly authService: DriverAuthService) { }

    @Post('signup')
    @ApiOperation({ summary: 'signup in app by phone number' })
    async signup(body: DriverSignUpDto) {
        const signupResult = await this.authService.signup(body);
        return signupResult;
    }
}