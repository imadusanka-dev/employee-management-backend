import { IsString, IsInt, IsEmail, IsDateString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  designation: string;

  @IsDateString()
  dob: string;

  @IsString()
  nic: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsInt()
  deparment: number;
}
