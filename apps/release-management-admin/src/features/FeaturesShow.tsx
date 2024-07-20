import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FeaturesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="status" source="status" />
        <TextField label="featureType" source="featureType" />
        <TextField label="type" source="typeField" />
        <TextField label="relatedRelease" source="relatedRelease" />
        <TextField label="relatedTask" source="relatedTask" />
      </SimpleShowLayout>
    </Show>
  );
};
