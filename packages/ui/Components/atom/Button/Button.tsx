export interface IButtonProps {
  label: string
}

export const Button = ({ label }: IButtonProps) => (
  <button className="btn bg-red-600">{label}</button>
)
