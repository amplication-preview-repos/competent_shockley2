import { GroupUpdateManyWithoutTeachersInput } from "./GroupUpdateManyWithoutTeachersInput";
import { LessonUpdateManyWithoutTeachersInput } from "./LessonUpdateManyWithoutTeachersInput";
import { ScheduleUpdateManyWithoutTeachersInput } from "./ScheduleUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  hours?: number | null;
  fullName?: string | null;
  room?: string | null;
  subject?: string | null;
  groups?: GroupUpdateManyWithoutTeachersInput;
  lessons?: LessonUpdateManyWithoutTeachersInput;
  schedules?: ScheduleUpdateManyWithoutTeachersInput;
};
