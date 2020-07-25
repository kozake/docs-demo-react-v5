import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonLabel,
  IonList,
  IonItem,
  IonSlides,
  IonSlide,
} from "@ionic/react";
import React from "react";
import "./Slides.css";

const Slides: React.FC = () => {
  return (
    <IonPage className="page-slides">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Slides</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false} fullscreen={true}>
        <IonSlides>
          <IonSlide>
            <img
              src="/assets/slide-1.png"
              className="slide-image"
              alt="slide-1"
            />
            <h2>
              <b>Ionic Conference App</b>
            </h2>
            <p>
              The <b>ionic conference app</b> is a practical preview of the
              ionic framework in action, and a demonstration of proper code use.
            </p>
          </IonSlide>

          <IonSlide>
            <img
              src="/assets/slide-2.png"
              className="slide-image"
              alt="slide-2"
            />
            <h2>What is Ionic?</h2>
            <p>
              <b>Ionic Framework</b> is an open source SDK that enables
              developers to build high quality mobile apps with web technologies
              like HTML, CSS, and JavaScript.
            </p>
          </IonSlide>

          <IonSlide>
            <img
              src="/assets/slide-3.png"
              className="slide-image"
              alt="slide-3"
            />
            <h2>What is Ionic Pro?</h2>
            <p>
              <b>Ionic Pro</b> is a powerful set of services and features built
              on top of Ionic Framework that brings a totally new level of app
              development agility to mobile dev teams.
            </p>
          </IonSlide>

          <IonSlide>
            <img
              src="/assets/slide-4.png"
              className="slide-image"
              alt="slide-4"
            />
            <h2>Ready to Play?</h2>
            <p>Preview the Ionic Conference App by clicking a link below.</p>
            <IonList>
              <IonItem
                detail={true}
                href="https://github.com/ionic-team/ionic-conference-app"
                target="_blank"
              >
                <IonLabel>
                  Ionic <b>Angular</b> Conference App
                </IonLabel>
              </IonItem>
              <IonItem
                detail={true}
                href="https://github.com/ionic-team/ionic-react-conference-app"
                target="_blank"
              >
                <IonLabel>
                  Ionic <b>React</b> Conference App
                </IonLabel>
              </IonItem>
              <IonItem
                detail={true}
                lines="full"
                href="https://github.com/ionic-team/ionic-stencil-conference-app"
                target="_blank"
              >
                <IonLabel>
                  Ionic <b>Stencil</b> Conference App
                </IonLabel>
              </IonItem>
            </IonList>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};
export default Slides;
