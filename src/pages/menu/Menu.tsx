import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonMenu,
  IonIcon,
} from "@ionic/react";
import { home, person, chatbubbles, settings } from "ionicons/icons";
import React, { useCallback, useRef } from "react";
import "./Menu.css";

const Menu: React.FC = () => {
  const menuEl = useRef<HTMLIonMenuElement>(null);
  const openMenu = useCallback(
    (event) => {
      event.preventDefault();
      menuEl.current?.open();
    },
    [menuEl]
  );

  return (
    <IonPage className="page-menu">
      <IonMenu ref={menuEl} side="start" contentId="main">
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen={true}>
          <IonList>
            <IonItem>
              <IonIcon icon={home} slot="start"></IonIcon>
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={person} slot="start"></IonIcon>
              <IonLabel>Profile</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={chatbubbles} slot="start"></IonIcon>
              <IonLabel>Messages</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={settings} slot="start"></IonIcon>
              <IonLabel>Settings</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <div className="ion-page" id="main">
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/"></IonBackButton>
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <IonButton expand="block" onClick={(e: any) => openMenu(e)}>
            Open Menu
          </IonButton>
        </IonContent>
      </div>
    </IonPage>
  );
};

export default Menu;
