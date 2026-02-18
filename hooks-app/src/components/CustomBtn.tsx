interface Props {
    text:       string;
    color:      string;
    onPress:    () => void;
}

export const CustomBtn = ({ text, color, onPress }: Props) => {
  return (
    <button
        style={{
            backgroundColor: color,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5
        }}
        className="
            text-white 
            px-4 
            py-2 
            rounded-lg
            hover:bg-green-600
            transition
            duration-300
        "
        onClick={ onPress }
    >
        { text }
    </button>
  );
};
