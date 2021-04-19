import React from 'react';
import { IonButton, IonContent, IonGrid, IonRow, IonIcon } from '@ionic/react';
import '../theme/variables.css';

const divStyle={
  padding: 20
}

export const ButtonExamples: React.FC = () => (
  <div style={divStyle}>
    {/*-- Default --*/}
    <IonButton>Default</IonButton>

    {/*-- Anchor --*/}
    <IonButton href="#">Anchor</IonButton>

    {/*-- Expand --*/}
    <IonButton expand="full">Full Button</IonButton>
    <IonButton expand="block">Block Button</IonButton>

    {/*-- Round --*/}
    <IonButton shape="round">Round Button</IonButton>

    {/*-- Fill --*/}
    <IonButton expand="full" fill="outline">Outline + Full</IonButton>
    <IonButton expand="block" fill="outline">Outline + Block</IonButton>
    <IonButton shape="round" fill="outline">Outline + Round</IonButton>

    {/*-- Icons --*/}
    

    {/*-- Sizes --*/}
    <IonButton size="large">Large</IonButton>
    <IonButton>Default</IonButton>
    <IonButton size="small">Small</IonButton>
  </div>
);
// export const DefaultButton: React.FC = () => (
//   <IonButton>Default</IonButton>
// )

// export const HrefAtrribute: React.FC = () => (
//   <IonButton href='#'>Href</IonButton>
// )

// export const ExpandAttribute: React.FC = () => (
//   <IonContent>
//     <IonButton expand='full'>Full Button</IonButton>
//     <IonButton expand='block'>Block Button</IonButton>
//   </IonContent>
// )