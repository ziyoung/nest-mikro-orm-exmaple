import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

const coffees: Coffee[] = [
  {
    id: '1',
    name: 'coffee 1',
    flavors: ['x', 'y'],
  },
  {
    id: '2',
    name: 'coffee 2',
    flavors: ['x', 'y'],
  },
];

@Injectable()
export class CoffeesService {
  findAll() {
    return coffees;
  }

  findOne(id: string) {
    return coffees.find((coffee) => coffee.id === id);
  }

  update(id: string, UpdateCoffeeDto: UpdateCoffeeDto) {
    const index = coffees.findIndex((coffee) => coffee.id === id);
    if (index === -1) {
      throw new NotFoundException(`${id} not found`)
    }

    coffees.splice(index, 1, {
      ...coffees[index],
      ...UpdateCoffeeDto,
    });
  }

  create(dto: CreateCoffeeDto) {
    const coffee: Coffee = {
      id: String(coffees.length),
      ...dto,
    };
    coffees.push(coffee);
    return coffee;
  }
}
