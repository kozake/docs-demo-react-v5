import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonText,
} from "@ionic/react";
import React from "react";
import "./Text.css";

const Text: React.FC = () => {
  return (
    <IonPage className="page-text">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Text</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent
        fullscreen={true}
        className="ion-padding-start ion-padding-end"
      >
        <IonText color="primary">
          <h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        </IonText>

        <IonText color="secondary">
          <h2>Nam rutrum justo massa, maximus elementum leo dignissim ac.</h2>
        </IonText>

        <IonText color="tertiary">
          <h3>Vestibulum eleifend lorem nec neque interdum varius.</h3>
        </IonText>

        <IonText color="success">
          <h4>Sed in neque at nibh congue tincidunt.</h4>
        </IonText>

        <IonText color="warning">
          <h5>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae;
          </h5>
        </IonText>

        <IonText color="danger">
          <h6>Suspendisse potenti.</h6>
        </IonText>

        <p>
          Donec magna odio, <IonText color="primary">semper</IonText> ac nibh
          et, vestibulum eleifend felis. Donec{" "}
          <IonText color="secondary">pulvinar</IonText> ex non quam vulputate
          malesuada in a magna. Praesent massa arcu,{" "}
          <IonText color="tertiary">vehicula</IonText> id pharetra et, cursus at
          lectus.
        </p>
      </IonContent>
    </IonPage>
  );
};
export default Text;
