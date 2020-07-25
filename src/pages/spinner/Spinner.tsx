import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonLabel,
  IonItem,
  IonSpinner,
} from "@ionic/react";
import React from "react";
import "./Spinner.css";

const Spinner: React.FC = () => {
  return (
    <IonPage className="page-spinner">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Spinner</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonItem>
          <IonSpinner slot="start"></IonSpinner>
          <IonLabel>Default Spinner</IonLabel>
        </IonItem>

        <IonItem>
          <IonSpinner slot="start" name="lines"></IonSpinner>
          <IonLabel>Lines</IonLabel>
        </IonItem>

        <IonItem>
          <IonSpinner slot="start" name="lines-small"></IonSpinner>
          <IonLabel>Lines Small</IonLabel>
        </IonItem>

        <IonItem>
          <IonSpinner slot="start" name="dots"></IonSpinner>
          <IonLabel>Dots</IonLabel>
        </IonItem>

        <IonItem>
          <IonSpinner slot="start" name="bubbles"></IonSpinner>
          <IonLabel>Bubbles</IonLabel>
        </IonItem>

        <IonItem>
          <IonSpinner slot="start" name="circles"></IonSpinner>
          <IonLabel>Circles</IonLabel>
        </IonItem>

        <IonItem>
          <IonSpinner slot="start" name="crescent"></IonSpinner>
          <IonLabel>Crescent</IonLabel>
        </IonItem>

        <IonItem>
          <IonSpinner slot="start" paused={true}></IonSpinner>
          <IonLabel>Paused Spinner</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
export default Spinner;
