import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { createStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  //? @desc    create a new student
  //? @route   POST /api/student
  //? @access  public
  @Post()
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
    const students = await this.studentService.getStudents();

    return {
      success: true,
      message: 'Students fetched successfully',
      data: students,
    };
  }

  //? @desc    update a student
  //? @route   GET /api/student/:id
  //? @access  private
  // @Patch()
  // async updateStudent(id:string) {
  //   const students = await this.studentService.updateStudent(id);

  //   return {
  //     success: true,
  //     message: 'Students fetched successfully',
  //     data: students,
  //   };
  // }
}
