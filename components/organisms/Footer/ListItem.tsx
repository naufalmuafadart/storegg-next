interface ListItemProps {
  href: string;
  text: string;
}

export default function ListItem(props: ListItemProps) {
  const { href, text } = props;
  return (
    <li className="mb-6">
      <a href={href} className="text-lg color-palette-1 text-decoration-none">
        { text }
      </a>
    </li>
  );
}
