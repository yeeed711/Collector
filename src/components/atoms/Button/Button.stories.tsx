import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import plusIcon from '../../../assets/icon-plus.svg';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const LargeBtn = () => {
  return (
    <Button type='button' label='버튼' padding='19px 0' bgColor='#21BF48' />
  );
};

export const Large = Template.bind({});
Large.args = {
  type: 'button',
  label: '버튼',
  padding: '19px 0',
  borderRadius: '5px',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '30px',
  color: '#FFFFFF',
  bgColor: '#21BF48',
};

export const LargeDisabled = Template.bind({});
LargeDisabled.args = {
  type: 'button',
  label: '버튼',
  padding: '19px 0',
  borderRadius: '5px',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '30px',
  color: '#FFFFFF',
  bgColor: '#C4C4C4',
};

export const Medium = Template.bind({});
Medium.args = {
  type: 'button',
  label: '버튼',
  padding: '19px 0',
  borderRadius: '5px',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '22px',
  color: '#FFFFFF',
  bgColor: '#21BF48',
};

export const MediumDisabled = Template.bind({});
MediumDisabled.args = {
  type: 'button',
  label: '버튼',
  padding: '19px 0',
  borderRadius: '5px',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '22px',
  color: '#FFFFFF',
  bgColor: '#C4C4C4',
};

export const MediumDark = Template.bind({});
MediumDark.args = {
  type: 'button',
  label: '버튼',
  padding: '19px 0',
  borderRadius: '5px',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '22px',
  color: '#FFFFFF',
  bgColor: '#767676',
};

export const MediumWhite = Template.bind({});
MediumWhite.args = {
  type: 'button',
  label: '버튼',
  padding: '19px 0',
  border: '1px solid #C4C4C4',
  borderRadius: '5px',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '22px',
  color: '#767676',
  bgColor: '#FFFFFF',
};

export const MS_Icon_Product = Template.bind({});
MS_Icon_Product.args = {
  type: 'button',
  label: '상품 업로드',
  padding: '16px 0',
  borderRadius: '5px',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '23px',
  color: '#FFFFFF',
  bgColor: '#21BF48',
  imgSrc: `${plusIcon}`,
  className: 'btn_product-upload',
};

export const MS_16p_Product = Template.bind({});
MS_16p_Product.args = {
  type: 'button',
  label: '버튼',
  padding: '16px 0',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '23px',
  color: '#FFFFFF',
  bgColor: '#21BF48',
};

export const MS_16p_Product_White = Template.bind({});
MS_16p_Product_White.args = {
  type: 'button',
  label: '버튼',
  padding: '16px 0',
  border: '1px solid #C4C4C4',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '23px',
  color: '#767676',
  bgColor: '#FFFFFF',
};

export const MS_16p_Product_White_Hover = Template.bind({});
MS_16p_Product_White_Hover.args = {
  type: 'button',
  label: '버튼',
  padding: '16px 0',
  border: '1px solid #767676',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '23px',
  color: '#000000',
  bgColor: '#FFFFFF',
};

export const Small = Template.bind({});
Small.args = {
  type: 'button',
  label: '버튼',
  padding: '10px 0',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  color: '#FFFFFF',
  bgColor: '#21BF48',
};

export const Small_White = Template.bind({});
Small_White.args = {
  type: 'button',
  label: '버튼',
  padding: '10px 0',
  border: '1px solid #C4C4C4',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  color: '#767676',
  bgColor: '#FFFFFF',
};

export const Small_White_Hover = Template.bind({});
Small_White_Hover.args = {
  type: 'button',
  label: '버튼',
  padding: '10px 0',
  border: '1px solid #767676',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  color: '#000000',
  bgColor: '#FFFFFF',
};

export const Nav_Tab_Active = Template.bind({});
Nav_Tab_Active.args = {
  type: 'button',
  label: '버튼',
  padding: '19px 0 12px',
  borderBottom: '6px solid #21BF48',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '23px',
  color: '#21BF48',
  bgColor: '#FFFFFF',
};

export const Nav_Tab_Disabled = Template.bind({});
Nav_Tab_Disabled.args = {
  type: 'button',
  label: '버튼',
  padding: '19px 0 12px',
  borderBottom: '6px solid #E0E0E0',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '23px',
  color: '#767676',
  bgColor: '#FFFFFF',
};

export const Tab_Menu_Off = Template.bind({});
Tab_Menu_Off.args = {
  type: 'button',
  label: '판매중인 상품',
  padding: '15px 0',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  color: '#000000',
  bgColor: '#FFFFFF',
  className: 'btn_tap_menu',
};

export const Tab_Menu_Hover = Template.bind({});
Tab_Menu_Hover.args = {
  type: 'button',
  label: '판매중인 상품',
  padding: '15px 0',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  color: '#000000',
  bgColor: '#EFFFF3',
  className: 'btn_tap_menu',
};

export const Tab_Menu_On = Template.bind({});
Tab_Menu_On.args = {
  type: 'button',
  label: '판매중인 상품',
  padding: '15px 0',
  borderRadius: '5px',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  color: '#FFFFFF',
  bgColor: '#21BF48',
  className: 'btn_tap_menu',
};
