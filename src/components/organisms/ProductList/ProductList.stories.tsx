import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductList from './ProductList';

export default {
  title: 'Organisms/ProductList',
  component: ProductList,
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = () => <ProductList />;

export const LoginStory = Template.bind({});
