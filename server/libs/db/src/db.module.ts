import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Good } from './models/good.model';
import { modelOptions } from '@typegoose/typegoose';

const models = TypegooseModule.forFeature([Good]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/topfullstack', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models,
  ],

  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
