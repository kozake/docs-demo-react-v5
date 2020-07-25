import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonList,
  IonLabel,
  IonItem,
  IonListHeader,
  IonNote,
} from "@ionic/react";
import React from "react";
import "./Note.css";

const Note: React.FC = () => {
  return (
    <IonPage className="page-note">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Note</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonListHeader>
            <IonLabel>List Notes</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Default</IonLabel>
            <IonNote slot="end">11</IonNote>
          </IonItem>

          <IonItem>
            <IonLabel>Primary</IonLabel>
            <IonNote slot="end" color="primary">
              22
            </IonNote>
          </IonItem>

          <IonItem>
            <IonLabel>Secondary</IonLabel>
            <IonNote slot="end" color="secondary">
              33
            </IonNote>
          </IonItem>

          <IonItem>
            <IonLabel>Tertiary</IonLabel>
            <IonNote slot="end" color="tertiary">
              44
            </IonNote>
          </IonItem>

          <IonItem>
            <IonLabel>Success</IonLabel>
            <IonNote slot="end" color="success">
              55
            </IonNote>
          </IonItem>

          <IonItem>
            <IonLabel>Warning</IonLabel>
            <IonNote slot="end" color="warning">
              66
            </IonNote>
          </IonItem>

          <IonItem>
            <IonLabel>Danger</IonLabel>
            <IonNote slot="end" color="danger">
              77
            </IonNote>
          </IonItem>

          <IonItem>
            <IonLabel>Dark</IonLabel>
            <IonNote slot="end" color="dark">
              88
            </IonNote>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Note;
