import { ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const defaultInput = () => {
  return (
    <Input
      inputName='inputName'
      type='text'
      placeholder='Text'
      border='1px solid #C4C4C4'
      borderRadius='5px'
    />
  );
};

export const ActiveInput = () => {
  return (
    <Input
      inputName='inputName'
      type='text'
      placeholder='Text'
      border='1px solid #21BF48'
      borderRadius='5px'
    />
  );
};

export const LimitInput = () => {
  return (
    <Input
      inputName='inputName'
      type='text'
      placeholder='딥러닝 개발자 무릎 담요'
      border='1px solid #C4C4C4'
      borderRadius='5px'
      maxLength={50}
    />
  );
};

// type = checkbox
export const CheckBoxInput = () => {
  return <Input inputName='checkbox' type='checkbox' />;
};
