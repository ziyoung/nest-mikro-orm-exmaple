import { PaginationQueryDto } from './dto/pagination-query.dto';

export class PaginatedResult<T> {
  static create<T>(
    data: T[],
    total: number,
    dto: PaginationQueryDto,
  ): PaginatedResult<T> {
    const result = new PaginatedResult<T>();
    result.data = data;
    result.count = total;
    result.page = dto.page || 1; // default page
    result.size = dto.realSize;
    return result;
  }

  data: T[];
  count: number;
  page: number;
  size: number;
}
