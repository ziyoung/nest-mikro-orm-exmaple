import { PrimaryKey, Property } from '@mikro-orm/core';

export class BaseEntity {
  @PrimaryKey()
  id: number;

  @Property({ name: 'created_time', nullable: true })
  createdTime: Date;

  // @Option
  @Property({ name: 'updated_time', default: '' })
  updatedTime: Date;
}
