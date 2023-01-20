interface ListHeaderProps {
  text: string;
}

export default function ListHeader(props: ListHeaderProps) {
  const { text } = props;
  return <p className="text-lg fw-semibold color-palette-1 mb-12">{ text }</p>;
}
