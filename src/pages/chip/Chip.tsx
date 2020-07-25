import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonLabel,
  IonListHeader,
  IonChip,
  IonIcon,
  IonAvatar,
} from "@ionic/react";
import {
  checkmarkCircle,
  pin,
  wine,
  restaurant,
  videocam,
  closeCircle,
} from "ionicons/icons";
import React from "react";
import "./Chip.css";

const Chip: React.FC = () => {
  return (
    <IonPage className="page-chip">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Chip</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonListHeader>
          <IonLabel>Basic</IonLabel>
        </IonListHeader>
        <div className="ion-padding-horizontal">
          <IonChip>
            <IonLabel>Default</IonLabel>
          </IonChip>
          <IonChip>
            <IonIcon icon={checkmarkCircle}></IonIcon>
            <IonLabel>Icon</IonLabel>
          </IonChip>
          <IonChip>
            <IonAvatar>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjYzVkYmZmIiBkPSJNMCAwaDUxMnY1MTJIMHoiLz48cGF0aCBkPSJNMjU2IDMwNGM2MS42IDAgMTEyLTUwLjQgMTEyLTExMlMzMTcuNiA4MCAyNTYgODBzLTExMiA1MC40LTExMiAxMTIgNTAuNCAxMTIgMTEyIDExMnptMCA0MGMtNzQuMiAwLTIyNCAzNy44LTIyNCAxMTJ2NTZoNDQ4di01NmMwLTc0LjItMTQ5LjgtMTEyLTIyNC0xMTJ6IiBmaWxsPSIjODJhZWZmIi8+PC9zdmc+"
                alt="hoge"
              />
            </IonAvatar>
            <IonLabel>Avatar</IonLabel>
          </IonChip>
        </div>

        <IonListHeader>
          <IonLabel>Colors</IonLabel>
        </IonListHeader>
        <div className="ion-padding-horizontal">
          <IonChip color="primary">
            <IonLabel>Primary</IonLabel>
          </IonChip>
          <IonChip color="secondary">
            <IonLabel>Secondary</IonLabel>
          </IonChip>
          <IonChip color="tertiary">
            <IonLabel>Tertiary</IonLabel>
          </IonChip>
          <IonChip color="success">
            <IonLabel>Success</IonLabel>
          </IonChip>
          <IonChip color="warning">
            <IonLabel>Warning</IonLabel>
          </IonChip>
          <IonChip color="danger">
            <IonLabel>Danger</IonLabel>
          </IonChip>
        </div>

        <IonListHeader>
          <IonLabel>Outline</IonLabel>
        </IonListHeader>
        <div className="ion-padding-horizontal">
          <IonChip outline color="primary">
            <IonLabel>Primary</IonLabel>
          </IonChip>
          <IonChip outline color="secondary">
            <IonLabel>Secondary</IonLabel>
          </IonChip>
          <IonChip outline color="tertiary">
            <IonLabel>Tertiary</IonLabel>
          </IonChip>
          <IonChip outline color="success">
            <IonLabel>Success</IonLabel>
          </IonChip>
          <IonChip outline color="warning">
            <IonLabel>Warning</IonLabel>
          </IonChip>
          <IonChip outline color="danger">
            <IonLabel>Danger</IonLabel>
          </IonChip>
        </div>

        <IonListHeader>
          <IonLabel>Icons</IonLabel>
        </IonListHeader>
        <div className="ion-padding-horizontal">
          <IonChip outline color="primary">
            <IonIcon icon={pin}></IonIcon>
            <IonLabel>Madison</IonLabel>
            <IonIcon icon={closeCircle}></IonIcon>
          </IonChip>
          <IonChip outline color="secondary">
            <IonIcon icon={wine}></IonIcon>
            <IonLabel>Nightlife</IonLabel>
            <IonIcon icon={closeCircle}></IonIcon>
          </IonChip>
          <IonChip outline color="tertiary">
            <IonIcon icon={restaurant}></IonIcon>
            <IonLabel>Dining</IonLabel>
            <IonIcon icon={closeCircle}></IonIcon>
          </IonChip>
          <IonChip outline color="dark">
            <IonIcon icon={videocam}></IonIcon>
            <IonLabel>Entertainment</IonLabel>
            <IonIcon icon={closeCircle}></IonIcon>
          </IonChip>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Chip;
