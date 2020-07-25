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
  IonProgressBar,
  IonListHeader,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { addOutline, addSharp } from "ionicons/icons";
import React, { useRef, useCallback } from "react";
import "./Progress.css";

const Progress: React.FC = () => {
  const progressEl = useRef<HTMLIonProgressBarElement>(null);

  const increaseValue = useCallback(() => {
    if (progressEl.current) {
      const value = progressEl.current.value;
      progressEl.current.value = value + 0.1;
    }
  }, [progressEl]);

  return (
    <IonPage className="page-progress">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Progress</IonTitle>
          <IonProgressBar type="indeterminate" color="dark"></IonProgressBar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonListHeader>
            <IonLabel>Determinate</IonLabel>
          </IonListHeader>
          <IonProgressBar value={0.2}></IonProgressBar>
        </IonList>

        <IonList>
          <IonListHeader>
            <IonLabel>Control Determinate</IonLabel>
            <IonButton onClick={() => increaseValue()}>
              <IonIcon
                slot="icon-only"
                ios={addOutline}
                md={addSharp}
              ></IonIcon>
            </IonButton>
          </IonListHeader>
          <IonProgressBar ref={progressEl} value={0.1}></IonProgressBar>
        </IonList>

        <IonList>
          <IonListHeader>
            <IonLabel>Indeterminate</IonLabel>
          </IonListHeader>
          <IonProgressBar type="indeterminate"></IonProgressBar>

          <IonListHeader>
            <IonLabel>Indeterminate (reversed)</IonLabel>
          </IonListHeader>
          <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar>

          <IonListHeader>
            <IonLabel>Buffer</IonLabel>
          </IonListHeader>
          <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar>

          <IonListHeader>
            <IonLabel>Colors</IonLabel>
          </IonListHeader>
          <IonProgressBar
            type="indeterminate"
            color="secondary"
            class="progress-margin"
          ></IonProgressBar>
          <IonProgressBar
            type="indeterminate"
            reversed={true}
            color="tertiary"
            class="progress-margin"
          ></IonProgressBar>
          <IonProgressBar
            value={0.25}
            buffer={0.5}
            color="danger"
            class="progress-margin"
          ></IonProgressBar>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Progress;
