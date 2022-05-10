import { IsString, MinLength } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @MinLength(1)
  @IsString({
    each: true,
  })
  readonly flavors: string[];
}
