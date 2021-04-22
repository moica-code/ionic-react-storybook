import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';


import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button Playground',
  component: Button,
  
} as Meta;

const Template : Story<ButtonProps> = (args) => <Button {...args} />

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: 'default',
  mode: 'md',
  strong: false,
  size: undefined,
  disabled: false,
  expand: undefined,
  shape: undefined,
  color: 'primary',
  fill: 'solid',
  type: 'button',
  href: undefined,
  download: undefined,
  rel: undefined,
  routerAnimation: undefined,
  routerDirection: 'forward',
  target: undefined,
}

export const IOSModeButton = Template.bind({});
IOSModeButton.args = {
  ...DefaultButton.args,
  text: 'click me!',
  mode: 'ios',
}

export const StrongButton = Template.bind({});
StrongButton.args = {
  ...DefaultButton.args,
  text: 'click me!',
  strong: true
}
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  ...DefaultButton.args,
  text: 'Click me!',
  disabled: true
}

export const SmallButton = Template.bind({});
SmallButton.args = {
  ...DefaultButton.args,
  text: 'small',
  size: 'small'
}

export const MediumButton = Template.bind({});
MediumButton.args = {
  ...DefaultButton.args,
  text: 'medium',
  size: 'medium'
}

export const LargeButton = Template.bind({});
LargeButton.args = {
  ...DefaultButton.args,
  text: 'large',
  size: 'large'
}

export const ExpandedFullButton = Template.bind({});
ExpandedFullButton.args = {
  ...DefaultButton.args,
  text: 'Fully Expanded Button',
  expand: 'full'
}

export const ExpandedBlockButton = Template.bind({});
ExpandedBlockButton.args = {
  ...DefaultButton.args,
  text: 'Block Button',
  expand: 'block',
}

export const HrefButton = Template.bind({});
HrefButton.args = {
  ...DefaultButton.args,
  text: 'href',
  href: '#',
}

export const RoundedButton = Template.bind({})
RoundedButton.args = {
  ...DefaultButton.args,
  text: 'round button',
  shape: 'round'
}

export const ClearButtonFill = Template.bind({})
ClearButtonFill.args = {
  ...DefaultButton.args,
  text: 'Button',
  fill: 'clear'
}

export const DefaultButtonFill = Template.bind({})
DefaultButtonFill.args = {
  ...DefaultButton.args,
  text: 'Button',
  fill: 'default'
}

export const OutlineButtonFill = Template.bind({})
OutlineButtonFill.args = {
  ...DefaultButton.args,
  text: 'Button',
  fill: 'outline'
}

export const LargeFullyExpandedStandardModeRoundGreenButton = Template.bind({});
LargeFullyExpandedStandardModeRoundGreenButton.args = {
  ...DefaultButton.args,
  text: 'Click Me!',
  strong: false,
  size: 'large',
  expand: 'full',
  shape: 'round',
  color: 'success',
  fill: 'outline'
}

export const IosStrongBlockDisabledClearButton = Template.bind({});
IosStrongBlockDisabledClearButton.args = {
  ...DefaultButton.args,
  text: 'I am a clear Ion Button',
  mode: 'ios',
  strong: true,
  size: 'large',
  disabled: true,
  expand: 'block',
  href: undefined,
  shape: 'round',
  color: 'warning',
  fill: 'clear',
  type: 'button'
}