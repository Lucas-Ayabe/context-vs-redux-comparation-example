import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Template({ children }: Props) {
  return <main className="wrapper">{children}</main>;
}
