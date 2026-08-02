import { Injectable } from "@nestjs/common";
import { DriverSignUpDto } from "src/dtos/driver.dto";

@Injectable()
export class DriverAuthService {
    async signup(body: DriverSignUpDto) {
        return 'welcome';
    }
}