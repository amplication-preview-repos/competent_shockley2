import { Group } from "../group/Group";
import { Lesson } from "../lesson/Lesson";
import { Schedule } from "../schedule/Schedule";

export type Teacher = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  hours: number | null;
  fullName: string | null;
  room: string | null;
  subject: string | null;
  groups?: Array<Group>;
  lessons?: Array<Lesson>;
  schedules?: Array<Schedule>;
};
