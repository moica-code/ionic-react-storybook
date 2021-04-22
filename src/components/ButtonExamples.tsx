import React from 'react';
import { IonButton, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonTitle, IonItem, IonTextarea, IonHeader, IonText } from '@ionic/react';
import '../theme/variables.css';

const headerStyle={
  padding: 10
}

export const ButtonExamples: React.FC = () => (
  <IonContent>
    <IonGrid>
      <IonHeader>
        <IonTitle className='ion-text-center' style={headerStyle}>BUTTON EXAMPLES</IonTitle>
      </IonHeader>
      <IonRow>
        <IonCol className='ion-margin-vertical'>
          <IonTitle>Button Sizes</IonTitle>
          <IonButton size='small' color='primary'>small</IonButton>
          <IonButton size='default' color='secondary'>default</IonButton>
          <IonButton size='large' color='tertiary'>large</IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className='ion-margin-vertical'>
          <IonTitle>Width</IonTitle>
          <IonButton expand='full' color='success'>Full-Width Button</IonButton>
          <IonButton expand='block' color='danger'>Block Button</IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className='ion-margin-vertical'>
          <IonTitle>Fill</IonTitle>
          <IonButton fill='solid' color='warning'>Solid Button</IonButton>
          <IonButton fill='clear' color='success'>I am clear</IonButton>
          <IonButton fill='default'>I am default fill</IonButton>
          <IonButton fill='outline' color='danger'>Outline Button</IonButton>
        </IonCol>
        <IonCol className='ion-margin-vertical'>
          <IonTitle>iOS vs. MD</IonTitle>
          <IonButton mode='ios'>iOS</IonButton>
          <IonButton mode='md'>md</IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
      </IonRow>
      <IonRow>
        <IonCol className='ion-margin-vertical'>
          <IonTitle>Disabled</IonTitle>
          <IonButton disabled={true}>Can't touch this</IonButton>
        </IonCol>
        <IonCol className='ion-margin-vertical'>
          <IonTitle>Shape</IonTitle>
          <IonButton shape='round' color='medium'>Round</IonButton>
        </IonCol>
        <IonCol className='ion-margin-vertical'>
          <IonTitle>Type</IonTitle>
          <IonButton type='button' color='warning'>button</IonButton>
          <IonButton type='submit' color='success'>submit</IonButton>
          <IonButton type='reset' color='danger'>reset</IonButton>
        </IonCol>
        <IonCol className='ion-margin-vertical'>
          <IonTitle>HREF</IonTitle>
          <IonButton href='#' color='dark' fill='outline'>I am a link</IonButton>
        </IonCol>
        <IonCol className='ion-margin-vertical'>
          <IonTitle>Strong</IonTitle>
          <IonButton strong color='dark'>Bold Font Button</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
)