import { ComponentStory, ComponentMeta } from '@storybook/react';
import PriceTextBox from './PriceTextBox';

export default {
  title: 'Molecules/PriceTextBox',
  component: PriceTextBox,
} as ComponentMeta<typeof PriceTextBox>;

const Template: ComponentStory<typeof PriceTextBox> = args => (
  <PriceTextBox {...args} />
);

export const MediumText = Template.bind({});
MediumText.args = {
  text: 46500,
  fontSize: '24px',
  textFontSize: '16px',
  isTotal: false,
};

export const LargeText = Template.bind({});
LargeText.args = {
  text: 46500,
  fontSize: '36px',
  textFontSize: '18px',
  isTotal: false,
};
