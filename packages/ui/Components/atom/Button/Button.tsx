export interface IButtonProps {
  label: string
}

export const Button = ({ label }: IButtonProps) => (
  <button className="btn btn-primary">{label}</button>
)
