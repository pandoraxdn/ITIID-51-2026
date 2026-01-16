
interface Props {
    color:  string;
    text:   string;
    type:   string;
}

export const CustomInput = ({ color, text, type }: Props) => {
  return (
    <input
        type={ type }
        placeholder={ text }
        style={{
            backgroundColor: color,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5
        }}
        className="
            text-black
            border-4
            border-red-300
            p-2
            rounded-md
            w-full
            focus:border-pink-500
            focus:ring-2
            focus:ring-pink-300
            focus:outline-none
        "
    />
  );
};
