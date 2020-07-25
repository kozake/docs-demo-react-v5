import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from "@ionic/react";
import React from "react";

const TabsMusic: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Music</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="ion-padding">
        <h1>Music</h1>
      </IonContent>
    </IonPage>
  );
};

export default TabsMusic;
