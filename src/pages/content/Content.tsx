import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonLabel,
  IonButton,
  IonItem,
} from "@ionic/react";
import React, { useRef, useCallback } from "react";
import "./Content.css";

const Content: React.FC = () => {
  const contentEl = useRef<HTMLIonContentElement>(null);
  const scrollToBottom = useCallback(() => {
    contentEl.current?.scrollToBottom(500);
  }, []);
  const scrollToTop = useCallback(() => {
    contentEl.current?.scrollToTop(500);
  }, []);

  return (
    <IonPage className="page-content">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      ,
      <IonContent ref={contentEl} fullscreen={true}>
        <p className="ion-padding-start ion-padding-end">
          <IonButton
            onClick={() => scrollToBottom()}
            expand="block"
            fill="outline"
          >
            Scroll To Bottom
          </IonButton>
        </p>
        {new Array(30).fill(0).map((_, i) => {
          return (
            <IonItem key={i}>
              <IonLabel>Item {i}</IonLabel>
            </IonItem>
          );
        })}
        <p className="ion-padding-start ion-padding-end">
          <IonButton
            onClick={() => scrollToTop()}
            expand="block"
            fill="outline"
          >
            Scroll To Top
          </IonButton>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Content;
