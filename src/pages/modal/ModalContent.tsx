import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonAvatar,
  IonImg,
  IonLabel,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";

const ModalContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <IonPage className="item-page">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => onClose()}>Cancel</IonButton>
          </IonButtons>
          <IonTitle>Contacts</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={add}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="/assets/avatar-gollum.jpg" />
            </IonAvatar>
            <IonLabel>
              <h2>Gollum</h2>
              <p>Sneaky little hobbitses!</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="/assets/avatar-frodo.jpg" />
            </IonAvatar>
            <IonLabel>
              <h2>Frodo</h2>
              <p>Go back, Sam! I'm going to Mordor alone!</p>
            </IonLabel>
          </IonItem>
          <IonItem lines="full">
            <IonAvatar slot="start">
              <IonImg src="/assets/avatar-samwise.jpg" />
            </IonAvatar>
            <IonLabel>
              <h2>Samwise</h2>
              <p>What we need is a few good taters.</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ModalContent;
