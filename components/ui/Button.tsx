import "@/style/ui/button.scss";
import { ReactNode, FC } from "react";

interface Props {
  border?: string;
  color?: "red" | "green" | "blue";
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  onClick?: () => void;
}

const Button: FC<Props> = ({ type, color, children, onClick }) => {
  return (
    <button
      type={type}
      className="button"
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
