import styled from 'styled-components';

const Label = ({ htmlFor, children, className }: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor} children={children} className={className} />
  );
};
export interface LabelProps {
  htmlFor: string;
  children: string;
  className?: string;
}

const StyledLabel = styled.label<LabelProps>`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #767676;
`;

export default Label;
