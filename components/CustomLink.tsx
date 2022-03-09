import { CSSProperties, FC } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";


const style: CSSProperties = {
  color: "#a00",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}

const CustomLink: FC<Props> = ({ text, href }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a style={href === pathname ? style : undefined}>{text}</a>
    </Link>
  );
};

export default CustomLink;
