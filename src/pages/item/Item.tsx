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
  IonIcon,
  IonAvatar,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonNote,
  IonCheckbox,
  IonToggle,
  IonInput,
} from "@ionic/react";
import {
  starOutline,
  starSharp,
  heartOutline,
  heartSharp,
  shareOutline,
  shareSharp,
  trashOutline,
  trashSharp,
} from "ionicons/icons";

import React from "react";
import "./Item.css";

const Item: React.FC = () => {
  return (
    <IonPage className="page-item">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Item</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonListHeader lines="full">
            <IonLabel>Icon Items</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonIcon slot="start" ios={starOutline} md={starSharp}></IonIcon>
            <IonLabel>Label</IonLabel>
          </IonItem>

          <IonItem lines="full">
            <IonIcon slot="start" ios={heartOutline} md={heartSharp}></IonIcon>
            <IonLabel>Label</IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader lines="full">
            <IonLabel>Media Items</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/avatar.svg" alt="avatar" />
            </IonAvatar>
            <IonLabel>Label</IonLabel>
          </IonItem>

          <IonItem lines="full">
            <IonAvatar slot="start">
              <img src="/assets/avatar.svg" alt="avatar" />
            </IonAvatar>
            <IonLabel>Label</IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader>
            <IonLabel>Sliding Items</IonLabel>
          </IonListHeader>

          <IonItemSliding>
            <IonItem>
              <IonLabel>Label</IonLabel>
            </IonItem>

            <IonItemOptions side="start">
              <IonItemOption color="primary">Archive</IonItemOption>
            </IonItemOptions>

            <IonItemOptions side="end">
              <IonItemOption expandable color="danger">
                Delete
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem>
              <IonLabel>Label</IonLabel>
            </IonItem>

            <IonItemOptions side="start">
              <IonItemOption color="primary">
                <IonIcon
                  slot="icon-only"
                  ios={shareOutline}
                  md={shareSharp}
                ></IonIcon>
              </IonItemOption>
            </IonItemOptions>

            <IonItemOptions side="end">
              <IonItemOption expandable color="danger">
                <IonIcon
                  slot="icon-only"
                  ios={trashOutline}
                  md={trashSharp}
                ></IonIcon>
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>

        <IonList>
          <IonListHeader>
            <IonLabel>Inputs & Controls</IonLabel>
          </IonListHeader>

          <IonItemSliding>
            <IonItem>
              <IonLabel>Note</IonLabel>
              <IonNote slot="end">99</IonNote>
            </IonItem>

            <IonItem>
              <IonLabel>Checkbox</IonLabel>
              <IonCheckbox slot="end" checked></IonCheckbox>
            </IonItem>

            <IonItem>
              <IonLabel>Toggle</IonLabel>
              <IonToggle slot="end" checked></IonToggle>
            </IonItem>

            <IonItem>
              <IonLabel>Input</IonLabel>
              <IonInput slot="end" placeholder="Placeholder"></IonInput>
            </IonItem>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Item;
