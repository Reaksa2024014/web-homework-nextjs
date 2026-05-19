
import Link from "next/link";

export function NavbarComponent() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="https://i.pinimg.com/736x/2e/66/2c/2e662cc292f54417fed29c630580344e.jpg" className="h-8 w-8" alt="Logo" />
        <span className="text-xl font-bold text-gray-800">My Store</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/product" className="hover:text-blue-600">Products</Link>
        <Link href="/cart" className="hover:text-blue-600">Cart</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}
