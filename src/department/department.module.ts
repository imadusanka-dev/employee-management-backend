import { Module } from '@nestjs/common';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';
import { DepartmentService } from 'src/department/department.service';
import { DepartmentController } from 'src/department/department.controller';

@Module({
  providers: [DepartmentService, ...drizzleProvider],
  exports: [],
  controllers: [DepartmentController],
})
export class DepartmentModule {}
