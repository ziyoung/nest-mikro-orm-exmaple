import { Exclude } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

const defaultSize = 10;

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  page: number;

  @IsPositive()
  @IsOptional()
  size: number;

  get realOffset() {
    if (!this.page) {
      return 0;
    }

    return (this.page - 1) * this.realSize;
  }

  get realSize() {
    if (!this.size) {
      return defaultSize;
    }

    return this.size;
  }
}
