import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';


import { ButtonExamples } from './ButtonExamples';
import { IonButton } from '@ionic/react';

export default {
  title: 'Components/ButtonExamples',
  component: ButtonExamples,
  
} as Meta;

const Template : Story = (args) => <ButtonExamples {...args} />

export const ExampleButtons = Template.bind({});

// export const SomeButton : Story = (args) => (
//   <IonButton color='danger'>Button</IonButton>
// )