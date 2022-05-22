import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeePaginationQueryDto } from './dto/coffee-pagination-query.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQueryDto: CoffeePaginationQueryDto) {
    return this.coffeesService.findAll(paginationQueryDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const coffee = await this.coffeesService.findOne(id);
    if (!coffee) {
      throw new NotFoundException(`can't find coffee by id ${id}`);
    }
    return coffee;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Post('/create2')
  create2(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create2(createCoffeeDto);
  }
}
