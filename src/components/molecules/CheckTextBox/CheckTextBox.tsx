import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import checkOn from '../../../assets/check-fill-box.svg';
import checkOff from '../../../assets/check-box.svg';

interface Props {
  children: string;
  id: string;
}

const CheckField = styled.div`
  input[type='checkbox'] {
    position: absolute;
    left: -3000%;
  }
  input[type='checkbox'] + label {
    cursor: pointer;
    &::before {
      content: url(${checkOff});
      display: inline-block;
      margin-right: 8px;
      vertical-align: top;
    }
  }
  input[type='checkbox']:checked + label {
    &::before {
      content: url(${checkOn});
    }
  }
`;

const CheckTextBox = ({ children }: Props) => {
  return (
    <CheckField>
      <Input id='checkbox' type='checkbox' />
      <Label htmlFor='checkbox' children={children} />
    </CheckField>
  );
};

export default CheckTextBox;
