import React, { Component, createContext } from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "react-modal";

import monsters from "../data/monsters.json";
import spells from "../data/spells.json";

import Header from "./Header";
import Welcome from "./Welcome";
import MonsterDatabase from "./MonsterDatabase";
import SpellDatabase from "./SpellDatabase";
import MonsterSingle from "./MonsterSingle";
import NotFound from "./NotFound";
import { createGlobalStyle } from "styled-components";
import EncounterManager from "./Encounter/EncounterManager";
import EffectShowcase from "./Surges/EffectShowcase";

// TODO: Refactor to tachyon
const GlobalStyle = createGlobalStyle`
    body {
    margin: 0 auto;
    padding: 0;
    font-family: "Helvetica", "Arial", "sans-serif";
    font-size: 14px;
    line-height: 1.5;
    }
`;

export const DBContext = createContext({
    monstersDB: monsters,
    spellsDB: spells,
});

// See http://reactcommunity.org/react-modal/accessibility/
Modal.setAppElement("#root");

class App extends Component {
    render() {
        return (
            <div className="App">
                <GlobalStyle />
                <Route path="/" component={Header} />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route
                        exact
                        path="/monsters"
                        render={props => <MonsterDatabase monstersDB={monsters} {...props} />}
                    />
                    <Route
                        path="/monsters/:monsterId"
                        render={props => <MonsterSingle monstersDB={monsters} {...props} />}
                    />
                    <Route
                        path="/encounter"
                        render={props => <EncounterManager monstersDB={monsters} {...props} />}
                    />
                    <Route
                        exact
                        path="/spells"
                        render={props => <SpellDatabase {...props} spellsDB={spells} />}
                    />
                    <Route
                        exact
                        path="/wsg"
                        render={() => <EffectShowcase />}
                    />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
