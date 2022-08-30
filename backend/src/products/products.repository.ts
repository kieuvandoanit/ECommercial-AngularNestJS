import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { ProductInterface } from './interfaces/product.interface';

@Injectable()
export class ProductRepository{
    constructor(@InjectModel('Products') private readonly productModel: Model<ProductInterface>){}

    public async create(data: ProductInterface): Promise<ProductInterface>{
        let product = new this.productModel(data);
        return await product.save();
    }
}