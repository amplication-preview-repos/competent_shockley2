/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { TeacherWhereUniqueInput } from "../../teacher/base/TeacherWhereUniqueInput";
import { LessonCreateNestedManyWithoutGroupsInput } from "./LessonCreateNestedManyWithoutGroupsInput";

@InputType()
class GroupCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lessonTime?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  room?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  subject?: string | null;

  @ApiProperty({
    required: false,
    type: () => TeacherWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeacherWhereUniqueInput)
  @IsOptional()
  @Field(() => TeacherWhereUniqueInput, {
    nullable: true,
  })
  teacher?: TeacherWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => LessonCreateNestedManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => LessonCreateNestedManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => LessonCreateNestedManyWithoutGroupsInput, {
    nullable: true,
  })
  lessons?: LessonCreateNestedManyWithoutGroupsInput;
}

export { GroupCreateInput as GroupCreateInput };
