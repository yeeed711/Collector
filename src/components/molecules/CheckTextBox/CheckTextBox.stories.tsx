import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckTextBox from './CheckTextBox';

export default {
  title: 'Molecules/CheckTextBox',
  component: CheckTextBox,
} as ComponentMeta<typeof CheckTextBox>;

const Template: ComponentStory<typeof CheckTextBox> = args => (
  <CheckTextBox {...args} />
);

export const CheckField = Template.bind({});
CheckField.args = {
  children:
    '호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.',
};
