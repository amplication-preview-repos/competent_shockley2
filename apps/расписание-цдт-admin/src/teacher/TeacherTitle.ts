import { Teacher as TTeacher } from "../api/teacher/Teacher";

export const TEACHER_TITLE_FIELD = "fullName";

export const TeacherTitle = (record: TTeacher): string => {
  return record.fullName?.toString() || String(record.id);
};
