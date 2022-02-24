import { useField } from "formik";

interface TextInputProps {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        {...field}
        {...props}
        className="text-input-grey bg-white border-[1px] border-gray-300 rounded-md text-sm font-normal p-2 min-h-[1.75rem] my-1 outline-none
        transition ease duration-[30ms] focus:border-rose-300 focus:shadow-[0px_1px_4px_-1px_#fb7185]"
      />
      {meta.error && meta.touched && (
        <p className="text-xs text-rose-500 w-full text-left">{meta.error}</p>
      )}
    </>
  );
};

export default TextInput;

// border: 0;
// outline: 0;
// color: rgb(60, 66, 87);
// background-color: rgb(255, 255, 255);
// box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px;
// border-radius: 4px;
// font-size: 14px;
// line-height: 20px;
// font-weight: 400;
// padding: 4px 8px;
// min-height: 28px;
// vertical-align: middle;
// transition: background-color .24s,box-shadow .24s;
// transition-property: background-color, box-shadow;
// transition-duration: 0.24s, 0.24s;
// transition-timing-function: ease, ease;
// transition-delay: 0s, 0s;
// :focus{
//     box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(58 151 212 / 36%) 0px 0px 0px 4px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px;
// }
