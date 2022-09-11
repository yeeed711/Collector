import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductCard from './ProductCard';

export default {
  title: 'Molecules/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = args => (
  <ProductCard {...args} />
);

export const ProductCardStory = Template.bind({});
