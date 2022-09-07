import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputBox from './InputBox';

export default {
  title: 'Molecules/InputBox',
  component: InputBox,
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = args => (
  <InputBox {...args} />
);

export const textInputBox = Template.bind({});
textInputBox.args = {
  htmlFor: 'userId',
  children: '아이디',
  id: 'userId',
  type: 'text',
  placeholder: 'Text',
  margin: '10px 0 0 0',
};

export const textActivInputBox = Template.bind({});
textActivInputBox.args = {
  htmlFor: 'Password',
  children: '비밀번호',
  id: 'Password',
  type: 'text',
  placeholder: 'Text',
  margin: '10px 0 0 0',
};

export const textInputLimitBox = Template.bind({});
textInputLimitBox.args = {
  htmlFor: 'Password',
  children: '상품명',
  id: 'Password',
  type: 'text',
  placeholder: '딥러닝 개발자 무릎 담요',
  margin: '10px 0 0 0',
  maxLength: 50,
};

export const textInputCheckDuplicatBox = Template.bind({});
textInputCheckDuplicatBox.args = {
  htmlFor: 'userId',
  children: '아이디',
  id: 'userId',
  type: 'text',
  placeholder: 'Text',
  margin: '10px 0',
  className: 'error errorMeg',
  message: '틀림',
};
