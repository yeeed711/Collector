import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './LoginForm';
import theme from '../../../theme';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => (
  <LoginForm {...args} />
);

export const LoginStory = Template.bind({});
LoginStory.args = {};
