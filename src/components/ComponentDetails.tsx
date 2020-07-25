import {
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";
import "./ComponentDetails.css";

const ComponentDetails: React.FC<{description: string, url: string}> = ({description, url}) => {
  const name = url.replace('-', ' ');
  return (
    <div className="component-details">
      <IonList>
        <IonItem lines="full">
          <IonLabel class="component-description">
            <span dangerouslySetInnerHTML={{__html: description}}></span>
          </IonLabel>
        </IonItem>
        <IonItem
          class="component-link"
          href={`https://ionicframework.com/docs/api/${url}`}
          target="_blank"
        >
          <IonLabel color="primary">{name} API Docs</IonLabel>
        </IonItem>
        <IonItem
          lines="full"
          class="component-link"
          href="https://ionicframework.com/docs/components"
          target="_blank"
        >
          <IonLabel color="primary">UI Component Docs</IonLabel>
        </IonItem>
      </IonList>
    </div>
  );
};

export default ComponentDetails;
