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
  IonText,
  IonInput,
  IonTextarea,
  IonButton,
  IonAlert,
} from "@ionic/react";
import React, { useState, useCallback } from "react";
import "./Input.css";

const Input: React.FC = () => {
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [showAlert, setShowAlert] = useState(false);
  const processForm = useCallback(async (event) => {
    event.preventDefault();
    setShowAlert(true);
  }, []);

  return (
    <IonPage className="page-input">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Input</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <form onSubmit={(e: any) => processForm(e)}>
          <IonList lines="full" class="ion-no-margin ion-no-padding">
            <IonItem>
              <IonLabel position="stacked">
                First Name <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                required
                type="text"
                onInput={(e: any) => setFirstName(e.target.value)}
                value={firstName}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">
                Last Name <IonText color="danger">*</IonText>
              </IonLabel>
              <IonInput
                required
                type="text"
                onInput={(e: any) => setLastName(e.target.value)}
                value={lastName}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Address</IonLabel>
              <IonInput placeholder="Address Line 1"></IonInput>
              <IonInput placeholder="Address Line 2"></IonInput>
              <IonInput placeholder="City"></IonInput>
              <IonInput placeholder="State"></IonInput>
              <IonInput placeholder="Zip Code"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Notes</IonLabel>
              <IonTextarea></IonTextarea>
            </IonItem>
          </IonList>

          <div className="ion-padding">
            <IonButton expand="block" type="submit" class="ion-no-margin">
              Create account
            </IonButton>
          </div>
        </form>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Account Created"}
        message={`Created account for: <b>${firstName} ${lastName}</b>`}
        buttons={["OK"]}
      />
    </IonPage>
  );
};

export default Input;
