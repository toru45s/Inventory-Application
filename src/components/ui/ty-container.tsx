type Props = {
  children: React.ReactNode;
};

export function TyContainer(props: Props) {
  const { children } = props;

  return <div className="mt-6">{children}</div>;
}
