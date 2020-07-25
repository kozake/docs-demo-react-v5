import { IonList, IonItem, IonLabel, IonListHeader } from "@ionic/react";
import React from "react";

const PopoverExamplePage: React.FC = () => {
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Ionic</IonLabel>
      </IonListHeader>
      <IonItem button>Learn Ionic</IonItem>
      <IonItem button>Documentation</IonItem>
      <IonItem button>Showcase</IonItem>
      <IonItem button>GitHub Repo</IonItem>
    </IonList>
  );
};

export default PopoverExamplePage;
