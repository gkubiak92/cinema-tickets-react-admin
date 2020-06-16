import React from "react";
import { Admin, Resource } from "react-admin";
import { firebaseDataProvider } from "./firebase/firebase.utils";
import MoviesList from "./components/movies-list/movies-list.component";

const App = () => (
  <Admin dataProvider={firebaseDataProvider}>
    <Resource name="movies" list={MoviesList} />
  </Admin>
);

export default App;
