import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export function TyLink(props: Props) {
  const { href, children } = props;

  return (
    <Link
      href={href}
      className="text-primary underline-offset-4 underline hover:opacity-60"
    >
      {children}
    </Link>
  );
}
