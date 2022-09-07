import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconBtn from './IconBtn';
import cart from '../../../assets/icon-shopping-cart.svg';
import user from '../../../assets/icon-user.svg';

export default {
  title: 'Molecules/IconBtn',
  component: IconBtn,
} as ComponentMeta<typeof IconBtn>;

const Template: ComponentStory<typeof IconBtn> = args => <IconBtn {...args} />;

export const IconCartBtn = Template.bind({});
IconCartBtn.args = {
  imgSrc: cart,
  imgAlt: '장바구니',
  text: '장바구니',
};

export const IconUserBtn = Template.bind({});
IconUserBtn.args = {
  imgSrc: user,
  imgAlt: '마이페이지',
  text: '마이페이지',
};
