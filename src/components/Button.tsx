import React from 'react';
import { IonButton, IonContent, IonGrid, IonRow, IonIcon } from '@ionic/react';
import '../theme/variables.css';

const divStyle={
  padding: 20
}

// https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#strict-object-literal-assignment-checking
export interface ButtonProps {
  text: string,
  [x: string] : any
}

export const Button: React.FC<ButtonProps> = ({text,...x}) => (
  <IonButton {...x}>{text}</IonButton>
)