import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinkBox from './LinkBox';

export default {
  title: 'Molecules/LinkBox',
  component: LinkBox,
} as ComponentMeta<typeof LinkBox>;

const Template: ComponentStory<typeof LinkBox> = () => <LinkBox />;

export const LinkBoxStory = Template.bind({});
