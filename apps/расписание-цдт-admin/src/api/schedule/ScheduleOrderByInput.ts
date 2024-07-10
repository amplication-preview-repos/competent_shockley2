import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lessonTime?: SortOrder;
  room?: SortOrder;
  teacherId?: SortOrder;
};
