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
  IonToggle,
} from "@ionic/react";
import React from "react";
import "./Toggle.css";

const Toggle: React.FC = () => {
  return (
    <IonPage className="page-toggle">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Toggle</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonItem>
            <IonLabel>Blueberry</IonLabel>
            <IonToggle slot="start" name="blueberry" checked></IonToggle>
          </IonItem>

          <IonItem>
            <IonLabel>Apple</IonLabel>
            <IonToggle
              slot="start"
              name="apple"
              color="secondary"
              checked
            ></IonToggle>
          </IonItem>

          <IonItem>
            <IonLabel>Grape</IonLabel>
            <IonToggle
              slot="start"
              name="grape"
              color="tertiary"
              checked
            ></IonToggle>
          </IonItem>

          <IonItem>
            <IonLabel>Kiwi</IonLabel>
            <IonToggle
              slot="start"
              name="kiwi"
              color="success"
              checked
            ></IonToggle>
          </IonItem>

          <IonItem>
            <IonLabel>Orange</IonLabel>
            <IonToggle
              slot="start"
              name="banana"
              color="warning"
              checked
            ></IonToggle>
          </IonItem>

          <IonItem>
            <IonLabel>Cherry</IonLabel>
            <IonToggle
              slot="start"
              name="cherry"
              color="danger"
              checked
            ></IonToggle>
          </IonItem>

          <IonItem>
            <IonLabel>Banana</IonLabel>
            <IonToggle
              slot="start"
              name="banana"
              color="light"
              checked
            ></IonToggle>
          </IonItem>

          <IonItem>
            <IonLabel>Cantaloupe</IonLabel>
            <IonToggle
              slot="start"
              name="cantaloupe"
              color="medium"
              checked
            ></IonToggle>
          </IonItem>

          <IonItem>
            <IonLabel>Blackberry</IonLabel>
            <IonToggle
              slot="start"
              name="blackberry"
              color="dark"
              checked
            ></IonToggle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Toggle;
