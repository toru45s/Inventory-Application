type Props = {
  label: string;
  value: string;
};

export function TyLabel(props: Props) {
  const { label, value } = props;

  return (
    <div className="text-sm">
      <span className="text-muted-foreground">{label}:</span> {value}
    </div>
  );
}
