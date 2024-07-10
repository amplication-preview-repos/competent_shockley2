import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type ScheduleUpdateInput = {
  lessonTime?: Date | null;
  room?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
