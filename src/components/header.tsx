import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.h2`
  padding: 0.5rem;
  margin: 1rem;
`;

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link style={{ padding: "0.5rem", margin: "0.25rem" }} to={to}>
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <StyledHeader>
      <Title>React Introduction</Title>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </StyledHeader>
  );
}
