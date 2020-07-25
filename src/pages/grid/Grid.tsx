import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import "./Grid.css";

const Grid: React.FC = () => {
  return (
    <IonPage className="page-grid">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Grid</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div>1 of 2</div>
            </IonCol>
            <IonCol>
              <div>2 of 2</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>1 of 3</div>
            </IonCol>
            <IonCol>
              <div>2 of 3</div>
            </IonCol>
            <IonCol>
              <div>3 of 3</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>1 of 3</div>
            </IonCol>
            <IonCol col-6>
              <div>2 of 3</div>
            </IonCol>
            <IonCol>
              <div>3 of 3</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol col-6>
              <div>1 of 3</div>
            </IonCol>
            <IonCol>
              <div>2 of 3</div>
            </IonCol>
            <IonCol>
              <div>3 of 3</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol offset-4>
              <div>1 of 2</div>
            </IonCol>
            <IonCol>
              <div>2 of 2</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>1 of 2</div>
            </IonCol>
            <IonCol offset-4>
              <div>2 of 2</div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div>1 of 4</div>
            </IonCol>
            <IonCol>
              <div>2 of 4</div>
            </IonCol>
            <IonCol>
              <div>3 of 4</div>
            </IonCol>
            <IonCol>
              <div>4 of 4</div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Grid;
