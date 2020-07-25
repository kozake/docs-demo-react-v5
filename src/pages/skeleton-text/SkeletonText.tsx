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
  IonButton,
  IonThumbnail,
  IonSkeletonText,
} from "@ionic/react";
import React, { useState } from "react";
import "./SkeletonText.css";

const SkeletonText: React.FC = () => {
  const [skeleton, setSkeleton] = useState(true);

  return (
    <IonPage className="page-skeletonText">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Skeleton Text</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setSkeleton(!skeleton)}>Toggle</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList style={{ display: skeleton ? "none" : "block" }}>
          <IonListHeader>
            <IonLabel>Albums</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/thebeatles.jpeg" alt="thebeatles" />
            </IonThumbnail>
            <IonLabel>
              <h3>Abbey Road</h3>
              <p>The Beatles</p>
              <p>1969</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/pinkfloyd.jpeg" alt="pinkfloyd" />
            </IonThumbnail>
            <IonLabel>
              <h3>The Dark Side of the Moon</h3>
              <p>Pink Floyd</p>
              <p>1973</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/boniver.jpeg" alt="boniver" />
            </IonThumbnail>
            <IonLabel>
              <h3>For Emma, Forever Ago</h3>
              <p>Bon Iver</p>
              <p>2008</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/ironwine.jpeg" alt="ironwine" />
            </IonThumbnail>
            <IonLabel>
              <h3>Beast Epic</h3>
              <p>Iron & Wine</p>
              <p>2017</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/porterrobinson.jpeg" alt="porterrobinson" />
            </IonThumbnail>
            <IonLabel>
              <h3>Worlds</h3>
              <p>Porter Robinson</p>
              <p>2014</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/childishgambino.jpeg" alt="childishgambino" />
            </IonThumbnail>
            <IonLabel>
              <h3>Worlds</h3>
              <p>Awaken, My Love!</p>
              <p>2016</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/chancetherapper.jpeg" alt="chancetherapper" />
            </IonThumbnail>
            <IonLabel>
              <h3>Coloring Book</h3>
              <p>Chance the Rapper</p>
              <p>2016</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/kimbra.jpeg" alt="kimbra" />
            </IonThumbnail>
            <IonLabel>
              <h3>Primal Heart</h3>
              <p>Kimbra</p>
              <p>2018</p>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonList style={{ display: skeleton ? "block" : "none" }}>
          <IonListHeader>
            <IonLabel>
              <IonSkeletonText
                animated
                style={{ width: "80px" }}
              ></IonSkeletonText>
            </IonLabel>
          </IonListHeader>
          <IonItem>
            <IonThumbnail slot="start">
              <IonSkeletonText></IonSkeletonText>
            </IonThumbnail>
            <IonLabel>
              <h3>
                <IonSkeletonText
                  animated
                  style={{ width: "80%" }}
                ></IonSkeletonText>
              </h3>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </p>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "30%" }}
                ></IonSkeletonText>
              </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <IonSkeletonText></IonSkeletonText>
            </IonThumbnail>
            <IonLabel>
              <h3>
                <IonSkeletonText
                  animated
                  style={{ width: "80%" }}
                ></IonSkeletonText>
              </h3>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </p>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "30%" }}
                ></IonSkeletonText>
              </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <IonSkeletonText></IonSkeletonText>
            </IonThumbnail>
            <IonLabel>
              <h3>
                <IonSkeletonText
                  animated
                  style={{ width: "80%" }}
                ></IonSkeletonText>
              </h3>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </p>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "30%" }}
                ></IonSkeletonText>
              </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <IonSkeletonText></IonSkeletonText>
            </IonThumbnail>
            <IonLabel>
              <h3>
                <IonSkeletonText
                  animated
                  style={{ width: "80%" }}
                ></IonSkeletonText>
              </h3>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </p>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "30%" }}
                ></IonSkeletonText>
              </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <IonSkeletonText></IonSkeletonText>
            </IonThumbnail>
            <IonLabel>
              <h3>
                <IonSkeletonText
                  animated
                  style={{ width: "80%" }}
                ></IonSkeletonText>
              </h3>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </p>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "30%" }}
                ></IonSkeletonText>
              </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <IonSkeletonText></IonSkeletonText>
            </IonThumbnail>
            <IonLabel>
              <h3>
                <IonSkeletonText
                  animated
                  style={{ width: "80%" }}
                ></IonSkeletonText>
              </h3>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </p>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "30%" }}
                ></IonSkeletonText>
              </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <IonSkeletonText></IonSkeletonText>
            </IonThumbnail>
            <IonLabel>
              <h3>
                <IonSkeletonText
                  animated
                  style={{ width: "80%" }}
                ></IonSkeletonText>
              </h3>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </p>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "30%" }}
                ></IonSkeletonText>
              </p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <IonSkeletonText></IonSkeletonText>
            </IonThumbnail>
            <IonLabel>
              <h3>
                <IonSkeletonText
                  animated
                  style={{ width: "80%" }}
                ></IonSkeletonText>
              </h3>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </p>
              <p>
                <IonSkeletonText
                  animated
                  style={{ width: "30%" }}
                ></IonSkeletonText>
              </p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default SkeletonText;
