import Link from "next/link";

const navItems = [
  { href: "/", label: "ダッシュボード" },
  { href: "/portfolio", label: "ポートフォリオ" },
  { href: "/monthly-plan", label: "月次計画" },
];

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 p-4">
        <Link href="/" className="text-lg font-semibold">
          Investment Agent
        </Link>
        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
