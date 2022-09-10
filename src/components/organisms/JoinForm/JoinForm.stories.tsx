import { ComponentStory, ComponentMeta } from '@storybook/react';
import JoinForm from './JoinForm';

export default {
  title: 'Organisms/JoinForm',
  component: JoinForm,
} as ComponentMeta<typeof JoinForm>;

const Template: ComponentStory<typeof JoinForm> = () => <JoinForm />;

export const JoinFormStory = Template.bind({});
