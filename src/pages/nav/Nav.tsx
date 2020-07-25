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
} from "@ionic/react";
import React from "react";
import "./Nav.css";

const Nav: React.FC = () => {
  return (
    <IonPage className="page-nav">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Navigation</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <div className="ion-padding">
          <p>
            Traditional web apps use a linear history, meaning that the user
            navigates forward to a page and can hit the back button to navigate
            back.
          </p>

          <p>
            In contrast, mobile apps often utilize parallel, "non-linear"
            navigation. For example, a tabbed interface can have separate
            navigation stacks for each tab, making sure the user never loses
            their place as they navigate and switch between tabs.
          </p>

          <p>
            Ionic Framework embraces the latter approach, supporting parallel
            navigation histories that can also be nested, all while maintaining
            the familiar browser-style navigation concepts web developers are
            familiar with.
          </p>

          <p>
            The implementation details for navigating in Ionic Framework varies
            between the different frameworks. View the navigation guide for each
            framework below.
          </p>
        </div>

        <IonList>
          <IonItem
            href="https://ionicframework.com/docs/angular/navigation"
            target="_blank"
          >
            <IonLabel>Angular Navigation</IonLabel>
          </IonItem>
          <IonItem
            href="https://ionicframework.com/docs/react/navigation"
            target="_blank"
          >
            <IonLabel>React Navigation</IonLabel>
          </IonItem>
          <IonItem
            href="https://ionicframework.com/docs/vue/navigation"
            target="_blank"
          >
            <IonLabel>Vue Navigation</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Nav;
