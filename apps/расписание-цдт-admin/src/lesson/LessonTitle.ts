import { Lesson as TLesson } from "../api/lesson/Lesson";

export const LESSON_TITLE_FIELD = "topic";

export const LessonTitle = (record: TLesson): string => {
  return record.topic?.toString() || String(record.id);
};
