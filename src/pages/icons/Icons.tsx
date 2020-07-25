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
  IonIcon,
} from "@ionic/react";
import {
  logoIonic,
  logoPwa,
  logoIonitron,
  logoJavascript,
  logoSlack,
  logoAndroid,
  logoApple,
  heart,
  heartOutline,
  heartSharp,
  happy,
  happyOutline,
  happySharp,
  airplane,
  airplaneOutline,
  airplaneSharp,
  fingerPrint,
  fingerPrintOutline,
  fingerPrintSharp,
  person,
  personOutline,
  personSharp,
  peopleCircle,
  peopleCircleOutline,
  peopleCircleSharp,
  apps,
  appsOutline,
  appsSharp,
  lockClosed,
  lockClosedOutline,
  lockClosedSharp,
  key,
  keyOutline,
  keySharp,
  attach,
  attachOutline,
  attachSharp,
  map,
  mapOutline,
  mapSharp,
  navigate,
  navigateOutline,
  navigateSharp,
  pin,
  pinOutline,
  pinSharp,
  locate,
  locateOutline,
  locateSharp,
  mic,
  micOutline,
  micSharp,
  volumeHigh,
  volumeHighOutline,
  volumeHighSharp,
  musicalNotes,
  musicalNotesOutline,
  musicalNotesSharp,
  radio,
  radioOutline,
  radioSharp,
  cafe,
  cafeOutline,
  cafeSharp,
  calculator,
  calculatorOutline,
  calculatorSharp,
  bus,
  busOutline,
  busSharp,
  wine,
  wineOutline,
  wineSharp,
  camera,
  cameraOutline,
  cameraSharp,
  star,
  starOutline,
  starSharp,
  image,
  imageOutline,
  imageSharp,
  arrowUpCircle,
  arrowUpCircleOutline,
  arrowUpCircleSharp,
  arrowUndo,
  arrowUndoOutline,
  arrowUndoSharp,
  chevronDown,
  chevronDownOutline,
  chevronDownSharp,
  playCircle,
  playCircleOutline,
  playCircleSharp,
  cloud,
  cloudOutline,
  cloudSharp,
  sunny,
  sunnyOutline,
  sunnySharp,
  umbrella,
  umbrellaOutline,
  umbrellaSharp,
  rainy,
  rainyOutline,
  rainySharp,
  cloudDone,
  cloudDoneOutline,
  cloudDoneSharp,
  gameController,
  gameControllerOutline,
  gameControllerSharp,
  alarm,
  alarmOutline,
  alarmSharp,
  barbell,
  barbellOutline,
  barbellSharp,
  earth,
  earthOutline,
  earthSharp,
  bicycle,
  bicycleOutline,
  bicycleSharp,
  basket,
  basketOutline,
  basketSharp,
  car,
  carOutline,
  carSharp,
  flashOff,
  flashOffOutline,
  flashOffSharp,
  gift,
  giftOutline,
  giftSharp,
  heartHalf,
  heartHalfOutline,
  heartHalfSharp,
  iceCream,
  iceCreamOutline,
  iceCreamSharp,
  leaf,
  leafOutline,
  leafSharp,
  paw,
  pawOutline,
  pawSharp,
  ribbon,
  ribbonOutline,
  ribbonSharp,
  shirt,
  shirtOutline,
  shirtSharp,
  thumbsUp,
  thumbsUpOutline,
  thumbsUpSharp,
  warning,
  warningOutline,
  warningSharp,
  trash,
  trashOutline,
  trashSharp,
  tennisball,
  tennisballOutline,
  tennisballSharp,
  rose,
  roseOutline,
  roseSharp,
  subway,
  subwayOutline,
  subwaySharp,
  speedometer,
  speedometerOutline,
  speedometerSharp,
  egg,
  eggOutline,
  eggSharp,
  colorFill,
  colorFillOutline,
  colorFillSharp,
  cash,
  cashOutline,
  cashSharp,
  boat,
  boatOutline,
  boatSharp,
  aperture,
  apertureOutline,
  apertureSharp,
  albums,
  albumsOutline,
  albumsSharp,
  football,
  footballOutline,
  footballSharp,
  atCircle,
  atCircleOutline,
  atCircleSharp,
  bandage,
  bandageOutline,
  bandageSharp,
  barcode,
  barcodeOutline,
  barcodeSharp,
  bluetooth,
  bluetoothOutline,
  bluetoothSharp,
  bug,
  bugOutline,
  bugSharp,
  chatbox,
  chatboxOutline,
  chatboxSharp,
  codeWorking,
  codeWorkingOutline,
  codeWorkingSharp,
  cut,
  cutOutline,
  cutSharp,
  flask,
  flaskOutline,
  flaskSharp,
  handLeft,
  handLeftOutline,
  handLeftSharp,
  headset,
  headsetOutline,
  headsetSharp,
  library,
  libraryOutline,
  librarySharp,
} from "ionicons/icons";
import React, { useState } from "react";
import "./Icons.css";

