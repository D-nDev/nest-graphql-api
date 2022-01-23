import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.args';
import { GetProductDTO } from './dtos/get-products.args';
import { HttpException, HttpStatus } from '@nestjs/common';
import { UpdateProductDTO } from './dtos/update-product.args';
import { StockDTO } from './dtos/stock-product.args';

@Resolver('Products')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => GetProductDTO)
  async createProduct(@Args('data') data: CreateProductDTO) {
    try {
      return this.productsService.createProduct(data);
    } catch (err: any) {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => [GetProductDTO])
  async products() {
    try {
      return this.productsService.getProducts();
    } catch (err: any) {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => GetProductDTO)
  async product(@Args('id') id: number) {
    try {
      return this.productsService.getProduct(id);
    } catch (err: any) {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Args('id') id: number) {
    try {
      return this.productsService.deleteProduct(id);
    } catch (err: any) {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Mutation(() => GetProductDTO)
  async updateProduct(
    @Args('id') id: number,
    @Args('data') data: UpdateProductDTO,
  ) {
    try {
      return this.productsService.updateProduct(id, data);
    } catch (err: any) {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => Number)
  async countProducts() {
    try {
      return this.productsService.countProducts();
    } catch (err: any) {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => [StockDTO])
  async lowestStock() {
    try {
      return this.productsService.lowestStock();
    } catch (err: any) {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => [StockDTO])
  async highestStock() {
    try {
      return this.productsService.highestStock();
    } catch (err: any) {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Query(() => [StockDTO])
  async noStock() {
    try {
      return this.productsService.noStock();
    } catch (err: any) {
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
