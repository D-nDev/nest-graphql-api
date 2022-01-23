import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      debug: false,
      formatError: (error) => {
        const graphQLFormattedError = {
          message: error.extensions?.response?.message || error.message,
          code: error.extensions?.code || 'INTERNAL_ERROR',
          name: error.extensions?.exception?.name || error.name,
        };
        return graphQLFormattedError;
      },
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