const iconMap: { [key: string]: string } = {
  airplane: airplane,
  "airplane-outline": airplaneOutline,
  "airplane-sharp": airplaneSharp,
  alarm: alarm,
  "alarm-outline": alarmOutline,
  "alarm-sharp": alarmSharp,
  albums: albums,
  "albums-outline": albumsOutline,
  "albums-sharp": albumsSharp,
  aperture: aperture,
  "aperture-outline": apertureOutline,
  "aperture-sharp": apertureSharp,
  apps: apps,
  "apps-outline": appsOutline,
  "apps-sharp": appsSharp,
  "arrow-undo": arrowUndo,
  "arrow-undo-outline": arrowUndoOutline,
  "arrow-undo-sharp": arrowUndoSharp,
  "arrow-up-circle": arrowUpCircle,
  "arrow-up-circle-outline": arrowUpCircleOutline,
  "arrow-up-circle-sharp": arrowUpCircleSharp,
  "at-circle": atCircle,
  "at-circle-outline": atCircleOutline,
  "at-circle-sharp": atCircleSharp,
  attach: attach,
  "attach-outline": attachOutline,
  "attach-sharp": attachSharp,
  bandage: bandage,
  "bandage-outline": bandageOutline,
  "bandage-sharp": bandageSharp,
  barbell: barbell,
  "barbell-outline": barbellOutline,
  "barbell-sharp": barbellSharp,
  barcode: barcode,
  "barcode-outline": barcodeOutline,
  "barcode-sharp": barcodeSharp,
  basket: basket,
  "basket-outline": basketOutline,
  "basket-sharp": basketSharp,
  bicycle: bicycle,
  "bicycle-outline": bicycleOutline,
  "bicycle-sharp": bicycleSharp,
  bluetooth: bluetooth,
  "bluetooth-outline": bluetoothOutline,
  "bluetooth-sharp": bluetoothSharp,
  boat: boat,
  "boat-outline": boatOutline,
  "boat-sharp": boatSharp,
  bug: bug,
  "bug-outline": bugOutline,
  "bug-sharp": bugSharp,
  bus: bus,
  "bus-outline": busOutline,
  "bus-sharp": busSharp,
  cafe: cafe,
  "cafe-outline": cafeOutline,
  "cafe-sharp": cafeSharp,
  calculator: calculator,
  "calculator-outline": calculatorOutline,
  "calculator-sharp": calculatorSharp,
  camera: camera,
  "camera-outline": cameraOutline,
  "camera-sharp": cameraSharp,
  car: car,
  "car-outline": carOutline,
  "car-sharp": carSharp,
  cash: cash,
  "cash-outline": cashOutline,
  "cash-sharp": cashSharp,
  chatbox: chatbox,
  "chatbox-outline": chatboxOutline,
  "chatbox-sharp": chatboxSharp,
  "chevron-down": chevronDown,
  "chevron-down-outline": chevronDownOutline,
  "chevron-down-sharp": chevronDownSharp,
  cloud: cloud,
  "cloud-done": cloudDone,
  "cloud-done-outline": cloudDoneOutline,
  "cloud-done-sharp": cloudDoneSharp,
  "cloud-outline": cloudOutline,
  "cloud-sharp": cloudSharp,
  "code-working": codeWorking,
  "code-working-outline": codeWorkingOutline,
  "code-working-sharp": codeWorkingSharp,
  "color-fill": colorFill,
  "color-fill-outline": colorFillOutline,
  "color-fill-sharp": colorFillSharp,
  cut: cut,
  "cut-outline": cutOutline,
  "cut-sharp": cutSharp,
  earth: earth,
  "earth-outline": earthOutline,
  "earth-sharp": earthSharp,
  egg: egg,
  "egg-outline": eggOutline,
  "egg-sharp": eggSharp,
  "finger-print": fingerPrint,
  "finger-print-outline": fingerPrintOutline,
  "finger-print-sharp": fingerPrintSharp,
  "flash-off": flashOff,
  "flash-off-outline": flashOffOutline,
  "flash-off-sharp": flashOffSharp,
  flask: flask,
  "flask-outline": flaskOutline,
  "flask-sharp": flaskSharp,
  football: football,
  "football-outline": footballOutline,
  "football-sharp": footballSharp,
  "game-controller": gameController,
  "game-controller-outline": gameControllerOutline,
  "game-controller-sharp": gameControllerSharp,
  gift: gift,
  "gift-outline": giftOutline,
  "gift-sharp": giftSharp,
  "hand-left": handLeft,
  "hand-left-outline": handLeftOutline,
  "hand-left-sharp": handLeftSharp,
  happy: happy,
  "happy-outline": happyOutline,
  "happy-sharp": happySharp,
  headset: headset,
  "headset-outline": headsetOutline,
  "headset-sharp": headsetSharp,
  heart: heart,
  "heart-half": heartHalf,
  "heart-half-outline": heartHalfOutline,
  "heart-half-sharp": heartHalfSharp,
  "heart-outline": heartOutline,
  "heart-sharp": heartSharp,
  "ice-cream": iceCream,
  "ice-cream-outline": iceCreamOutline,
  "ice-cream-sharp": iceCreamSharp,
  image: image,
  "image-outline": imageOutline,
  "image-sharp": imageSharp,
  key: key,
  "key-outline": keyOutline,
  "key-sharp": keySharp,
  leaf: leaf,
  "leaf-outline": leafOutline,
  "leaf-sharp": leafSharp,
  library: library,
  "library-outline": libraryOutline,
  "library-sharp": librarySharp,
  locate: locate,
  "locate-outline": locateOutline,
  "locate-sharp": locateSharp,
  "lock-closed": lockClosed,
  "lock-closed-outline": lockClosedOutline,
  "lock-closed-sharp": lockClosedSharp,
  "logo-android": logoAndroid,
  "logo-apple": logoApple,
  "logo-ionic": logoIonic,
  "logo-ionitron": logoIonitron,
  "logo-javascript": logoJavascript,
  "logo-pwa": logoPwa,
  "logo-slack": logoSlack,
  map: map,
  "map-outline": mapOutline,
  "map-sharp": mapSharp,
  mic: mic,
  "mic-outline": micOutline,
  "mic-sharp": micSharp,
  "musical-notes": musicalNotes,
  "musical-notes-outline": musicalNotesOutline,
  "musical-notes-sharp": musicalNotesSharp,
  navigate: navigate,
  "navigate-outline": navigateOutline,
  "navigate-sharp": navigateSharp,
  paw: paw,
  "paw-outline": pawOutline,
  "paw-sharp": pawSharp,
  "people-circle": peopleCircle,
  "people-circle-outline": peopleCircleOutline,
  "people-circle-sharp": peopleCircleSharp,
  person: person,
  "person-outline": personOutline,
  "person-sharp": personSharp,
  pin: pin,
  "pin-outline": pinOutline,
  "pin-sharp": pinSharp,
  "play-circle": playCircle,
  "play-circle-outline": playCircleOutline,
  "play-circle-sharp": playCircleSharp,
  radio: radio,
  "radio-outline": radioOutline,
  "radio-sharp": radioSharp,
  rainy: rainy,
  "rainy-outline": rainyOutline,
  "rainy-sharp": rainySharp,
  ribbon: ribbon,
  "ribbon-outline": ribbonOutline,
  "ribbon-sharp": ribbonSharp,
  rose: rose,
  "rose-outline": roseOutline,
  "rose-sharp": roseSharp,
  shirt: shirt,
  "shirt-outline": shirtOutline,
  "shirt-sharp": shirtSharp,
  speedometer: speedometer,
  "speedometer-outline": speedometerOutline,
  "speedometer-sharp": speedometerSharp,
  star: star,
  "star-outline": starOutline,
  "star-sharp": starSharp,
  subway: subway,
  "subway-outline": subwayOutline,
  "subway-sharp": subwaySharp,
  sunny: sunny,
  "sunny-outline": sunnyOutline,
  "sunny-sharp": sunnySharp,
  tennisball: tennisball,
  "tennisball-outline": tennisballOutline,
  "tennisball-sharp": tennisballSharp,
  "thumbs-up": thumbsUp,
  "thumbs-up-outline": thumbsUpOutline,
  "thumbs-up-sharp": thumbsUpSharp,
  trash: trash,
  "trash-outline": trashOutline,
  "trash-sharp": trashSharp,
  umbrella: umbrella,
  "umbrella-outline": umbrellaOutline,
  "umbrella-sharp": umbrellaSharp,
  "volume-high": volumeHigh,
  "volume-high-outline": volumeHighOutline,
  "volume-high-sharp": volumeHighSharp,
  warning: warning,
  "warning-outline": warningOutline,
  "warning-sharp": warningSharp,
  wine: wine,
  "wine-outline": wineOutline,
  "wine-sharp": wineSharp,
};

