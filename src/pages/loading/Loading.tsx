import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonLoading,
} from "@ionic/react";
import React, { useState } from "react";
import ComponentDetails from "../../components/ComponentDetails";
import "./Loading.css";

const Loading: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false);
  const description = `The <b>Loading</b> overlay can be used to indicate activity
      while blocking user interaction. It appears on top of the app's content, and can be
      dismissed by the app to resume user interaction with the app.`;
  const url = "loading";

  return (
    <IonPage className="page-loading">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Loading</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="component-content">
        <ComponentDetails
          description={description}
          url={url}
        ></ComponentDetails>

        <div className="ion-padding-start ion-padding-end">
          <IonButton expand="block" onClick={() => setShowLoading(true)}>
            Open Loading
          </IonButton>
        </div>
      </IonContent>
      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message="Please wait..."
        duration={3000}
      ></IonLoading>
    </IonPage>
  );
};

export default Loading;
