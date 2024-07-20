import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="summary" source="summary" />
        <TextField label="description" source="description" />
        <TextField label="status" source="status" />
        <TextField label="jiraId" source="jiraId" />
        <TextField label="relatedFeature" source="relatedFeature" />
      </SimpleShowLayout>
    </Show>
  );
};