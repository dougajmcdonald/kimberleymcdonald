import Link from "next/link"

const Logo = () => (
  <section className="flex flex-col justify-center text-xl">
    Kimberley McDonald
  </section>
)

const NavItem = ({ children }) => (
  <li className="bg-slate-800 flex flex-col justify-center text-slate-200 px-4 mx-2">
    {children}
  </li>
)

export default function Navigation() {
  return (
    <nav className="w-full flex flex-row justify-between bg-white h-12 px-16">
      <Logo />
      <ul className="flex flex-row">
        <NavItem>
          <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link href="/shop">Shop</Link>
        </NavItem>
        <NavItem>
          <Link href="/about">About</Link>
        </NavItem>
      </ul>
    </nav>
  )
}
