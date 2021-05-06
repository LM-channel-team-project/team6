import styled from 'styled-components';

export const Category = styled.span`
  display: inline-block;
  padding: 3px 5px;
  font-size: 10px;
  text-transform: uppercase;

  &.javascript {
    background-color: #ffedaf;
    color: #ffac5f;
  }

  &.react {
    background-color: #ace6ff;
    color: #4692d8;
  }

  &.node {
    background-color: #acffbe;
    color: #47ba89;
  }

  &.python {
    background-color: #306fcc;
    color: #c1c4ff;
  }

  & + & {
    margin-left: 7px;
  }
`;
