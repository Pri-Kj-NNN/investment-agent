import Link from "next/link";
import { Button } from "@/components/ui/button";

type ButtonLinkProps = React.ComponentProps<typeof Button> & {
  href: string;
};

// Link として動くボタン（Base UI の nativeButton 警告を回避）
export function ButtonLink({ href, children, ...props }: ButtonLinkProps) {
  return (
    <Button nativeButton={false} render={<Link href={href} />} {...props}>
      {children}
    </Button>
  );
}
