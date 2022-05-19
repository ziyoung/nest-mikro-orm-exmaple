import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core';
import { BaseEntity } from 'src/entities/base.entity';
import { Flavor } from './flavor.entity.ts';

@Entity()
export class Coffee extends BaseEntity {
  @Property()
  name: string;

  @Property()
  description: string;

  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, {
    owner: true,
  })
  flavors = new Collection<Flavor>(this);
}
