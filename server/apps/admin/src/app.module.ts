import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { GoodsModule } from './goods/goods.module';

@Module({
  imports: [
    DbModule,
    GoodsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
