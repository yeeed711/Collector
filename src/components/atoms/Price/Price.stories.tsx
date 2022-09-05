import { ComponentStory, ComponentMeta } from '@storybook/react';
import Price from './Price';

export default {
  title: 'Atoms/Price',
  component: Price,
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = args => <Price {...args} />;

export const SmallPrice = Template.bind({});
SmallPrice.args = {
  text: 46500,
  fontSize: '18px',
};

export const MediumPrice = Template.bind({});
MediumPrice.args = {
  text: 46500,
  fontSize: '24px',
};

export const LargePrice = Template.bind({});
LargePrice.args = {
  text: 46500,
  fontSize: '36px',
};
