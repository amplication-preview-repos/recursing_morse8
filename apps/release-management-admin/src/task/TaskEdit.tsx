import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="summary" source="summary" />
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="jiraId" source="jiraId" />
        <TextInput label="relatedFeature" source="relatedFeature" />
      </SimpleForm>
    </Edit>
  );
};
