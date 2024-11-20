import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class editStudentDto {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  phoneNo: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  destination: string;

  @IsString()
  @IsOptional()
  message: string;
}
