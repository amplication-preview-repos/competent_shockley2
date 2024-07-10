import { LessonCreateNestedManyWithoutStudentsInput } from "./LessonCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  fullName?: string | null;
  certificateNumber?: string | null;
  lessons?: LessonCreateNestedManyWithoutStudentsInput;
};
