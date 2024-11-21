import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { createStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';
import { editStudentDto } from './dto/edit-student.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  //? @desc    create a new student
  //? @route   POST /api/student
  //? @access  public

  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  @ApiCreatedResponse({ description: 'New student created successfully' })
  @ApiBadRequestResponse({ description: 'Invalid data provided' })
  async createStudent(@Body() dto: createStudentDto) {
    const student = await this.studentService.createStudent(dto);

    return {
      success: true,
      message: 'Student created successfully',
      data: student,
    };
  }

  //? @desc    get all students
  //? @route   GET /api/student
  //? @access  private

  @Get()
  async getAllStudents() {
    const students = await this.studentService.getAllStudents();

    return {
      success: true,
      message: 'Students fetched successfully',
      data: students,
    };
  }

  //? @desc    get a students
  //? @route   GET /api/student/:id
  //? @access  private

  @Get(':id')
  async getStudent(@Param('id', ParseIntPipe) id: number) {
    const student = await this.studentService.getStudent(id);

    return {
      success: true,
      message: 'Student fetched successfully',
      data: student,
    };
  }

  //? @desc    update a student
  //? @route   PATCH /api/student/:id
  //? @access  private

  @Patch(':id')
  @UseGuards(JwtGuard)
  async updateStudent(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: editStudentDto,
  ) {
    const students = await this.studentService.updateStudent(id, dto);

    return {
      success: true,
      message: 'Student updated successfully',
      data: students,
    };
  }

  //? @desc    delete a student
  //? @route   DELETE /api/student/:id
  //? @access  private

  @Delete(':id')
  async deleteStudent(@Param('id', ParseIntPipe) id: number) {
    await this.studentService.deleteStudent(id);

    return {
      success: true,
      message: 'Student deleted successfully',
    };
  }
}
