import styled from "@emotion/styled";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  children?: JSX.Element;
  href: string;
  onClick?: () => void;
};

const StyledLink = styled(RouterLink)`
  width: 100%;
  display: flex;
`;

const Link = ({ children, href, onClick }: Props): JSX.Element => {
  return (
    <StyledLink to={href} onClick={onClick}>
      {children}
    </StyledLink>
  );
};

export default Link;
