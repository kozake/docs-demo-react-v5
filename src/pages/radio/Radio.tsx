import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonList,
  IonRadioGroup,
  IonListHeader,
  IonLabel,
  IonItem,
  IonRadio,
} from "@ionic/react";
import React from "react";
import "./Radio.css";

const Radio: React.FC = () => {
  return (
    <IonPage className="page-radio">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Radio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonRadioGroup value="grape">
            <IonListHeader>
              <IonLabel>Fruit</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>Apple</IonLabel>
              <IonRadio slot="start" color="success" value="apple"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Grape</IonLabel>
              <IonRadio slot="start" color="tertiary" value="grape"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Cherry</IonLabel>
              <IonRadio slot="start" color="danger" value="cherry"></IonRadio>
            </IonItem>
          </IonRadioGroup>

          <IonRadioGroup value="anchovies" allow-empty-selection>
            <IonListHeader>
              <IonLabel>Pizza Topping</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>Beef</IonLabel>
              <IonRadio slot="end" color="primary" value="beef"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Anchovies</IonLabel>
              <IonRadio
                slot="end"
                color="secondary"
                value="anchovies"
              ></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Sausage</IonLabel>
              <IonRadio slot="end" color="tertiary" value="sausage"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Bellpepper</IonLabel>
              <IonRadio slot="end" color="success" value="tomato"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Tomato</IonLabel>
              <IonRadio slot="end" color="warning" value="carrot"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Pepperoni</IonLabel>
              <IonRadio slot="end" color="danger" value="pepperoni"></IonRadio>
            </IonItem>
          </IonRadioGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Radio;
