export function Card({ className, children }) {
  return <div className={`rounded-2xl border p-1 ${className}`}>{children}</div>;
}

export function CardContent({ className, children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
