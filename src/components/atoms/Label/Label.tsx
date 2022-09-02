import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  htmlFor: string;
  children: string;
}

const StyledLabel = styled.label<LabelProps>`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #767676;
`;

export const Label = ({ htmlFor, children }: LabelProps) => {
  return <StyledLabel htmlFor={htmlFor} children={children} />;
};
