import { FunctionComponent, HTMLAttributes, PropsWithChildren } from "react";
import { classNames } from "../utils/classNames";

interface ContainerProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(className, "pt-20 bg-white rounded-xl p-10 mt-10")}
    >
      {children}
    </div>
  );
};

export default Container;
