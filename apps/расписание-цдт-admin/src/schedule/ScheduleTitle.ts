import { Schedule as TSchedule } from "../api/schedule/Schedule";

export const SCHEDULE_TITLE_FIELD = "room";

export const ScheduleTitle = (record: TSchedule): string => {
  return record.room?.toString() || String(record.id);
};
