import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LessonTitle } from "../lesson/LessonTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fullName" source="fullName" />
        <TextInput label="certificateNumber" source="certificateNumber" />
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
