import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
} from "@ionic/react";
import React, { useCallback } from "react";
import { moon } from "ionicons/icons";
import { getComponents } from "../utils/component-utils";
import "./Home.css";

const Home: React.FC = () => {
  const components = getComponents();

  const toggleDarkMode = useCallback(() => {
    document.body.classList.toggle("dark");
  }, []);

  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Ionic Framework</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ionic Framework</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList class="theme-list" lines="full">
          <IonItem>
            <IonIcon
              slot="start"
              icon={moon}
              class="component-icon component-icon-dark"
            ></IonIcon>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle slot="end" onIonChange={toggleDarkMode}></IonToggle>
          </IonItem>
        </IonList>

        <IonList class="home-list">
          {components.map((component) => {
            const href =
              component.id === "tabs"
                ? "/component/tabs/music"
                : `/component/${component.id}`;

            return (
              <IonItem routerLink={href} key={component.id}>
                <IonIcon
                  slot="start"
                  icon={component.icon}
                  class="component-icon component-icon-primary"
                ></IonIcon>
                <IonLabel>{component.name}</IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
