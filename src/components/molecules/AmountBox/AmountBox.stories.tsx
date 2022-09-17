import { ComponentStory, ComponentMeta } from '@storybook/react';
import AmountBox from './AmountBox';

export default {
  title: 'Molecules/AmountBox',
  component: AmountBox,
} as ComponentMeta<typeof AmountBox>;

const Template: ComponentStory<typeof AmountBox> = args => (
  <AmountBox {...args} />
);

export const defaultBox = Template.bind({});
defaultBox.args = {};
