import React from "react";
import { Switch, Route } from "react-router-dom";
import Leagues from "./leagues";
import Teams from "./teams";
import Home from "./home";
import Sports from "./sports";

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/leagues" component={Leagues} />
        <Route path="/teams" component={Teams} />
        <Route path="/sports" component={Sports} />
      </Switch>
    </div>
  );
}

export default Main;
