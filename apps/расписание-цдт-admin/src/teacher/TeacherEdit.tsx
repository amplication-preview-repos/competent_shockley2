import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GroupTitle } from "../group/GroupTitle";
import { LessonTitle } from "../lesson/LessonTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";

export const TeacherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="hours" source="hours" />
        <TextInput label="fullName" source="fullName" />
        <TextInput label="room" source="room" />
        <TextInput label="subject" source="subject" />
        <ReferenceArrayInput
          source="groups"
          reference="Group"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="lessons"
          reference="Lesson"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LessonTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="schedules"
          reference="Schedule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScheduleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
