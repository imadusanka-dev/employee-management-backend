import { Injectable, Inject } from '@nestjs/common';
import { asc } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import * as schema from 'src/drizzle/schemas';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async findDepartments() {
    const data = await this.db
      .select()
      .from(schema.department)
      .orderBy(asc(schema.department.name));

    return { message: 'Success', data };
  }
}
