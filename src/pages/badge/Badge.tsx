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
  IonList,
  IonItem,
  IonBadge,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from "@ionic/react";
import { globe, people, mail } from "ionicons/icons";
import React from "react";
import "./Badge.css";

const Badge: React.FC = () => {
  return (
    <IonPage className="page-badge">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Badge</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonListHeader>
            <IonLabel>Badges</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Followers</IonLabel>
            <IonBadge slot="end">22k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Likes</IonLabel>
            <IonBadge color="secondary" slot="end">
              118k
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Stars</IonLabel>
            <IonBadge color="tertiary" slot="end">
              34k
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Completed</IonLabel>
            <IonBadge color="success" slot="end">
              80
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Warnings</IonLabel>
            <IonBadge color="warning" slot="end">
              70
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Notifications</IonLabel>
            <IonBadge color="danger" slot="end">
              1000
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Unread</IonLabel>
            <IonBadge color="light" slot="end">
              24
            </IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Drafts</IonLabel>
            <IonBadge color="medium" slot="end">
              14
            </IonBadge>
          </IonItem>
          <IonItem lines="full">
            <IonLabel>Deleted</IonLabel>
            <IonBadge color="dark" slot="end">
              4
            </IonBadge>
          </IonItem>
        </IonList>

        <IonTabBar>
          <IonTabButton selected>
            <IonIcon icon={globe}></IonIcon>
            <IonBadge color="tertiary">44</IonBadge>
          </IonTabButton>
          <IonTabButton>
            <IonIcon icon={people}></IonIcon>
            <IonBadge color="success">1</IonBadge>
          </IonTabButton>
          <IonTabButton>
            <IonIcon icon={mail}></IonIcon>
            <IonBadge>2.3k</IonBadge>
          </IonTabButton>
        </IonTabBar>
      </IonContent>
    </IonPage>
  );
};

export default Badge;
