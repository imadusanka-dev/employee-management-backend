import { Controller, Get } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get('/')
  getDepartments() {
    return this.departmentService.findDepartments();
  }
}
