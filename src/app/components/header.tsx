import Link from "next/link";

export function Header() {
  return (
    <nav className="max-w-7xl m-auto w-full ">
      <div
        className="flex justify-between items-center gap-8 py-4 text-black relative shadow-sm"
        role="navigation"
      >
        <Link href={"/"} className="text-2xl font-semibold hover:opacity-80">
          Logo
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href={"#features"}
            className="text-sm font-medium hover:opacity-80"
          >
            Features
          </Link>
          <Link
            href={"#pricing"}
            className="text-sm font-medium hover:opacity-80"
          >
            Pricing
          </Link>
          <Link
            href={"#dashboard"}
            className="text-sm font-medium text-white bg-black px-4 py-2 rounded-lg hover:opacity-80"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