const Grid: React.FC = () => {
  const [segment, setSegment] = useState<string | undefined>("");

  return (
    <IonPage className="page-icon">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Icons</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSegment
            value={segment}
            onIonChange={(ev) => setSegment(ev.detail.value)}
          >
            <IonSegmentButton value="-outline">Outline</IonSegmentButton>
            <IonSegmentButton value="">Filled</IonSegmentButton>
            <IonSegmentButton value="-sharp">Sharp</IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true} class="ion-padding-top ion-text-center">
        {/* Logo icons never change fill */}
        <IonIcon icon={iconMap["logo-ionic"]}></IonIcon>
        <IonIcon icon={iconMap["logo-pwa"]}></IonIcon>
        <IonIcon icon={iconMap["logo-ionitron"]}></IonIcon>
        <IonIcon icon={iconMap["logo-javascript"]}></IonIcon>
        <IonIcon icon={iconMap["logo-slack"]}></IonIcon>
        <IonIcon icon={iconMap["logo-android"]}></IonIcon>
        <IonIcon icon={iconMap["logo-apple"]}></IonIcon>

        {/* All other icons */}
        <IonIcon icon={iconMap[`heart${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`happy${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`airplane${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`finger-print${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`person${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`people-circle${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`apps${segment}`]}></IonIcon>

        <IonIcon icon={iconMap[`lock-closed${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`key${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`attach${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`map${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`navigate${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`pin${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`locate${segment}`]}></IonIcon>

        <IonIcon icon={iconMap[`mic${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`volume-high${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`musical-notes${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`radio${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`cafe${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`calculator${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`bus${segment}`]}></IonIcon>

        <IonIcon icon={iconMap[`wine${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`camera${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`star${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`image${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`pin${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`arrow-up-circle${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`arrow-undo${segment}`]}></IonIcon>

        <IonIcon icon={iconMap[`chevron-down${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`play-circle${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`cloud${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`sunny${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`umbrella${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`rainy${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`cloud-done${segment}`]}></IonIcon>

        <IonIcon icon={iconMap[`game-controller${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`alarm${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`barbell${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`earth${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`bicycle${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`basket${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`car${segment}`]}></IonIcon>

        <IonIcon icon={iconMap[`flash-off${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`gift${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`heart-half${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`ice-cream${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`leaf${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`paw${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`ribbon${segment}`]}></IonIcon>

        <IonIcon icon={iconMap[`shirt${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`thumbs-up${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`warning${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`ice-cream${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`trash${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`tennisball${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`rose${segment}`]}></IonIcon>

        <IonIcon icon={iconMap[`subway${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`speedometer${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`egg${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`color-fill${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`cash${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`boat${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`aperture${segment}`]}></IonIcon>

        <IonIcon icon={iconMap[`albums${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`football${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`at-circle${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`bandage${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`barcode${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`bluetooth${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`bug${segment}`]}></IonIcon>

        <IonIcon icon={iconMap[`chatbox${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`code-working${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`cut${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`flask${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`hand-left${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`headset${segment}`]}></IonIcon>
        <IonIcon icon={iconMap[`library${segment}`]}></IonIcon>
      </IonContent>
    </IonPage>
  );
};

export default Grid;
