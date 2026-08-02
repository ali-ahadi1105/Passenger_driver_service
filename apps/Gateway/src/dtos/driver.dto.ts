import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber } from 'class-validator';

export class DriverSignUpDto {
    @ApiProperty({
        type: String,
        required: true,
        example: '+989123564578',
        description: 'driver phone number'
    })
    @IsPhoneNumber('IR', { message: 'شماره تلفن معتبر وارد کنید' })
    phone: string;
}