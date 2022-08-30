import { ApiProperty } from "@nestjs/swagger";
import {
    IsArray,
    IsNumber,
    IsNotEmpty,
    ValidateNested,
    IsEmail,
    IsInt,
    Length,
    IsDate,
    Min,
    Max,
    IsString
} from 'class-validator';

export class CreateProductDto{
    @ApiProperty({
        default: 'Sản phẩm 1'
    })
    @Length(3, 50)
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        default: 'Thông tin chi tiết sản phẩm 1'
    })
    @IsNotEmpty()
    @IsString()
    desc: string;

    @ApiProperty({
        default: 100000
    })
    @IsNotEmpty()
    @IsNumber()
    price: number;
}