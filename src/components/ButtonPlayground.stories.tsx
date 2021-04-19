import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonPlayground, ButtonProps} from './ButtonPlayground';
import { IonApp, IonContent } from '@ionic/react';

export default {
  title: 'Components/Button Playground',
  component: ButtonPlayground,
  decorators: [(Story) => <IonApp
    style={{ padding: '10px'}}><Story /></IonApp>],
} as Meta;

const Template : Story<ButtonProps> = (args) => (<IonContent>
  <ButtonPlayground {...args} />
</IonContent>)

export const ButtonOptions = Template.bind({});
ButtonOptions.args = {
  label: 'Click me!',
}