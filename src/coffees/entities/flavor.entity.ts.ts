import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees = new Collection<Coffee>(this);
}
