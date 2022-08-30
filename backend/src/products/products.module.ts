import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductRepository } from './products.repository';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schemas/products.schemas';


@Module({
    imports: [ MongooseModule.forFeature([{name: 'Products', schema: ProductSchema}])],
    controllers: [ProductsController],
    providers: [ProductsService, ProductRepository],
})
export class ProductsModule {}
