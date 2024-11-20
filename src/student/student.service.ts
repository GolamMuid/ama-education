import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { createStudentDto } from './dto/create-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { editStudentDto } from './dto/edit-student.dto';
import { error } from 'console';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  // ? Create new student
  async createStudent(dto: createStudentDto) {
    try {
      return await this.prisma.student.create({
        data: dto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          // * P2002 is the unique constraint violation error code
          throw new ConflictException(
            `A student with this ${error.meta.target} already exists.`,
          );
        }
      }

      // * Handle other potential errors
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }

  // ? Get all students
  getStudents() {
    return this.prisma.student.findMany();
  }

  // ? Update student by id
  updateStudent(studentId: string, dto: editStudentDto) {
    const student = this.prisma.student.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException(`Student with ID ${studentId} not found`);
    }

    return this.prisma.student.update({
      where: {
        id: studentId,
      },
      data: {
        ...dto,
      },
    });
  }
}
