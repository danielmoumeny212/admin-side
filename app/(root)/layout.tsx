import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SetupLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default SetupLayout;
