interface Props {
  children: React.ReactNode;
}

export function Header(props: Readonly<Props>) {
  return <h1>{props.children}</h1>;
}
