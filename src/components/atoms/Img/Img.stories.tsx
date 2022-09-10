import { ComponentStory, ComponentMeta } from '@storybook/react';
import Img from './Img';

export default {
  title: 'Atoms/Img',
  component: Img,
} as ComponentMeta<typeof Img>;

const Template: ComponentStory<typeof Img> = args => <Img {...args} />;

export const 메인상품이미지 = Template.bind({});
메인상품이미지.args = {
  size: '380px',
  borderRadius: '10px',
  border: true,
};

export const 카트상품이미지 = Template.bind({});
카트상품이미지.args = {
  size: '160px',
  borderRadius: '10px',
};

export const 상품정보이미지 = Template.bind({});
상품정보이미지.args = {
  size: '104px',
  borderRadius: '10px',
};

export const 둥근이미지 = Template.bind({});
둥근이미지.args = {
  size: '70px',
  borderRadius: '50%',
};
