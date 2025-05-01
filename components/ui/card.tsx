export function Card({ children, className = '' }: any) {
  return <div className={`shadow-md rounded-lg overflow-hidden ${className}`}>{children}</div>;
}
export function CardContent({ children, className = '' }: any) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
