import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';


import { ButtonExamples } from './ButtonExamples';
import { IonApp, IonButton } from '@ionic/react';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Components/Button Examples',
  component: ButtonExamples,
  decorators: [(Story) => <IonApp><Story /></IonApp>],
} as Meta;

const Template : Story =  (args) => <ButtonExamples {...args} />

export const Examples = Template.bind({});