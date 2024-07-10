import { LessonUpdateManyWithoutStudentsInput } from "./LessonUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  fullName?: string | null;
  certificateNumber?: string | null;
  lessons?: LessonUpdateManyWithoutStudentsInput;
};
