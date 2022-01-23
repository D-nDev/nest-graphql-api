import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { PrismaService } from 'src/prisma.service';
import { ProductsService } from './products.service';

@Module({
  providers: [ProductsService, PrismaService, ProductsResolver],
})
export class ProductsModule {}
