import { getMode } from "@ionic/core";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonSegment,
  IonSegmentButton,
  IonSearchbar,
  IonIcon,
  IonButton,
  IonMenuButton,
  IonProgressBar,
  IonFooter,
} from "@ionic/react";
import {
  searchSharp,
  ellipsisHorizontal,
  ellipsisVertical,
  addOutline,
  addSharp,
  listOutline,
  listSharp,
  searchOutline,
  heartOutline,
  heartSharp,
  shareOutline,
  starOutline,
  starSharp,
  refresh,
  personCircleOutline,
} from "ionicons/icons";
import React, { useState, useCallback } from "react";
import "./Toolbar.css";

const Toolbar: React.FC = () => {
  const ios = getMode() === "ios";
  const [hasText, setHasText] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const renderMainToolbar = useCallback(() => {
    if (ios) {
      return (
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonSegment value="all">
            <IonSegmentButton value="all">All</IonSegmentButton>
            <IonSegmentButton value="favorites">Favorites</IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      );
    } else if (showSearchbar) {
      return (
        <IonToolbar>
          <IonSearchbar
            showCancelButton="always"
            onIonCancel={() => setShowSearchbar(false)}
          ></IonSearchbar>
        </IonToolbar>
      );
    } else {
      return (
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle size="large">Toolbar</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowSearchbar(true)}>
              <IonIcon slot="icon-only" icon={searchSharp}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      );
    }
  }, [ios, showSearchbar, setShowSearchbar]);

  return (
    <IonPage className="page-toolbar">
      <IonHeader translucent={true}>
        {renderMainToolbar()}
        {!ios && (
          <IonToolbar>
            <IonSegment value="all">
              <IonSegmentButton value="all">All</IonSegmentButton>
              <IonSegmentButton value="favorites">Favorites</IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        )}
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Toolbar</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar showCancelButton="focus"></IonSearchbar>
          </IonToolbar>
        </IonHeader>

        <IonHeader>
          <IonToolbar>
            <IonTitle>Page title</IonTitle>
            <IonButtons slot="primary">
              <IonButton>
                <IonIcon
                  slot="icon-only"
                  ios={ellipsisHorizontal}
                  md={ellipsisVertical}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton>Edit</IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon
                  slot="icon-only"
                  ios={addOutline}
                  md={addSharp}
                ></IonIcon>
              </IonButton>
            </IonButtons>

            <IonTitle>Page title</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton
                defaultHref="#"
                text={ios ? "February" : ""}
              ></IonBackButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon
                  slot="icon-only"
                  ios={listOutline}
                  md={listSharp}
                ></IonIcon>
              </IonButton>
              <IonButton>
                <IonIcon
                  slot="icon-only"
                  ios={searchOutline}
                  md={searchSharp}
                ></IonIcon>
              </IonButton>
              <IonButton>
                <IonIcon
                  slot="icon-only"
                  ios={addOutline}
                  md={addSharp}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton>
                <IonIcon
                  slot="icon-only"
                  ios={heartOutline}
                  md={heartSharp}
                ></IonIcon>
              </IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon
                  slot="icon-only"
                  ios={searchOutline}
                  md={searchSharp}
                ></IonIcon>
              </IonButton>
            </IonButtons>

            <IonTitle>Page title</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton>Reset</IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton>Done</IonButton>
            </IonButtons>

            <IonTitle>Page title</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton
                defaultHref="#"
                text={ios ? "Notes" : ""}
              ></IonBackButton>
            </IonButtons>

            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={personCircleOutline}></IonIcon>
              </IonButton>
              <IonButton>
                <IonIcon slot="icon-only" icon={shareOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton autoHide={false}></IonMenuButton>
            </IonButtons>

            <IonTitle>Page title</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="#"></IonBackButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton>
                <IonIcon
                  slot="icon-only"
                  ios={starOutline}
                  md={starSharp}
                ></IonIcon>
              </IonButton>
            </IonButtons>

            <IonTitle>Page title</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonHeader>
          <IonToolbar>
            <IonTitle>Page title</IonTitle>

            <IonProgressBar value={0.4}></IonProgressBar>
          </IonToolbar>
        </IonHeader>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle>Click Button to Toggle Text</IonTitle>
          <IonButtons slot="end">
            <IonButton id="changeText" onClick={() => setHasText(!hasText)}>
              <IonIcon slot="start" icon={refresh}></IonIcon>
              {hasText && <span id="childText">Toggle</span>}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default Toolbar;
