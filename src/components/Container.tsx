import { IChildren } from "../types";

export default function Container({ children }: IChildren) {
  return <div className="mx-auto px-5 md:px-20">{children}</div>;
}
