import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonLabel,
  IonList,
  IonItem,
  IonListHeader,
  IonCheckbox,
} from "@ionic/react";
import React from "react";
import "./Checkbox.css";

const Checkbox: React.FC = () => {
  return (
    <IonPage className="page-checkbox">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Checkbox</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonListHeader>
            <IonLabel>Characters</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Jon Snow</IonLabel>
            <IonCheckbox color="primary" checked slot="start"></IonCheckbox>
          </IonItem>
          <IonItem>
            <IonCheckbox color="dark" checked slot="start"></IonCheckbox>
            <IonLabel>Daenerys Targaryen</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox disabled slot="start"></IonCheckbox>
            <IonLabel>Arya Stark</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox color="secondary" slot="start"></IonCheckbox>
            <IonLabel>Tyrion Lannister</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox color="danger" checked slot="start"></IonCheckbox>
            <IonLabel>Sansa Stark</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox color="primary" slot="start"></IonCheckbox>
            <IonLabel>Khal Drogo</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox color="tertiary" checked slot="start"></IonCheckbox>
            <IonLabel>Cersei Lannister</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox color="medium" checked slot="start"></IonCheckbox>
            <IonLabel>Stannis Baratheon</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox color="primary" disabled slot="start"></IonCheckbox>
            <IonLabel>Petyr Baelish</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox color="dark" checked slot="start"></IonCheckbox>
            <IonLabel>Hodor</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox color="secondary" checked slot="start"></IonCheckbox>
            <IonLabel>Catelyn Stark</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox color="primary" slot="start"></IonCheckbox>
            <IonLabel>Bronn</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Checkbox;
