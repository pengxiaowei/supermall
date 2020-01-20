import { Controller } from '@nestjs/common';
import { Category } from '@libs/db/models/category.model';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Category,
})
@ApiTags('商品分类')
@Controller('categories')
export class CategoriesController {
  constructor(@InjectModel(Category) private readonly model) {}
}
