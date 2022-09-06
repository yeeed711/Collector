import { ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const defaultInput = () => {
  return (
    <Input
      id='id'
      type='text'
      placeholder='Text'
      border='1px solid #C4C4C4'
      borderRadius='5px'
      padding=' 17px 0 17px 16px'
    />
  );
};

export const ActiveInput = () => {
  return (
    <Input
      id='id'
      type='text'
      placeholder='Text'
      border='1px solid #21BF48'
      borderRadius='5px'
      padding=' 17px 0 17px 16px'
    />
  );
};

export const LimitInput = () => {
  return (
    <Input
      id='id'
      type='text'
      placeholder='딥러닝 개발자 무릎 담요'
      border='1px solid #C4C4C4'
      borderRadius='5px'
      maxLength={50}
      padding=' 17px 0 17px 16px'
    />
  );
};

export const TextInput = () => {
  return (
    <Input
      id='id'
      type='text'
      placeholder='placeholder'
      border='none'
      borderBottom='1px solid #C4C4C4'
      padding=' 17px 0 17px 16px'
    />
  );
};

export const TextActivInput = () => {
  return (
    <Input
      id='id'
      type='text'
      placeholder='placeholder'
      border='none'
      borderBottom='1px solid #21BF48'
      padding=' 17px 0 17px 16px'
    />
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
  return (
    <Input
      type='text'
      placeholder='금액을 입력해주세요.'
      border='1px solid #C4C4C4'
      borderRadius='5px'
    />
  );
};
