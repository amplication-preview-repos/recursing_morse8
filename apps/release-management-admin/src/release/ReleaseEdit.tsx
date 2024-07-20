import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReleaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="channels"
          source="channels"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <SelectArrayInput
          label="features"
          source="features"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
