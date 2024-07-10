import { Teacher } from "../teacher/Teacher";

export type Schedule = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lessonTime: Date | null;
  room: string | null;
  teacher?: Teacher | null;
};
