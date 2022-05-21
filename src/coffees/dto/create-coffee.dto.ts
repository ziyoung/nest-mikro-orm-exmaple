import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  // @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  // @MinLength(1)
  // @IsString({
  //   each: true,
  // })
  // readonly flavors: string[];
}
