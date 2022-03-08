import Link from "next/link";

const CustomLink = ({ text, href }) => {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  );
};

export default CustomLink;
