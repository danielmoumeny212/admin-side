import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const setupLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default setupLayout;
