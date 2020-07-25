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
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React from "react";
import "./Select.css";

const Select: React.FC = () => {
  return (
    <IonPage className="page-select">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Select</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          <IonListHeader lines="full">
            <IonLabel>Select Trip</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel position="stacked">Origin</IonLabel>
            <IonSelect placeholder="Select Airport">
              <IonSelectOption value="madison">Madison (MSN)</IonSelectOption>
              <IonSelectOption value="chicago">Chicago (ORD)</IonSelectOption>
              <IonSelectOption value="austin">Austin (AUS)</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Destination</IonLabel>
            <IonSelect placeholder="Select Airport">
              <IonSelectOption value="newyork">New York (JFK)</IonSelectOption>
              <IonSelectOption value="honolulu">Honolulu (HNL)</IonSelectOption>
              <IonSelectOption value="baltimore">
                Baltimore (BWI)
              </IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Passengers</IonLabel>
            <IonSelect value="1">
              <IonSelectOption value="1">1 Adult</IonSelectOption>
              <IonSelectOption value="2">2 Adults</IonSelectOption>
              <IonSelectOption value="3">3 Adults</IonSelectOption>
              <IonSelectOption value="4">4 Adults</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="stacked">Add-ons</IonLabel>
            <IonSelect placeholder="Select Multiple Add-ons" multiple={true}>
              <IonSelectOption value="firstclass">First Class</IonSelectOption>
              <IonSelectOption value="bag">Additional Bag</IonSelectOption>
              <IonSelectOption value="headphones">Headphones</IonSelectOption>
              <IonSelectOption value="wifi">Inflight WiFi</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader>
            <IonLabel>Select Interfaces</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel position="stacked">Gender</IonLabel>
            <IonSelect placeholder="Popover Interface" interface="popover">
              <IonSelectOption value="f">Female</IonSelectOption>
              <IonSelectOption value="m">Male</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Mute Notifications</IonLabel>
            <IonSelect
              placeholder="Action Sheet Interface"
              interface="action-sheet"
            >
              <IonSelectOption value="mute_15">For 15 Minutes</IonSelectOption>
              <IonSelectOption value="mute_1">For 1 Hour</IonSelectOption>
              <IonSelectOption value="mute_23">For 24 Hours</IonSelectOption>
              <IonSelectOption value="mute_inf">
                Until I turn it back on
              </IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Select;
