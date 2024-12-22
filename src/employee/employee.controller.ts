import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
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

  @Delete('/:id')
  deleteEmployee(@Param('id') id: number) {
    return this.employeeService.deleteEmployee(id);
  }

  @Put('/:id')
  updateEmployee(
    @Param('id') id: number,
    @Body(new ValidationPipe()) updateEmployeeDto: CreateEmployeeDto,
  ) {
    return this.employeeService.updateEmployee(id, updateEmployeeDto);
  }
}
