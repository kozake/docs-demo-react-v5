import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonModal,
} from "@ionic/react";
import React, { useState } from "react";
import ComponentDetails from "../../components/ComponentDetails";
import ModalContent from "./ModalContent";
import "./Modal.css";

const Modal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const description = `The <b>Modal</b> is a dialog that appears on top of the app's
      content, and must be dismissed by the user before interaction can resume. It is
      useful as a select component when there are a lot of options to choose from, or when
      filtering items in a list, as well as many other use cases.`;
  const url = "modal";

  return (
    <IonPage className="page-modal">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Modal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="component-content">
        <ComponentDetails
          description={description}
          url={url}
        ></ComponentDetails>

        <div className="ion-padding-start ion-padding-end">
          <IonButton expand="block" onClick={() => setShowModal(true)}>
            Open Modal
          </IonButton>
        </div>
      </IonContent>
      <IonModal
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
        swipeToClose={true}
      >
        <ModalContent onClose={() => setShowModal(false)}></ModalContent>
      </IonModal>
    </IonPage>
  );
};

export default Modal;
