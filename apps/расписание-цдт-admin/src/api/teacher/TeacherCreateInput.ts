import { GroupCreateNestedManyWithoutTeachersInput } from "./GroupCreateNestedManyWithoutTeachersInput";
import { LessonCreateNestedManyWithoutTeachersInput } from "./LessonCreateNestedManyWithoutTeachersInput";
import { ScheduleCreateNestedManyWithoutTeachersInput } from "./ScheduleCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  hours?: number | null;
  fullName?: string | null;
  room?: string | null;
  subject?: string | null;
  groups?: GroupCreateNestedManyWithoutTeachersInput;
  lessons?: LessonCreateNestedManyWithoutTeachersInput;
  schedules?: ScheduleCreateNestedManyWithoutTeachersInput;
};
