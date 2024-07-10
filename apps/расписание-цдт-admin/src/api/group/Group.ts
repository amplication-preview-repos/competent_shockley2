import { Teacher } from "../teacher/Teacher";
import { Lesson } from "../lesson/Lesson";

export type Group = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  lessonTime: Date | null;
  room: string | null;
  subject: string | null;
  teacher?: Teacher | null;
  lessons?: Array<Lesson>;
};
