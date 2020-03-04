import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import Restaurants from "../Restaurants/Restaurants"

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Route exact path='/' component={Restaurants}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
