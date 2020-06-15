import React from 'react';
import { Admin } from 'react-admin';
import { firebaseDataProvider } from './firebase/firebase.utils'

const App = () => (
  <Admin dataProvider={firebaseDataProvider} />
)

export default App;