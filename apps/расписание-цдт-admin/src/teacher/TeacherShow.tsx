import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TEACHER_TITLE_FIELD } from "./TeacherTitle";
import { GROUP_TITLE_FIELD } from "../group/GroupTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const TeacherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="hours" source="hours" />
        <TextField label="fullName" source="fullName" />
        <TextField label="room" source="room" />
        <TextField label="subject" source="subject" />
        <ReferenceManyField reference="Group" target="teacherId" label="Groups">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="lessonTime" source="lessonTime" />
            <TextField label="room" source="room" />
            <TextField label="subject" source="subject" />
            <ReferenceField
              label="Teacher"
              source="teacher.id"
              reference="Teacher"
            >
              <TextField source={TEACHER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Lesson"
          target="teacherId"
          label="Lessons"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Teacher"
              source="teacher.id"
              reference="Teacher"
            >
              <TextField source={TEACHER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Schedule"
          target="teacherId"
          label="Schedules"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="lessonTime" source="lessonTime" />
            <TextField label="room" source="room" />
            <ReferenceField
              label="Teacher"
              source="teacher.id"
              reference="Teacher"
            >
              <TextField source={TEACHER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
