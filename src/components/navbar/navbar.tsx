import { getServerSession } from 'next-auth';

import { LanguageSwitcher } from './language-switcher';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import { Icons } from '@/components/icons';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { SignInButton } from '@/components/navbar/sign-in-button';
import { UserDropdown } from '@/components/navbar/user-dropdown';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n';

export const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-mygrey w-full border-b">
      <MaxWidthWrapper>
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="z-40 flex font-mono text-lg font-bold">
            Rł<span className="text-myorange">Co</span>
          </Link>
          <div>
            <div className="flex items-center gap-2 space-x-10">
              <Icons.calendarHeart />
              <Icons.layoutDashboard />
              {session ? <UserDropdown session={session} /> : <SignInButton />}
            </div>
          </div>
          <div className="flex items-center gap-2 space-x-6">
            <h1 className="text-m font-bold">Contact Us</h1>
            <LanguageSwitcher />
            <Button variant="secondary" size="icon" className="rounded-full">
              <Icons.slidersVertical />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
