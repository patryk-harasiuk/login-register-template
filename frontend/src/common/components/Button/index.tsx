import { IconBaseProps } from "react-icons";

interface ButtonProps {
  buttonText: string;
  icon?: any;
  color?: string;
  children?: IconBaseProps;
}

const Button = ({ buttonText, children, color }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center border-[2px] border-grey rounded-md text-sm font-normal p-2 min-h-[1.75rem] w-full my-0.5 outline-none ${
        color === "main" ? "bg-rose-600 text-white border-none" : ""
      }`}
    >
      {children} <p className={children && "pl-2"}>{buttonText}</p>
    </button>
  );
};

export default Button;
