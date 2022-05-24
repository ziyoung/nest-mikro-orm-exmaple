import { ObjectQuery } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PaginatedResult } from 'src/common/paginated-result';
import { CoffeePaginationQueryDto } from './dto/coffee-pagination-query.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: EntityRepository<Coffee>,
  ) {}

  async findAll(paginationQueryDto: CoffeePaginationQueryDto) {
    const { keyword, realSize, realOffset } = paginationQueryDto;
    const filter: ObjectQuery<Coffee> | undefined = keyword
      ? {
          name: {
            $like: keyword,
          },
        }
      : undefined;
    const [coffees, count] = await this.coffeeRepository.findAndCount(filter, {
      limit: realSize,
      offset: realOffset,
    });
    return PaginatedResult.create(coffees, count, paginationQueryDto);
  }

  findOne(id: number) {
    return this.coffeeRepository.findOne({
      id,
    });
  }

  async mustFindOne(id: number) {
    const coffee = await this.findOne(id);
    if (!coffee) {
      throw new NotFoundException(`can't find coffee by id ${id}`);
    }
    return coffee;
  }

  async remove(id: number) {
    const coffee = await this.mustFindOne(id);
    return this.coffeeRepository.removeAndFlush(coffee);
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.findOneOrFail({ id });
    this.coffeeRepository.assign(coffee, updateCoffeeDto);
    // 或者这样使用 assign
    // wrap(coffee).assign(updateCoffeeDto);
    await this.coffeeRepository.persistAndFlush(coffee);
    return coffee;
  }

  async create(dto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(dto);
    // 或者使用 assign 写成下面的语句
    // const coffee = new Coffee();
    // this.coffeeRepository.assign(coffee, dto);
    await this.coffeeRepository.persistAndFlush(coffee);
    return coffee;
  }
}
