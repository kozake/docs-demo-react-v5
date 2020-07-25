import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonAvatar,
} from "@ionic/react";
import React from "react";
import "./List.css";

const List: React.FC = () => {
  return (
    <IonPage className="page-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonListHeader>
            <IonLabel>Recent Conversations</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar-finn.png" alt="avatar-finn" />
            </IonAvatar>
            <IonLabel>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar-han.png" alt="avatar-han" />
            </IonAvatar>
            <IonLabel>
              <h2>Han</h2>
              <h3>Look, kid...</h3>
              <p>I've got enough on my plate as it is, and I...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar-rey.png" alt="avatar-rey" />
            </IonAvatar>
            <IonLabel>
              <h2>Rey</h2>
              <h3>I can handle myself</h3>
              <p>You will remove these restraints and leave...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar-luke.png" alt="avatar-luke" />
            </IonAvatar>
            <IonLabel>
              <h2>Luke</h2>
              <h3>Your thoughts betray you</h3>
              <p>I feel the good in you, the conflict...</p>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader>
            <IonLabel>Online</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar-poe.png" alt="avatar-poe" />
            </IonAvatar>
            <IonLabel>
              <h2>Poe</h2>
              <h3>New Ride</h3>
              <p>I just upgraded my X-Wing. Next time...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar-ben.png" alt="avatar-ben" />
            </IonAvatar>
            <IonLabel>
              <h2>Ben</h2>
              <h3>Move Along</h3>
              <p>These aren't the droids you're looking for...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar-leia.png" alt="avatar-leia" />
            </IonAvatar>
            <IonLabel>
              <h2>Leia</h2>
              <h3>You're My Only Hope</h3>
              <p>I've placed information vital to the survival...</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar-yoda.png" alt="avatar-yoda" />
            </IonAvatar>
            <IonLabel>
              <h2>Yoda</h2>
              <h3>Size matters not</h3>
              <p>Do or do not. There is no try...</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default List;
