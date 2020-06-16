import React from "react";
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  NumberField,
  ImageField,
} from "react-admin";
import RatingField from "../../components/ListFields/rating-field/rating-field.component";

const MoviesList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <ImageField source="thumbnailUrl" />
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="director" />
      <BooleanField source="isNew" />
      <BooleanField source="isPopular" />
      <BooleanField source="isUpcoming" />
      <TextField source="writer" />
      <RatingField source="rating" />
      {/* <ArrayField source="screeningDates"><SingleFieldList><ChipField source="hoursAndHalls" /></SingleFieldList></ArrayField> */}
      <NumberField source="ticketPrice" />
    </Datagrid>
  </List>
);

export default MoviesList;
