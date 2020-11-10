import React from "react";
import { Route, Switch } from "react-router-dom";
import {Paper} from "@material-ui/core";

function App() {
  return  (
    <main>
      <Paper>
        <Switch>
          <Route path="/" exact component={()=><div>main</div>}/>
          <Route> 404 not found </Route>
        </Switch>
      </Paper>
    </main>
  );
}

export default App;
