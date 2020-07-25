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
  IonRefresher,
  IonRefresherContent,
} from "@ionic/react";
import React, { useState, useCallback, useRef } from "react";
import "./Refresher.css";

const authors = [
  "Everyworse",
  "Nextably",
  "Givester",
  "TempleRentr",
  "Spout",
  "Frigital",
  "Batterbus",
  "Ham Pot",
  "Bat+IQ",
  "Throbe",
];

const titles = [
  "Get 50% off your purchase today!",
  "You're in luck, here's your Friday the 13th deal!",
  "Don't miss out! Your exclusive access to FREE shipping is ending soon.",
  "Treat yourself, you deserve these savings.",
  "Get fresh meals delivered right to your door!",
  "Your 25% Coupon Expires At Midnight",
  "BIG SAVINGS Up To 50% Until Friday",
  "Lucky you: Save today",
  "The Event You Don't Want to Miss",
  "Last Chance to Unlock Your 25% Code",
  "CLOSEOUT SALE (We mean it!)",
  "Gifting just got easier — enjoy exclusive access to FREE shipping for two days only.",
  "Our Birthday = Your Savings",
  "SPECIAL OFFER. See inside.",
  "Ready to order?",
  "BONUS Coupon Inside!",
  "Today's SPECIAL BUY >> Inside >>",
  "Email Exclusive Offer ENDS TONIGHT!",
];

const messages = [
  "The best brands + the best deals",
  "Recommended by your Personal Vacation Planner",
  "Catch them before they're gone.",
  "Shop by tonight to save on gifts to share with the entire family.",
  "Over 30% OFF! View in Browser.",
  "Offer expires 11:59 PM ET. View in Browser.",
  "Free delivery will make us the MPV!",
  "Selection √ | Value √ | Service √",
  "⭐️⭐️⭐️⭐️⭐️",
  "Shop now and save big...",
  "Get the Lowest Price Guaranteed",
  "Use code SAVE10 to save 10% on your next purchase.",
  "Unlock your coupon code now...",
  "Free Shipping Tonight!",
  "Free Shipping On All Orders $35+",
  "Better than takeout in every way",
  "Get $100 off when you try now!",
  "All your favorites are heading your way.",
];

let seq = 0;

const createItems = (count: number, unread = false) => {
  return new Array(count).fill(0).map((_) => {
    seq++;
    return {
      id: seq,
      email: {
        author: authors[Math.floor(Math.random() * authors.length)],
        title: titles[Math.floor(Math.random() * titles.length)],
        message: messages[Math.floor(Math.random() * messages.length)],
      },
      unread,
    };
  });
};

const Refresher: React.FC = () => {
  const [items, setItems] = useState(createItems(5));
  const refresheEl = useRef<HTMLIonRefresherElement>(null);
  const handleRefresh = useCallback(() => {
    setTimeout(() => {
      setItems([...createItems(2, true), ...items]);
      refresheEl.current?.complete();
    }, 1000);
  }, [items, refresheEl]);

  return (
    <IonPage className="page-refresher">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Refresher</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonRefresher
          ref={refresheEl}
          slot="fixed"
          onIonRefresh={() => handleRefresh()}
        >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          {items.map(({ id, unread, email }: any) => {
            return (
              <IonItem key={id}>
                <div
                  slot="start"
                  className={unread ? "dot dot-unread" : "dot"}
                ></div>
                <IonLabel>
                  <h2>{email.author}</h2>
                  <h3>{email.title}</h3>
                  <p>{email.message}</p>
                </IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Refresher;
