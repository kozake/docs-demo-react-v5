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
  IonItem,
  IonButton,
  IonListHeader,
  IonReorderGroup,
  IonReorder,
  IonIcon,
} from "@ionic/react";
import { swapVertical } from "ionicons/icons";
import "./Reorder.css";

import React, { useCallback, useRef } from "react";

const Reorder: React.FC = () => {
  const reorderGroupEl = useRef<HTMLIonReorderGroupElement>(null);

  const toggleReorder = useCallback(() => {
    if (reorderGroupEl.current) {
      reorderGroupEl.current.disabled = !reorderGroupEl.current.disabled;
    }
  }, [reorderGroupEl]);

  return (
    <IonPage className="page-reorder">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Reorder</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => toggleReorder()}>Toggle</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonListHeader>
            <IonLabel>Reorder Icon</IonLabel>
          </IonListHeader>
          <IonReorderGroup
            id="reorder"
            ref={reorderGroupEl}
            onIonItemReorder={({ detail }) => detail.complete()}
          >
            <IonItem>
              <IonLabel>Item 1</IonLabel>
              <IonReorder slot="end"></IonReorder>
            </IonItem>

            <IonItem>
              <IonLabel>Item 2</IonLabel>
              <IonReorder slot="end"></IonReorder>
            </IonItem>

            <IonItem>
              <IonLabel>Item 3</IonLabel>
              <IonReorder slot="end"></IonReorder>
            </IonItem>

            <IonItem>
              <IonLabel>Item 4</IonLabel>
              <IonReorder slot="end"></IonReorder>
            </IonItem>

            <IonListHeader>
              <IonLabel>Custom Reorder Icon</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>Item 5</IonLabel>
              <IonReorder slot="end">
                <IonIcon icon={swapVertical}></IonIcon>
              </IonReorder>
            </IonItem>

            <IonItem>
              <IonLabel>Item 6</IonLabel>
              <IonReorder slot="end">
                <IonIcon icon={swapVertical}></IonIcon>
              </IonReorder>
            </IonItem>

            <IonItem>
              <IonLabel>Item 7</IonLabel>
              <IonReorder slot="end">
                <IonIcon icon={swapVertical}></IonIcon>
              </IonReorder>
            </IonItem>

            <IonListHeader>
              <IonLabel>Reorder Item</IonLabel>
            </IonListHeader>
            <IonReorder>
              <IonItem>
                <IonLabel>Item 8</IonLabel>
              </IonItem>
            </IonReorder>

            <IonReorder>
              <IonItem>
                <IonLabel>Item 9</IonLabel>
              </IonItem>
            </IonReorder>

            <IonReorder>
              <IonItem>
                <IonLabel>Item 10</IonLabel>
              </IonItem>
            </IonReorder>
          </IonReorderGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Reorder;
