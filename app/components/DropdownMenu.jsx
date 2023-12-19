import Link from "next/link";

const DropdownMenu = ({ href, title }) => {
  return <Link href={href}>{title}</Link>;
};

export default DropdownMenu;
