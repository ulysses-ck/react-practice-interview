interface Props {
  children: React.ReactNode;
}

export function Content(props: Readonly<Props>) {
  return (
    <div className="accordion-content">
      Content
      {props.children}
    </div>
  );
}
