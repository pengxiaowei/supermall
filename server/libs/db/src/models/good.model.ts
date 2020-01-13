import { prop, modelOptions } from '@typegoose/typegoose';

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
  goods: {
    pop: {
      list: [{ title: string; img: string; price: number }];
    };
  };
}
