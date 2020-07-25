import {
  IonLabel,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/react";
import { musicalNote, videocam, gameController } from "ionicons/icons";
import React from "react";
import TabsMusic from "./TabsMusic";
import TabsGames from "./TabsGames";
import TabsMovies from "./TabsMovies";
import { Route } from "react-router";
import "./Tabs.css";

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/component/tabs/:tab(music)" component={TabsMusic} />
        <Route path="/component/tabs/:tab(movies)" component={TabsMovies} />
        <Route path="/component/tabs/:tab(games)" component={TabsGames} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="music" href="music">
          <IonLabel>Music</IonLabel>
          <IonIcon icon={musicalNote}></IonIcon>
        </IonTabButton>
        <IonTabButton tab="movies" href="movies">
          <IonLabel>Movies</IonLabel>
          <IonIcon icon={videocam}></IonIcon>
        </IonTabButton>
        <IonTabButton tab="games" href="games">
          <IonLabel>Games</IonLabel>
          <IonIcon icon={gameController}></IonIcon>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
export default Tabs;
