import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonListHeader,
  IonLabel,
  IonAvatar,
  IonChip,
  IonList,
  IonItem,
} from "@ionic/react";
import React from "react";
import "./Avatar.css";

const Avatar: React.FC = () => {
  return (
    <IonPage className="page-avatar">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Avatar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonListHeader>
          <IonLabel>Default</IonLabel>
        </IonListHeader>
        <IonAvatar class="ion-margin-start">
          <img src="/assets/avatar.svg" alt="avatar" />
        </IonAvatar>

        <IonListHeader>
          <IonLabel>Chip Avatar</IonLabel>
        </IonListHeader>
        <IonChip class="ion-margin-start">
          <IonAvatar>
            <img src="/assets/avatar.svg" alt="avatar" />
          </IonAvatar>
          <IonLabel>Kit Bishop</IonLabel>
        </IonChip>

        <IonList>
          <IonListHeader>
            <IonLabel>Item Avatars</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar.svg" alt="avatar" />
            </IonAvatar>
            <IonLabel>Lorem ipsum</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar.svg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar.svg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="end">
              <img src="/assets/avatar.svg" alt="avatar" />
            </IonAvatar>
            <IonLabel>Lorem ipsum</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="end">
              <img src="/assets/avatar.svg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="end">
              <img src="/assets/avatar.svg" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Avatar;
