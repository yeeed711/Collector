import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />;

export const mainLogo = Template.bind({});
mainLogo.args = {
  width: '238px',
  alt: '메인 로고',
};

export const subLogo = Template.bind({});
subLogo.args = {
  width: '124px',
  alt: '서브 로고',
};
