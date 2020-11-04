import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact={() => <div>main</div>}></Route>
      <Route> 404 not found </Route>
      <Route></Route>
    </Switch>
  );
}

export default App;
