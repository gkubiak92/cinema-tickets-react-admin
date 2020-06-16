import React from "react";
import { Admin, Resource } from "react-admin";
import {
  firebaseDataProvider,
  firebaseAuthProvider,
} from "./firebase/firebase.utils";
import MoviesList from "./pages/movies/movies-list.component";
import MovieEdit from "./pages/movies/movie-edit.component";
import MovieCreate from "./pages/movies/movie-create.component";
//import { createBrowserHistory as createHistory } from "history";

//const history = createHistory();

const App = () => (
  <Admin
    authProvider={firebaseAuthProvider}
    dataProvider={firebaseDataProvider}
    //history={history}
  >
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
