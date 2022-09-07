import { ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const defaultInput = () => {
  return <Input id='id' type='text' placeholder='Text' />;
};

export const LimitInput = () => {
  return (
    <Input
      id='id'
      type='text'
      placeholder='딥러닝 개발자 무릎 담요'
      maxLength={50}
    />
  );
};

export const TextInput = () => {
  return (
    <Input id='id' type='text' placeholder='placeholder' className='square' />
  );
};

// type = checkbox
export const CheckBoxInput = () => {
  return <Input id='checkbox' type='checkbox' />;
};

// type = search
export const SearchInput = () => {
  return <Input type='search' placeholder='상품을 검색해보세요!' />;
};

export const NumberInput = () => {
  return <Input type='text' placeholder='금액을 입력해주세요.' />;
};
