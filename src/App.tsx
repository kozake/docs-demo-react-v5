import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { getComponents } from "./utils/component-utils";

/* Theme variables */
import "./theme/dark.css";
import "./theme/variables.css";

const App: React.FC = () => {
  const components = getComponents();

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet animated={true}>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {components
            .filter((c) => c.name !== "tabs")
            .map((component) => {
              return (
                <Route
                  path={`/component/${component.id}`}
                  component={component.component}
                  key={component.id}
                />
              );
            })}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
