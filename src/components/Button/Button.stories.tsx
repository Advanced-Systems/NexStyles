import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { State } from '../../enumerations';

export default {
  title: 'NexStyles/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MobileButton = Template.bind({});
MobileButton.args = {
  label: 'Hello',
  state: State.Success,
  onClick: () => alert("World!"),
};
