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
    return this.coffeeRepository.findAll();
  }

  findOne(id: number) {
    return this.coffeeRepository.findOne({
      id,
    });
  }

  remove(id: number) {
    return this.coffeeRepository.remove({
      id,
    });
  }

  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.findOneOrFail({ id });
    this.coffeeRepository.assign(coffee, updateCoffeeDto);
    // wrap(coffee).assign({
    //   ...updateCoffeeDto
    //   // name: updateCoffeeDto.name,
    // });
    await this.coffeeRepository.persistAndFlush(coffee);
    return coffee;
  }

  async create(dto: CreateCoffeeDto) {
    const c = this.coffeeRepository.create(dto);
    await this.coffeeRepository.persistAndFlush(c);
    return c;
  }

  async create2(dto: CreateCoffeeDto) {
    const coffee = new Coffee();
    this.coffeeRepository.assign(coffee, dto);
    await this.coffeeRepository.persistAndFlush(coffee);
    return coffee;
  }
}
