import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  fullName?: StringNullableFilter;
  certificateNumber?: StringNullableFilter;
  lessons?: LessonListRelationFilter;
};
