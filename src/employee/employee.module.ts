import { Module } from '@nestjs/common';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';
import { EmployeeService } from 'src/employee/employee.service';
import { EmployeeController } from 'src/employee/employee.controller';

@Module({
  providers: [EmployeeService, ...drizzleProvider],
  exports: [],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
