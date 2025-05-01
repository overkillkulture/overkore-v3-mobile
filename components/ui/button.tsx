export function Button({ className = '', children }: any) {
  return (
    <button className={`px-4 py-2 rounded-md font-bold text-white ${className}`}>
      {children}
    </button>
  );
}
