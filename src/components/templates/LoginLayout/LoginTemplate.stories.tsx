import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginTemplate from './LoginTemplate';

export default {
  title: 'Templates/LoginTemplate',
  component: LoginTemplate,
} as ComponentMeta<typeof LoginTemplate>;

const Template: ComponentStory<typeof LoginTemplate> = args => (
  <LoginTemplate {...args} />
);

export const LoginStory = Template.bind({});
