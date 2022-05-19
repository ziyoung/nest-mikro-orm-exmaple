import { wrap } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: EntityRepository<Coffee>,
  ) {}

  findAll() {
    return this.coffeeRepository.findAll({
      // populate: ['flavors'],
    });
  }

  findOne(id: number) {
    return this.coffeeRepository.findOneOrFail({
      id,
    });
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.findOneOrFail({ id });
    wrap(coffee).assign({
      name: updateCoffeeDto.name,
    });
    this.coffeeRepository.persistAndFlush(coffee);
    return coffee;
  }

  create(dto: CreateCoffeeDto) {
    return null;
  }
}
