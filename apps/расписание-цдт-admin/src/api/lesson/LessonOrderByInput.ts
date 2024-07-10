import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  topic?: SortOrder;
  room?: SortOrder;
  subject?: SortOrder;
  lessonTime?: SortOrder;
  groupId?: SortOrder;
  teacherId?: SortOrder;
  studentId?: SortOrder;
};
