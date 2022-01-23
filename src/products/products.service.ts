import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Products } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateProductDTO } from './dtos/create-product.args';
import { UpdateProductDTO } from './dtos/update-product.args';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async createProduct(data: CreateProductDTO): Promise<Products> {
    const result = await this.prisma.products.create({
      data,
    });

    return result;
  }

  async getProducts(): Promise<Products[]> {
    const result = await this.prisma.products.findMany({});

    if (result.length <= 0) {
      throw new HttpException(
        'Nenhum produto encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return result;
  }

  async getProduct(id: number): Promise<Products> {
    const result = await this.prisma.products.findUnique({
      where: {
        id: id,
      },
    });
    if (result) {
      return result;
    }
    throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
  }

  async deleteProduct(id: number): Promise<boolean> {
    const result = await this.prisma.products.findUnique({
      where: {
        id: id,
      },
    });
    if (result) {
      await this.prisma.products.deleteMany({
        where: {
          id: id,
        },
      });
      return true;
    }
    throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
  }

  async updateProduct(id: number, data: UpdateProductDTO): Promise<Products> {
    if (Object.keys(data).length <= 0) {
      throw new HttpException(
        'Nenhum argumento informado',
        HttpStatus.CONFLICT,
      );
    }
    const result = await this.prisma.products.findUnique({
      where: {
        id: id,
      },
    });
    if (result) {
      return await this.prisma.products.update({
        data: {
          ...data,
        },
        where: {
          id: id,
        },
      });
    }
    throw new HttpException('Produto não encontrado', HttpStatus.NOT_FOUND);
  }

  async countProducts(): Promise<number> {
    return await this.prisma.products.count();
    //Poderia ser uma RAW query também: SELECT COUNT(*) from products."Products"
  }

  async lowestStock(): Promise<Products[]> {
    return await this.prisma.products.findMany({
      orderBy: {
        stock: 'asc',
      },
      take: 1,
    });
    /*Poderia ser uma RAW query também:
    SELECT *
    FROM products."Products"
    WHERE stock = (SELECT MIN(stock)
                  FROM products."Products"
                  );
    */
  }

  async highestStock(): Promise<Products[]> {
    return await this.prisma.products.findMany({
      orderBy: {
        stock: 'desc',
      },
      take: 1,
    });
    /*Poderia ser uma RAW query também:
    SELECT *
    FROM products."Products"
    WHERE stock = (SELECT MAX(stock)
                  FROM products."Products"
                  );
    */
  }

  async noStock(): Promise<Products[]> {
    const result = await this.prisma.products.findMany({
      where: {
        stock: {
          lt: 5,
        },
      },
    });
    if (result) {
      return result;
    }
    throw new HttpException('Nenhum produto sem estoque', HttpStatus.NOT_FOUND);
  }
}
