import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonPopover,
} from "@ionic/react";
import { ellipsisHorizontal, ellipsisVertical } from "ionicons/icons";
import React, { useState, useCallback } from "react";
import ComponentDetails from "../../components/ComponentDetails";
import PopoverExamplePage from "./PopoverExamplePage";
import "./Popover.css";

const Popover: React.FC = () => {
  const description = `The <b>Popover</b> is a dialog that appears on top of the current
      page. It can be used for anything, but generally it is used for overflow actions that don't
      fit in the navigation bar.`;
  const url = "popover";

  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState<MouseEvent>();
  const openPopover = useCallback((event: MouseEvent) => {
    setShowPopover(true);
    setPopoverEvent(event);
  }, []);

  return (
    <IonPage className="page-popover">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Popover</IonTitle>
          <IonButtons slot="end">
            <IonButton
              slot="end"
              onClick={(event) => openPopover(event.nativeEvent)}
            >
              <IonIcon
                slot="icon-only"
                ios={ellipsisHorizontal}
                md={ellipsisVertical}
              ></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="component-content">
        <ComponentDetails
          description={description}
          url={url}
        ></ComponentDetails>

        <div className="ion-padding-start ion-padding-end">
          <IonButton
            expand="block"
            onClick={(event) => openPopover(event.nativeEvent)}
          >
            Open Popover
          </IonButton>
        </div>
      </IonContent>
      <IonPopover
        isOpen={showPopover}
        translucent={true}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <PopoverExamplePage></PopoverExamplePage>
      </IonPopover>
    </IonPage>
  );
};

export default Popover;
