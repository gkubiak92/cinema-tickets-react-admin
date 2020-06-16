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
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="description" multiline />
      <TextInput source="stars" />
      <TextInput source="photosUrl" />
      <TextInput source="writer" />
      <TextInput source="director" />
      <TextInput source="genres" />
      <BooleanInput source="isPopular" />
      <BooleanInput source="isUpcoming" />
      <NumberInput source="rating" />
      <ArrayInput source="screeningDates">
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
