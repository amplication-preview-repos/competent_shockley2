import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";
import { LessonUpdateManyWithoutGroupsInput } from "./LessonUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  name?: string | null;
  lessonTime?: Date | null;
  room?: string | null;
  subject?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
  lessons?: LessonUpdateManyWithoutGroupsInput;
};
