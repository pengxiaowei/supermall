import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { Good } from '@libs/db/models/good.model';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Good,
  routes: {
    find: {
      populate: 'category',
    },
  },
})
@ApiTags('商品')
@Controller('goods')
export class GoodsController {
  constructor(@InjectModel(Good) private readonly model) {}
}
