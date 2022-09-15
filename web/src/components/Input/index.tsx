import { InputHTMLAttributes } from "react"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: IInputProps) {
    return (
        <input
            {...props}
            className="bg-zinc-900 px-3 py-4 rounded text-sm placeholder:text-zinc-500"
        />
    )
}

export default Input