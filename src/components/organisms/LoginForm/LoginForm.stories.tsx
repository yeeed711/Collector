import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './LoginForm';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const LoginStory = Template.bind({});
