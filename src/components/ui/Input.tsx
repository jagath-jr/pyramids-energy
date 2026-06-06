interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="font-semibold text-gray-700">{label}</label>}
      <input
        className={`border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
