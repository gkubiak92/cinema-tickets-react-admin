import React from 'react'
import { List, Datagrid, TextField, BooleanField, NumberField } from 'react-admin';

const MoviesList = props => (
    <List {...props} >
        <Datagrid rowClick="edit" >
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="director" />
            <BooleanField source="isNew" />
            <BooleanField source="isPopular" />
            <BooleanField source="isUpcoming" />
            <TextField source="writer" />
            <NumberField source="rating" />
            {/* <ArrayField source="screeningDates"><SingleFieldList><ChipField source="hoursAndHalls" /></SingleFieldList></ArrayField> */}
            <NumberField source="ticketPrice" />
        </Datagrid>
    </List>
);

export default MoviesList