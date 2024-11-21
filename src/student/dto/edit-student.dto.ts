import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class editStudentDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  phoneNo: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  destination: string;

  @IsString()
  @IsOptional()
  message: string;
}
