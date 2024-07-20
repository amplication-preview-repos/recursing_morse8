import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FeaturesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FeaturesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
