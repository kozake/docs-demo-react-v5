import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from "@ionic/react";
import {
  add,
  logoFacebook,
  logoTwitter,
  logoVimeo,
  logoGoogle,
  caretBack,
  caretUp,
  caretForward,
  share,
} from "ionicons/icons";
import React from "react";
import "./Fab.css";

const Fab: React.FC = () => {
  return (
    <IonPage className="page-fab">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Floating Action Button</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="ion-padding">
        <IonFab horizontal="end" vertical="top" slot="fixed" edge>
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
          <IonFabList>
            <IonFabButton color="light">
              <IonIcon icon={logoFacebook}></IonIcon>
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoTwitter}></IonIcon>
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoVimeo}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <IonFab horizontal="end" vertical="center" slot="fixed">
          <IonFabButton color="danger">
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonFab horizontal="end" vertical="bottom" slot="fixed">
          <IonFabButton color="light">
            <IonIcon icon={caretBack}></IonIcon>
          </IonFabButton>
          <IonFabList side="start">
            <IonFabButton color="light">
              <IonIcon icon={logoFacebook}></IonIcon>
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoTwitter}></IonIcon>
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoVimeo}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <IonFab horizontal="start" vertical="bottom" slot="fixed">
          <IonFabButton color="dark">
            <IonIcon icon={caretUp}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton color="light">
              <IonIcon icon={logoFacebook}></IonIcon>
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoTwitter}></IonIcon>
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoVimeo}></IonIcon>
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoGoogle}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <IonFab horizontal="start" vertical="top" slot="fixed">
          <IonFabButton color="secondary">
            <IonIcon icon={caretForward}></IonIcon>
          </IonFabButton>
          <IonFabList side="end">
            <IonFabButton color="light">
              <IonIcon icon={logoFacebook}></IonIcon>
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoTwitter}></IonIcon>
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoVimeo}></IonIcon>
            </IonFabButton>
            <IonFabButton color="light">
              <IonIcon icon={logoGoogle}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <IonFab horizontal="center" vertical="center" slot="fixed">
          <IonFabButton color="light">
            <IonIcon icon={share}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton color="primary">
              <IonIcon icon={logoVimeo}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton color="dark">
              <IonIcon icon={logoTwitter}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton color="secondary">
              <IonIcon icon={logoFacebook}></IonIcon>
            </IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton color="light">
              <IonIcon icon={logoGoogle}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Fab;
