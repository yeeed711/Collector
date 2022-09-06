import styled from 'styled-components';

const Button = ({ type, label, bgColor, ...props }: ButtonProps) => {
  return (
    <StyledButton type={type} bgColor={bgColor} {...props}>
      {label}
    </StyledButton>
  );
};

export interface ButtonProps {
  type: 'button' | 'submit';
  label?: string;
  padding?: string;
  border?: string;
  borderBottom?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  bgColor?: any;
  imgSrc?: string;
  className?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  padding: ${props => props.padding};
  border: ${props => props.border};
  border-bottom: ${props => props.borderBottom};
  border-radius: ${props => props.borderRadius};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.imgSrc});
  &.btn_product-upload {
    background-position: 20px 11px;
    background-repeat: no-repeat;
    padding-left: 30px;
  }
  &.btn_tap_menu {
    &::before {
      content: '10';
      position: absolute;
      right: 20px;
      width: 20px;
      border-radius: 50%;
      font-size: 12px;
      color: #ffffff;
      background-color: ${props => props.theme.color.error};
    }
  }
`;

export default Button;
