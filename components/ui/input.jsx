export function Input({ className, ...props }) {
  return (
    <input
      className={`border border-gray-500 rounded-xl px-3 py-2 bg-zinc-800 text-white ${className}`}
      {...props}
    />
  );
}
