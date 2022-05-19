import { PrimaryKey, Property } from '@mikro-orm/core';

export class BaseEntity {
  @PrimaryKey()
  id: number;

  @Property({ name: 'created_time' })
  createdTime: Date;

  @Property({ name: 'updated_time' })
  updatedTime: Date;
}
