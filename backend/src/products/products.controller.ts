import { Controller, Query, Get, Body, Post, Res, HttpCode, BadRequestException, Put, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductInterface } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import { ObjectId } from 'mongodb';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Post('')
    public async create(@Body() data: CreateProductDto){
        const { name, desc, price } = data;

        let result = await this.productsService.create({name, desc, price});

        if (result.type === 'string'){
            throw new BadRequestException(result);
        }

        return result;
    }

    
}
