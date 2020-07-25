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
  IonButton,
} from "@ionic/react";
import React from "react";
import "./Button.css";

const Button: React.FC = () => {
  return (
    <IonPage className="page-button">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Button</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <section>
          <IonListHeader>
            <IonLabel>Small Size</IonLabel>
          </IonListHeader>
          <IonButton size="small">Default</IonButton>
          <IonButton size="small" color="secondary">
            Secondary
          </IonButton>
          <IonButton size="small" color="tertiary">
            Tertiary
          </IonButton>
        </section>

        <section>
          <IonListHeader>
            <IonLabel>Default Size</IonLabel>
          </IonListHeader>
          <IonButton color="success">Success</IonButton>
          <IonButton color="warning">Warning</IonButton>
          <IonButton color="danger">Danger</IonButton>
        </section>

        <section>
          <IonListHeader>
            <IonLabel>Large Size</IonLabel>
          </IonListHeader>
          <IonButton size="large" color="light">
            Light
          </IonButton>
          <IonButton size="large" color="medium">
            Medium
          </IonButton>
          <IonButton size="large" color="dark">
            Dark
          </IonButton>
        </section>

        <section>
          <IonListHeader>
            <IonLabel>Block Width</IonLabel>
          </IonListHeader>
          <IonButton expand="block">A block button</IonButton>
        </section>

        <section>
          <IonListHeader>
            <IonLabel>Full Width</IonLabel>
          </IonListHeader>
          <IonButton expand="full" color="secondary">
            A full-width button
          </IonButton>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Button;
