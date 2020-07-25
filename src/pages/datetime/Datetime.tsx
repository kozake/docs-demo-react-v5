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
  IonList,
  IonInput,
  IonItemDivider,
  IonDatetime,
} from "@ionic/react";
import React from "react";
import "./Datetime.css";

const Datetime: React.FC = () => {
  return (
    <IonPage className="page-datetime">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Date & Time Picker</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonItem>
            <IonInput placeholder="Title"></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonInput placeholder="Location"></IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <IonItem>
            <IonLabel>Start Date</IonLabel>
            <IonDatetime
              value="1990-02-19"
              placeholder="Select Date"
            ></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel>Start Time</IonLabel>
            <IonDatetime
              display-format="h:mm A"
              picker-format="h:mm A"
              value="1990-02-19T07:43Z"
            ></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel>Ends</IonLabel>
            <IonDatetime
              value="1990-02-20"
              placeholder="Select Date"
            ></IonDatetime>
          </IonItem>
          <IonItem>
            <IonLabel>Repeat</IonLabel>
            <IonDatetime placeholder="Never" disabled></IonDatetime>
          </IonItem>
          <IonItem lines="full">
            <IonLabel>Travel Time</IonLabel>
            <IonDatetime placeholder="None" disabled></IonDatetime>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <IonItem lines="full">
            <IonLabel>Alert</IonLabel>
            <IonDatetime placeholder="None" disabled></IonDatetime>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Datetime;
