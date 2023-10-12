import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/page.tsx" className="text-2xl font-semibold">Snowfall</Link>
        </div>
        <div className="space-x-4">
          <Link href="/seasons">Seasons</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/characters">Characters</Link>
          <Link href="/organizations">Organizations</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
