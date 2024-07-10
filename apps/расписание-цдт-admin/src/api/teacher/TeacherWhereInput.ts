import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";

export type TeacherWhereInput = {
  id?: StringFilter;
  hours?: IntNullableFilter;
  fullName?: StringNullableFilter;
  room?: StringNullableFilter;
  subject?: StringNullableFilter;
  groups?: GroupListRelationFilter;
  lessons?: LessonListRelationFilter;
  schedules?: ScheduleListRelationFilter;
};
