import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TeacherTitle } from "../teacher/TeacherTitle";
import { LessonTitle } from "../lesson/LessonTitle";

export const GroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <DateTimeInput label="lessonTime" source="lessonTime" />
        <TextInput label="room" source="room" />
        <TextInput label="subject" source="subject" />
        <ReferenceInput source="teacher.id" reference="Teacher" label="Teacher">
          <SelectInput optionText={TeacherTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="lessons"
          reference="Lesson"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LessonTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
