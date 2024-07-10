import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";
import { TEACHER_TITLE_FIELD } from "../teacher/TeacherTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const LessonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="topic" source="topic" />
        <TextField label="room" source="room" />
        <TextField label="subject" source="subject" />
        <TextField label="lessonTime" source="lessonTime" />
        <ReferenceField label="Group" source="group.id" reference="Group">
          <TextField source={GROUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Teacher" source="teacher.id" reference="Teacher">
          <TextField source={TEACHER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
