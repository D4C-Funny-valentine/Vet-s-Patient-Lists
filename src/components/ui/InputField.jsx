import Image from "next/image";
import black_down from "@/images/black_down.png";
const InputField = ({ label, id, name, type, value, onChange, options }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-light_gray">
        {label}
      </label>
      {type === "select" ? (
        <div className="px-3 py-1 rounded border border-light_blue outline-none flex items-center">
          <select
            required
            id={id}
            name={name}
            className="w-full outline-none bg-transparent border-none"
            value={value}
            onChange={onChange}
          >
            <option
              value=""
              className=""
            >{`Please choose ${label.toLowerCase()}`}</option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <Image alt="img" src={black_down} width={15} />
        </div>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required
          className="px-3 py-1 rounded border border-light_blue outline-none"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputField;
