import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { Category } from './category.model';

@modelOptions({
  schemaOptions: {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
})
export class Good {
  @prop()
  img: string;

  @prop()
  price: number;

  @prop()
  title: string;

  @prop({ ref: 'Category' })
  category: Ref<Category>;
}
