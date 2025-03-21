type Props = {
  label: string;
  as?: "h1" | "h2" | "h3" | "h4";
};

export function TyHeading(props: Props) {
  const { label, as = "h1" } = props;
  const HeadingTag = as;
  const classNames = {
    h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  };

  return <HeadingTag className={classNames[as]}>{label}</HeadingTag>;
}
