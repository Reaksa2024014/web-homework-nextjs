
export function FooterComponent() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 mt-auto">
      <span>© 2024 My Store™</span>
      <div className="flex gap-4 mt-2 md:mt-0">
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
        <a href="#" className="hover:text-blue-600">Licensing</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </div>
    </footer>
  );
}
