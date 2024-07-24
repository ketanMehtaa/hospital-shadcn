import Link from 'next/link';
import Container from './ui/container';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const routes = [
  {
    href: '/',
    label: 'Home',
  },

  { href: '/', label: 'Book Appointment' },
  { href: '/', label: 'About us' },
  { href: '/', label: 'Locate us' },
];
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 rounded-xl			">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link key={i} href={route.href} className="block px-2 py-1 text-lg">
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className=" text-xl font-bold"> Sharda Ent Hospital</h1>
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6  lg:block hidden">
            {routes.map((route, i) => (
              <Button asChild variant="ghost" key={i}>
                <Link href={route.href} className="text-sm font-medium transition-colors">
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
