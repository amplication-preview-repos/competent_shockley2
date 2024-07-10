import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";
import { LessonCreateNestedManyWithoutGroupsInput } from "./LessonCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  name?: string | null;
  lessonTime?: Date | null;
  room?: string | null;
  subject?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
  lessons?: LessonCreateNestedManyWithoutGroupsInput;
};
