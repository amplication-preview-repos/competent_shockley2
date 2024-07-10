import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type ScheduleCreateInput = {
  lessonTime?: Date | null;
  room?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
