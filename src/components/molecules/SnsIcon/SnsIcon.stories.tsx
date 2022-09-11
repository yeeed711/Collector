import { ComponentStory, ComponentMeta } from '@storybook/react';
import SnsIcon from './SnsIcon';

export default {
  title: 'Molecules/SnsIcon',
  component: SnsIcon,
} as ComponentMeta<typeof SnsIcon>;

const Template: ComponentStory<typeof SnsIcon> = () => <SnsIcon />;

export const SnsIconStory = Template.bind({});
