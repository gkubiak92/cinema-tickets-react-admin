import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const MovieEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" fullWidth />
      <TextInput source="title" fullWidth />
      <TextInput source="description" multiline fullWidth />
      <TextInput source="stars" fullWidth />
      <TextInput source="photosUrl" fullWidth />
      <TextInput source="writer" fullWidth />
      <TextInput source="director" fullWidth />
      <TextInput source="genres" fullWidth />
      <BooleanInput source="isPopular" fullWidth />
      <BooleanInput source="isUpcoming" fullWidth />
      <NumberInput source="rating" fullWidth />
      <ArrayInput source="screeningDates" fullWidth>
        <SimpleFormIterator>
          <DateTimeInput source="date" label="Date" />
          <ReferenceInput
            source="hallId"
            reference="hallsArrangement"
            label="Hall"
          >
            <SelectInput optionText="name" optionValue="id" />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput>
      <BooleanInput source="isNew" />
      <TextInput source="thumbnailUrl" />
      <NumberInput source="ticketPrice" />
    </SimpleForm>
  </Edit>
);

export default MovieEdit;
