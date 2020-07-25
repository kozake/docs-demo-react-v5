import { getMode } from "@ionic/core";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonLabel,
  IonListHeader,
  IonSegment,
  IonSegmentButton,
  IonIcon,
} from "@ionic/react";
import {
  call,
  heart,
  pin,
  playCircleOutline,
  people,
  cog,
  person,
} from "ionicons/icons";
import React from "react";
import "./Segment.css";

// In iOS the segment is in the first toolbar,
// in Android it is in the last toolbar
function renderToolbars() {
  const mode = getMode();

  if (mode === "ios") {
    return [
      <IonToolbar key="first">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/"></IonBackButton>
        </IonButtons>
        <IonSegment value="all">
          <IonSegmentButton value="all">All</IonSegmentButton>
          <IonSegmentButton value="favorites">Favorites</IonSegmentButton>
        </IonSegment>
      </IonToolbar>,
      <IonToolbar key="second">
        <IonTitle>Segment</IonTitle>
      </IonToolbar>,
    ];
  }

  return [
    <IonToolbar key="first">
      <IonButtons slot="start">
        <IonBackButton defaultHref="/"></IonBackButton>
      </IonButtons>
      <IonTitle>Segment</IonTitle>
    </IonToolbar>,
    <IonToolbar key="second">
      <IonSegment value="all">
        <IonSegmentButton value="all">All</IonSegmentButton>
        <IonSegmentButton value="favorites">Favorites</IonSegmentButton>
      </IonSegment>
    </IonToolbar>,
  ];
}

const Segment: React.FC = () => {
  return (
    <IonPage className="page-segment">
      <IonHeader translucent={true}>{renderToolbars()}</IonHeader>,
      <IonContent fullscreen={true}>
        <IonListHeader>
          <IonLabel>Colors</IonLabel>
        </IonListHeader>

        <div className="ion-padding-horizontal">
          <IonSegment value="call">
            <IonSegmentButton value="call">
              <IonLabel>Call</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="favorite">
              <IonLabel>Favorite</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="map">
              <IonLabel>Map</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <IonSegment value="favorite" color="secondary">
            <IonSegmentButton value="call">
              <IonIcon icon={call}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="favorite">
              <IonIcon icon={heart}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="map">
              <IonIcon icon={pin}></IonIcon>
            </IonSegmentButton>
          </IonSegment>

          <IonSegment value="map" color="tertiary">
            <IonSegmentButton value="call">
              <IonLabel>Call</IonLabel>
              <IonIcon icon={call}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="favorite">
              <IonLabel>Favorite</IonLabel>
              <IonIcon icon={heart}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="map">
              <IonLabel>Map</IonLabel>
              <IonIcon icon={pin}></IonIcon>
            </IonSegmentButton>
          </IonSegment>

          <IonSegment value="call" color="success">
            <IonSegmentButton value="call" layout="icon-bottom">
              <IonIcon icon={call}></IonIcon>
              <IonLabel>Call</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="favorite" layout="icon-bottom">
              <IonIcon icon={heart}></IonIcon>
              <IonLabel>Favorite</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="map" layout="icon-bottom">
              <IonIcon icon={pin}></IonIcon>
              <IonLabel>Map</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <IonSegment value="favorite" color="warning">
            <IonSegmentButton value="call" layout="icon-start">
              <IonIcon icon={call}></IonIcon>
              <IonLabel>Call</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="favorite" layout="icon-start">
              <IonIcon icon={heart}></IonIcon>
              <IonLabel>Favorite</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="map" layout="icon-start">
              <IonIcon icon={pin}></IonIcon>
              <IonLabel>Map</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <IonSegment value="map" color="danger">
            <IonSegmentButton value="call" layout="icon-end">
              <IonIcon icon={call}></IonIcon>
              <IonLabel>Call</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="favorite" layout="icon-end">
              <IonIcon icon={heart}></IonIcon>
              <IonLabel>Favorite</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="map" layout="icon-end">
              <IonIcon icon={pin}></IonIcon>
              <IonLabel>Map</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        <IonListHeader>
          <IonLabel>Scrollable</IonLabel>
        </IonListHeader>

        <div className="ion-padding-horizontal">
          <IonSegment value="call" scrollable>
            <IonSegmentButton value="call">
              <IonLabel>Call</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="favorite">
              <IonLabel>Favorite</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="map">
              <IonLabel>Map</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="watch">
              <IonLabel>Watch</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="account">
              <IonLabel>Account</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="settings">
              <IonLabel>Settings</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="profile">
              <IonLabel>Profile</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <IonSegment value="favorite" color="tertiary" scrollable>
            <IonSegmentButton value="call">
              <IonIcon icon={call}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="favorite">
              <IonIcon icon={heart}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="map">
              <IonIcon icon={pin}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="watch">
              <IonIcon icon={playCircleOutline}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="account">
              <IonIcon icon={people}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="settings">
              <IonIcon icon={cog}></IonIcon>
            </IonSegmentButton>
            <IonSegmentButton value="profile">
              <IonIcon icon={person}></IonIcon>
            </IonSegmentButton>
          </IonSegment>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Segment;
