import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAssignedHseRoutineDto } from './create-assigned-hse-routine.dto';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateMultipleAssignedHseRoutineDto extends PartialType(
  CreateAssignedHseRoutineDto
) {
  @ApiProperty()
  @IsArray()
  uuids: string[];
}
