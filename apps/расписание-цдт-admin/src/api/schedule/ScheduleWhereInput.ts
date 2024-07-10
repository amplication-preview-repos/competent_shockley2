import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type ScheduleWhereInput = {
  id?: StringFilter;
  lessonTime?: DateTimeNullableFilter;
  room?: StringNullableFilter;
  teacher?: TeacherWhereUniqueInput;
};
