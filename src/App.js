import React from "react";
import { Admin, Resource } from "react-admin";
import { firebaseDataProvider } from "./firebase/firebase.utils";
import MoviesList from "./components/movies-list/movies-list.component";
import MovieEdit from "./components/movies-list/movie-edit.component";
import MovieCreate from "./components/movies-list/movie-create.component";

const App = () => (
  <Admin dataProvider={firebaseDataProvider}>
    <Resource
      name="movies"
      list={MoviesList}
      edit={MovieEdit}
      create={MovieCreate}
    />
    <Resource name="hallsArrangement" />
  </Admin>
);

export default App;
