import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type LessonWhereInput = {
  id?: StringFilter;
  topic?: StringNullableFilter;
  room?: StringNullableFilter;
  subject?: StringNullableFilter;
  lessonTime?: DateTimeNullableFilter;
  group?: GroupWhereUniqueInput;
  teacher?: TeacherWhereUniqueInput;
  student?: StudentWhereUniqueInput;
};
