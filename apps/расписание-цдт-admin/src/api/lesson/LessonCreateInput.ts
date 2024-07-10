import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type LessonCreateInput = {
  topic?: string | null;
  room?: string | null;
  subject?: string | null;
  lessonTime?: Date | null;
  group?: GroupWhereUniqueInput | null;
  teacher?: TeacherWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
