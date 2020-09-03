/* eslint-disable react/jsx-props-no-spreading, indent */
import React from 'react';

import ButtonCore from '@material-ui/core/Button';

import styled from 'styled-components';

import { colors } from 'styles/constants';

const Button = styled(({ navbar, ...props }) => <ButtonCore {...props} />)`
  &.MuiButton-root {
    border-radius: 0%;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding: 5px 16px;
  }

  &:hover {
    background: ${colors.lightMain};
    color: ${colors.main};
    span {
      color: ${colors.main};
    }
  }
`;

export { Button };
