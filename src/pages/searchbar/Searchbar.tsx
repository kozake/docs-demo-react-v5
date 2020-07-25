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
  IonSearchbar,
} from "@ionic/react";
import "./Searchbar.css";

import React, { useCallback, useState } from "react";

const cities = [
  "Amsterdam",
  "Bogota",
  "Buenos Aires",
  "Cairo",
  "Dhaka",
  "Edinburgh",
  "Geneva",
  "Genoa",
  "Glasglow",
  "Hanoi",
  "Hong Kong",
  "Islamabad",
  "Istanbul",
  "Jakarta",
  "Kiel",
  "Kyoto",
  "Le Havre",
  "Lebanon",
  "Lhasa",
  "Lima",
  "London",
  "Los Angeles",
  "Madrid",
  "Manila",
  "New York",
  "Olympia",
  "Oslo",
  "Panama City",
  "Peking",
  "Philadelphia",
  "San Francisco",
  "Seoul",
  "Taipeh",
  "Tel Aviv",
  "Tokio",
  "Uelzen",
  "Washington",
];

const Searchbar: React.FC = () => {
  const [items, setItems] = useState(cities);

  const handleSearch = useCallback((event: any) => {
    const query = event.target.value.toLowerCase();
    setItems(cities.filter((x) => x.toLocaleLowerCase().indexOf(query) >= 0));
  }, []);

  return (
    <IonPage className="page-searchbar">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Searchbar</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            onIonInput={(event: any) => handleSearch(event)}
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonList>
          {items.map((item) => {
            return (
              <IonItem key={item}>
                <IonLabel>{item}</IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Searchbar;
