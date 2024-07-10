import { SortOrder } from "../../util/SortOrder";

export type TeacherOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  hours?: SortOrder;
  fullName?: SortOrder;
  room?: SortOrder;
  subject?: SortOrder;
};
