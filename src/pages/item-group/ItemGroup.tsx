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
  IonItemGroup,
  IonItemDivider,
} from "@ionic/react";
import React from "react";
import "./ItemGroup.css";

const ItemGroup: React.FC = () => {
  return (
    <IonPage className="page-item-group">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Item Group</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>A</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>
                <b>Abigail</b>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                Jesse <b>Adams</b>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                <b>Alan</b>
              </IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>B</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>
                James <b>Bach</b>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                Flora <b>Ball</b>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                London <b>Black</b>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                Alisha <b>Brady</b>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                <b>Brianna</b>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                Monica <b>Brown</b>
              </IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>C</IonLabel>
            </IonItemDivider>

            <IonItem>
              <IonLabel>
                <b>Carla</b>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                Brian <b>Clark</b>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>
                Robert <b>Cline</b>
              </IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ItemGroup;
