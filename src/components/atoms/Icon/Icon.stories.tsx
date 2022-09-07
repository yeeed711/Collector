import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';
import cart from '../../../assets/icon-shopping-cart.svg';
import user from '../../../assets/icon-user.svg';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const IconCart = Template.bind({});
IconCart.args = {
  imgSrc: cart,
  imgAlt: '장바구니',
};

export const IconUser = Template.bind({});
IconUser.args = {
  imgSrc: user,
  imgAlt: '마이페이지',
};
