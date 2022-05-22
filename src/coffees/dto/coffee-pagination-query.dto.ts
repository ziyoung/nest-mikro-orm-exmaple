import { IsOptional } from 'class-validator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

export class CoffeePaginationQueryDto extends PaginationQueryDto {
  @IsOptional()
  keyword: string;
}
