import { Group } from "../group/Group";
import { Teacher } from "../teacher/Teacher";
import { Student } from "../student/Student";

export type Lesson = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  topic: string | null;
  room: string | null;
  subject: string | null;
  lessonTime: Date | null;
  group?: Group | null;
  teacher?: Teacher | null;
  student?: Student | null;
};
