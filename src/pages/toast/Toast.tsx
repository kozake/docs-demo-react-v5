import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
import "./Toast.css";
import ComponentDetails from "../../components/ComponentDetails";

const Toast: React.FC = () => {
  const description = `The <b>Toast</b> is a subtle notification commonly used in modern
      applications. It can be used to provide feedback about an operation or to display a
      system message. It appears on top of the app's content, and can be dismissed by the
      app to resume user interaction with the app.`;
  const url = "toast";
  const [showToast, setShowToast] = useState(false);

  return (
    <IonPage className="page-toast">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Toast</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="component-content">
        <ComponentDetails
          description={description}
          url={url}
        ></ComponentDetails>

        <div className="ion-padding-start ion-padding-end">
          <IonButton expand="block" onClick={() => setShowToast(true)}>
            Open Toast
          </IonButton>
        </div>
      </IonContent>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        color="dark"
        duration={2000}
        message="Paired successfully"
        buttons={[
          {
            text: "Close",
            role: "cancel",
          },
        ]}
      ></IonToast>
    </IonPage>
  );
};
export default Toast;
