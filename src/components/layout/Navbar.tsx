import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onAboutClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const aboutDropdownTo: Record<string, string> = {
    "About Us": "/about-us",
    Feedback: "/feedback",
    Affiliations: "/about/affiliations",
    "Governing Body": "/about/governing-body",
    "Principal Message": "/about/principal-message",
    Location: "/about/location",
    Scholarship: "/about/scholarship",
  };

  const navItems = [
    { name: 'Home', path: '/' },

    {
      name: 'About',
      path: '/about',
      dropdown: [
        'About Us',
        'Feedback',
        'Governing Body',
        'Principal Message',
        'Location',
        'Scholarship',
      ],
    },

    {
      name: 'Courses',
      path: '/courses',
      dropdown: ['BCA', 'BBA', 'BCom', 'BA', 'BSc'],
    },

    {
      name: 'Admissions',
      path: '/admissions',
      dropdown: [
        'Admission Process',
        'Eligibility',
        'Application Form',
        'Documents Required',
        'Fee Details',
      ],
    },

    {
      name: 'Campus',
      path: '/campus',
      dropdown: ['Library', 'Labs', 'Hostel', 'Sports', 'Transport'],
    },

    {
      name: 'Placements',
      path: '/placements',
      dropdown: [
        'Placement Cell',
        'Recruiters Section',
        'Training Programs',
        'Placement Stats',
      ],
    },

    {
      name: 'IQAC',
      path: '/iqac',
      dropdown: ['Overview', 'Committee', 'Reports', 'Activities'],
    },

    {
      name: 'Contact',
      path: '/contact',
      dropdown: ['Contact Us', 'Location Map', 'Enquiry'],
    },
  ];

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-6">
        <NavigationMenu>
          <NavigationMenuList>

            {navItems.map((item) => (
              <NavigationMenuItem
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >

                {/* NAV ITEM */}
                <div
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md bg-transparent text-white hover:text-yellow-300 cursor-pointer",
                    isActive(item.path) && "text-yellow-300"
                  )}
                  onClick={() => {
                    setActiveDropdown(null);
                    if (item.name === 'About') {
                      onAboutClick();
                      return;
                    }
                    navigate(item.path);
                  }}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </div>

                {/* DROPDOWN */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-md border bg-white shadow-lg overflow-hidden">

                    {item.dropdown.map((sub, index) => (
                      <Link
                        key={index}
                        to={
                          item.name === 'About'
                            ? (aboutDropdownTo[sub] ?? item.path)
                            : `${item.path}/${sub.toLowerCase().replace(/\s+/g, '-')}`
                        }
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-400 hover:text-black transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}

                  </div>
                )}

              </NavigationMenuItem>
            ))}

          </NavigationMenuList>
        </NavigationMenu>

        <Button className="ml-4 bg-primary hover:bg-primary/90">
          Apply Now
        </Button>
      </div>

      {/* Mobile */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[85%] max-w-[320px] p-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;