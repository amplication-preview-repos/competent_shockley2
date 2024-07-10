import { Lesson } from "../lesson/Lesson";

export type Student = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string | null;
  certificateNumber: string | null;
  lessons?: Array<Lesson>;
};
