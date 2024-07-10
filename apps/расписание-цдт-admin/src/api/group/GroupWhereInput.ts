import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";

export type GroupWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  lessonTime?: DateTimeNullableFilter;
  room?: StringNullableFilter;
  subject?: StringNullableFilter;
  teacher?: TeacherWhereUniqueInput;
  lessons?: LessonListRelationFilter;
};
