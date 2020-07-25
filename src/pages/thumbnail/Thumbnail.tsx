import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonListHeader,
  IonLabel,
  IonThumbnail,
  IonList,
  IonItem,
} from "@ionic/react";
import React from "react";
import "./Thumbnail.css";

const Thumbnail: React.FC = () => {
  return (
    <IonPage className="page-thumbnail">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Thumbnail</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonListHeader>
          <IonLabel>Default</IonLabel>
        </IonListHeader>
        <IonThumbnail class="ion-margin-start">
          <img src="/assets/thumbnail.svg" alt="thumbnail" />
        </IonThumbnail>

        <IonList>
          <IonListHeader>
            <IonLabel>Item Thumbnails</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/thumbnail.svg" alt="thumbnail" />
            </IonThumbnail>
            <IonLabel>Lorem ipsum</IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/thumbnail.svg" alt="thumbnail" />
            </IonThumbnail>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/thumbnail.svg" alt="thumbnail" />
            </IonThumbnail>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="end">
              <img src="/assets/thumbnail.svg" alt="thumbnail" />
            </IonThumbnail>
            <IonLabel>Lorem ipsum</IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="end">
              <img src="/assets/thumbnail.svg" alt="thumbnail" />
            </IonThumbnail>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="end">
              <img src="/assets/thumbnail.svg" alt="thumbnail" />
            </IonThumbnail>
            <IonLabel>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Thumbnail;
