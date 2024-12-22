import { Injectable, Inject } from '@nestjs/common';
import { eq } from 'drizzle-orm';
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

  async getEmployees() {
    const employees = await this.db
      .select()
      .from(schema.employee)
      .innerJoin(
        schema.department,
        eq(schema.employee.deparment, schema.department.id),
      );

    const data = employees.map((emp) => ({
      ...emp.employee,
      department: emp.department,
    }));

    return { message: 'Success', data };
  }

  async deleteEmployee(id: number) {
    await this.db.delete(schema.employee).where(eq(schema.employee.id, id));

    return { message: 'Success' };
  }
}
