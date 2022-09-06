import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputBtn from './InputBtn';

export default {
  title: 'Molecules/InputBtn',
  component: InputBtn,
} as ComponentMeta<typeof InputBtn>;

const Template: ComponentStory<typeof InputBtn> = args => (
  <InputBtn {...args} />
);

export const InputBtnStory = Template.bind({});
InputBtnStory.args = {
  htmlFor: 'userId',
  id: 'userId',
  children: '아이디',
  label: '중복확인',
  message: '사용 가능한 아이디입니다.',
  border: '1px solid #c4c4c4',
};

export const InputBtnErrorStory = Template.bind({});
InputBtnErrorStory.args = {
  htmlFor: 'userId',
  id: 'userId',
  children: '아이디',
  label: '중복확인',
  message: '이미 사용중인 아이디입니다.',
  border: '1px solid #eb5757',
  className: 'error',
};
