import Select from "react-select";
import '../../assets/styles/selectInput.css';

export default function SelectInput({defaultValue, className, placeholder, onChange, options, label}) {
  const colourStyles = {
    control: (styles) => ({...styles, backgroundColor: "white"}),
    option: (styles, {isDisabled}) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? "red" : "white",
        color: "#000000"
      };
    }
  };

  return (
    <>
      <label>
        {label}
      </label>
      <Select
        styles={colourStyles}
        defaultValue={defaultValue}
        className={className}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
      />
    </>
  );
}
