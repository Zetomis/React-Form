interface InputNumberFieldInterface {
    id: string;
    labelText: string;
    placeholder: string;
    inputState: number;
    inputSetState: React.Dispatch<React.SetStateAction<number>>;
}

const InputNumberField = ({
    id,
    labelText,
    placeholder,
    inputState,
    inputSetState,
}: InputNumberFieldInterface) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = +e.target.value;
        if (value < -1) {
            inputSetState(0);
        } else if (value > 20) {
            inputSetState(20);
        } else {
            inputSetState(value);
        }
    };

    return (
        <div className="text-black dark:text-white">
            <label className="mb-2 block" htmlFor={id}>
                {labelText}
            </label>
            <input
                id={id}
                type="number"
                placeholder={placeholder}
                className="w-full rounded border border-black bg-transparent px-4 py-2 dark:border-white"
                value={inputState}
                onChange={(e) => handleInputChange(e)}
                min={0}
                max={20}
            />
        </div>
    );
};

export default InputNumberField;
