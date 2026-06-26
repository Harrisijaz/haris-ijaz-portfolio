interface BadgeProps {
  label: string
}

const Badge = ({ label }: BadgeProps) => (
  <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-100">
    {label}
  </span>
)

export default Badge
