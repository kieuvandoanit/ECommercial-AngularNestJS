import { Injectable } from '@nestjs/common';
import { Model} from 'mongoose';
import { InjectModel} from '@nestjs/mongoose';
import {Product, ProductSchema} from './schemas/products.schemas';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './products.repository';
import { ProductInterface } from './interfaces/product.interface';

@Injectable()
export class ProductsService {

    constructor(private productRepository: ProductRepository){}

    public async create({name, desc, price}) : Promise<any>{
        const product: ProductInterface = {name, desc, price};
        let newProduct = await this.productRepository.create(product);

        return newProduct;
    }
}
