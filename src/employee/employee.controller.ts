import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';
import { ValidationPipe } from 'validation.pipe';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('/')
  addEmployee(
    @Body(new ValidationPipe()) createEmployeeDto: CreateEmployeeDto,
  ) {
    return this.employeeService.addEmployee(createEmployeeDto);
  }

  @Get('/')
  getEmployees() {
    return this.employeeService.getEmployees();
  }
}
