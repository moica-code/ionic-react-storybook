import React from 'react';
import { IonButton } from '@ionic/react';

export interface ButtonProps {
  label: string,
  buttonType: string,
  disabled: boolean,
  expand: 'full' | 'block' | undefined,
  fill: 'clear'| 'default' | 'outline' | 'solid' | undefined,
  href: string | undefined,
  mode: 'ios' | 'md' | undefined,
}

export const ButtonPlayground: React.FC<ButtonProps> = ({label,...props}) => (
  <IonButton {...props}>{label}</IonButton>
)