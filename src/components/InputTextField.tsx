import { useEffect, useState } from "react";

interface InputTextFieldInterface {
    id: string;
    labelText: string;
    placeholder: string;
    inputState: string;
    inputSetState: React.Dispatch<React.SetStateAction<string>>;
}

const InputTextField = ({
    id,
    labelText,
    placeholder,
    inputState,
    inputSetState,
}: InputTextFieldInterface) => {
    return (
        <div className="text-black dark:text-white">
            <label className="mb-2 block" htmlFor={id}>
                {labelText}
            </label>
            <input
                id={id}
                type="text"
                placeholder={placeholder}
                onChange={(e) => {
                    inputSetState(e.target.value);
                }}
                className="w-full rounded border border-black bg-transparent px-4 py-2 dark:border-white"
            />
        </div>
    );
};

export default InputTextField;
