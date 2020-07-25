import { PickerColumn } from "@ionic/core";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonPicker,
} from "@ionic/react";
import React, { useState, useCallback } from "react";
import ComponentDetails from "../../components/ComponentDetails";
import "./Picker.css";

const defaultColumnOptions = [["Dog", "Cat", "Bird", "Lizard", "Chinchilla"]];

const multiColumnOptions = [
  ["Minified", "Responsive", "Full Stack", "Mobile First", "Serverless"],
  ["Tomato", "Avocado", "Onion", "Potato", "Artichoke"],
];

function getColumns(
  numColumns: number,
  numOptions: number,
  columnOptions: string[][]
) {
  const columns = [];
  for (let i = 0; i < numColumns; i++) {
    columns.push({
      name: `col-${i}`,
      options: getColumnOptions(i, numOptions, columnOptions),
    });
  }

  return columns;
}

function getColumnOptions(
  columnIndex: number,
  numOptions: number,
  columnOptions: string[][]
) {
  const options = [];
  for (let i = 0; i < numOptions; i++) {
    options.push({
      text: columnOptions[columnIndex][i % numOptions],
      value: i,
    });
  }

  return options;
}

const Picker: React.FC = () => {
  const description = `The <b>Picker</b> is a dialog that displays a row of buttons
      and columns underneath. It appears on top of the app's content, and at the bottom
      of the viewport.`;
  const url = "picker";

  const [showPicker, setShowPicker] = useState(false);
  const [columns, setColumns] = useState<PickerColumn[]>([
    { name: "", options: [] },
  ]);
  const openPicker = useCallback(
    (numColumns = 1, numOptions = 5, columnOptions = defaultColumnOptions) => {
      setShowPicker(true);
      setColumns(getColumns(numColumns, numOptions, columnOptions));
    },
    []
  );

  return (
    <IonPage className="page-picker">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>Picker</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="component-content">
        <ComponentDetails
          description={description}
          url={url}
        ></ComponentDetails>

        <div className="ion-padding-start ion-padding-end">
          <IonButton expand="block" onClick={(_) => openPicker()}>
            Open Single Column Picker
          </IonButton>
          <IonButton
            expand="block"
            onClick={(_) => openPicker(2, 5, multiColumnOptions)}
          >
            Open Multiple Column Picker
          </IonButton>
        </div>
      </IonContent>
      <IonPicker
        isOpen={showPicker}
        onDidDismiss={() => setShowPicker(false)}
        columns={columns}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
          },
          {
            text: "Confirm",
            handler: (value) => {
              console.log(`Got Value ${value}`);
            },
          },
        ]}
      ></IonPicker>
    </IonPage>
  );
};

export default Picker;
