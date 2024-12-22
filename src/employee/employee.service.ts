import { Injectable, Inject } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import * as schema from 'src/drizzle/schemas';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  async addEmployee(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.db
      .insert(schema.employee)
      .values(createEmployeeDto)
      .returning();

    return { message: 'Success', data: employee[0] };
  }
}
