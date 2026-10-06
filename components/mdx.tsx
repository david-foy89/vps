import Link from "next/link";
import type { ComponentProps } from "react";

function MdxLink(props: ComponentProps<"a">) {
  const href = props.href ?? "";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className="font-semibold text-navy underline">
        {props.children}
      </Link>
    );
  }
  return <a {...props} className="font-semibold text-navy underline" rel="noopener noreferrer" />;
}

export const mdxComponents = {
  a: MdxLink,
};
