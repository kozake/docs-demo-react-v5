import {
  IonActionSheet,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  isPlatform,
} from "@ionic/react";
import React, { useState } from "react";
import { trash, share, caretForwardCircle, heart, close } from "ionicons/icons";
import ComponentDetails from "../../components/ComponentDetails";
import "./ActionSheet.css";

const ActionSheet: React.FC = () => {
  const description = `The <b>Action Sheet</b> is a dialog that displays a set of options. It appears on
      top of the app’s content, and must be manually dismissed by the user before they can
      resume interaction with the app. There are multiple ways to dismiss the action sheet,
      including tapping the backdrop or hitting the escape key.`;
  const url = "action-sheet";

  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonPage className="page-actionSheet">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Action Sheet</IonTitle>
        </IonToolbar>
      </IonHeader>
      ,
      <IonContent fullscreen class="component-content">
        <ComponentDetails
          description={description}
          url={url}
        ></ComponentDetails>

        <div className="ion-padding-start ion-padding-end">
          <IonButton expand="block" onClick={() => setShowActionSheet(true)}>
            Open Action Sheet
          </IonButton>
        </div>
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass="my-custom-class"
        header="Albums"
        buttons={[
          {
            text: "Delete",
            role: "destructive",
            icon: !isPlatform("ios") ? trash : undefined,
            handler: () => {
              console.log("Delete clicked");
            },
          },
          {
            text: "Share",
            icon: !isPlatform("ios") ? share : undefined,
            handler: () => {
              console.log("Share clicked");
            },
          },
          {
            text: "Play (open modal)",
            icon: !isPlatform("ios") ? caretForwardCircle : undefined,
            handler: () => {
              console.log("Play clicked");
            },
          },
          {
            text: "Favorite",
            icon: !isPlatform("ios") ? heart : undefined,
            handler: () => {
              console.log("Favorite clicked");
            },
          },
          {
            text: "Cancel",
            icon: !isPlatform("ios") ? close : undefined,
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ]}
      ></IonActionSheet>
    </IonPage>
  );
};

export default ActionSheet;
