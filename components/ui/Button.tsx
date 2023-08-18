import "@/style/ui/button.scss";
import { ReactNode, FC } from "react";

interface Props {
  border: string;
  color: "red" | "green" | "blue";
  children?: ReactNode;
  onClick: () => void;
}

const Button: FC<Props> = ({ color, children, onClick }) => {
  return (
    <button
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
