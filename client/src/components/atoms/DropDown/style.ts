import styled, { css } from 'styled-components';

interface DropDownProps {
  isMenuClicked: boolean;
}

interface DropDownContentProps {
  color: string;
  bottomBorder: boolean;
}

export const DropDown = styled.div`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadein 0.5s;

  ${(props: DropDownProps) =>
    !props.isMenuClicked &&
    css`
      display: none;
    `};

  width: 86px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  text-align: center;
  background-color: white;
`;
export const DropDownContent = styled.div`
  ${(props: DropDownContentProps) =>
    css`
      color: ${props.color};
    `};

  ${(props: DropDownContentProps) =>
    props.bottomBorder &&
    css`
      :after {
        content: 'space';
        color: white;
        display: block;
        width: 62px;
        border-bottom: 1px solid #bcbcbc;

        margin: auto;
      }
    `};

  font-family: Roboto;
  font-weight: bold;

  font-size: 11px;
  padding: 5px;
  cursor: pointer;
`;
