import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonAlert,
} from "@ionic/react";
import React, { useState } from "react";
import ComponentDetails from "../../components/ComponentDetails";
import "./Alert.css";

const Alert: React.FC = () => {
  const description = `The <b>Alert</b> is a dialog that presents users with information
      or collects information from the user via inputs. It appears on top of the app's content,
      and must be manually dismissed by the user before they can resume interaction with the app.`;
  const url = "alert";

  const [showAlert, setShowAlert] = useState(false);

  return (
    <IonPage className="page-alert">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Alert</IonTitle>
        </IonToolbar>
      </IonHeader>
      ,
      <IonContent fullscreen class="component-content">
        <ComponentDetails
          description={description}
          url={url}
        ></ComponentDetails>

        <div className="ion-padding-start ion-padding-end">
          <IonButton expand="block" onClick={() => setShowAlert(true)}>
            Open Alert
          </IonButton>
        </div>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Use this lightsaber?"}
        message={
          "Do you agree to use this lightsaber to do good across the galaxy?"
        }
        buttons={["Disagree", "Agree"]}
      />
    </IonPage>
  );
};

export default Alert;
