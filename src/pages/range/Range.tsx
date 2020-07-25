import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonRange,
  IonIcon,
} from "@ionic/react";
import { sunny, contrast, brush, thermometer } from "ionicons/icons";
import React from "react";
import "./Range.css";

const Range: React.FC = () => {
  return (
    <IonPage className="page-range">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Range</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonListHeader>
            <IonLabel>Adjust Display</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonRange value={20}>
              <IonIcon slot="start" size="small" icon={sunny}></IonIcon>
              <IonIcon slot="end" icon={sunny}></IonIcon>
            </IonRange>
          </IonItem>

          <IonItem>
            <IonRange min={-200} max={200} pin color="secondary">
              <IonIcon slot="start" size="small" icon={contrast}></IonIcon>
              <IonIcon slot="end" icon={contrast}></IonIcon>
            </IonRange>
          </IonItem>

          <IonItem>
            <IonRange
              id="dual-range"
              dual-knobs
              pin
              color="dark"
              value={{ lower: 33, upper: 60 }}
            >
              <IonIcon slot="start" size="small" icon={brush}></IonIcon>
              <IonIcon slot="end" icon={brush}></IonIcon>
            </IonRange>
          </IonItem>

          <IonItem>
            <IonRange
              min={1000}
              max={2000}
              step={100}
              value={1400}
              snaps
              color="danger"
            >
              <IonIcon
                slot="start"
                size="small"
                color="danger"
                icon={thermometer}
              ></IonIcon>
              <IonIcon slot="end" color="danger" icon={thermometer}></IonIcon>
            </IonRange>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Range;
