import { SortOrder } from "../../util/SortOrder";

export type GroupOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  lessonTime?: SortOrder;
  room?: SortOrder;
  subject?: SortOrder;
  teacherId?: SortOrder;
};
