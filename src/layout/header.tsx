import { useState } from 'react';
import NotificationIcon from '@common/icons/NotificationIcon';
import MenuIcon from '@common/icons/MenuIcon';
import ChatIcon from '@common/icons/ChatIcon';
import FriendsRequestIcon from '@common/icons/FriendsRequestIcon';
import LanguageSelector from '../components/language-selector';
import ThemeToggler from '../components/themeToggle';
import LogoIcon from '@library/common/icons/Logo';

const Header = () => {
  const [showProfileDropDown, toggleProfileDropDown] = useState(false);
  const [showMobileMenu, toggleMobileMenu] = useState(false);

  const toggleProfile = () => {
    toggleProfileDropDown(!showProfileDropDown);
  };

  return (
    <div>
      <header className="bg-white shadow dark:bg-gray-850">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="hidden:dark">
                  <LogoIcon />
                </div>
              </div>
              <LanguageSelector />
              <ThemeToggler />
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button className="p-1 rounded-full px-3">
                  <span className="sr-only">View Friend Request</span>
                  {FriendsRequestIcon}
                </button>
                <button className="p-1 rounded-full px-3">
                  <span className="sr-only">Chats</span>
                  {ChatIcon}
                </button>
                <button className="p-1 rounded-full px-3">
                  <span className="sr-only">View notifications</span>
                  {NotificationIcon}
                </button>
                {/* <!-- Profile dropdown --> */}
                <div className="ml-3 relative">
                  <div>
                    <button
                      type="button"
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={toggleProfile}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://res.cloudinary.com/dxp35xvh8/image/upload/f_auto,q_auto:eco/v1618135767/square_friends/53d712c7ca01262e08c8afff4c2bcefe_wpxueb.png"
                        alt=""
                      />
                    </button>
                  </div>
                  {showProfileDropDown && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a href="#/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Your Profile
                      </a>

                      <a href="#/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Settings
                      </a>

                      <a href="#/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Sign out
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                type="button"
                className="dark:bg-gray-850 inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => toggleMobileMenu(!showMobileMenu)}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon menuState={showMobileMenu} />
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {showMobileMenu && (
          <div className="md:hidden" id="mobile-menu">
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <button className="flex items-center" onClick={toggleProfile}>
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://res.cloudinary.com/dxp35xvh8/image/upload/f_auto,q_auto:eco/v1618135767/square_friends/53d712c7ca01262e08c8afff4c2bcefe_wpxueb.png"
                      alt="User Profile"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">Tom Example</div>
                    <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                  </div>
                </button>
                <button className="ml-auto dark:bg-gray-850 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View Friend Request</span>
                  {FriendsRequestIcon}
                </button>
                <button className="ml-auto dark:bg-gray-850 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Chats</span>
                  {ChatIcon}
                </button>
                <button className="ml-auto dark:bg-gray-850 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  {NotificationIcon}
                </button>
              </div>
              {showProfileDropDown && (
                <div className="mt-3 px-2 space-y-1">
                  <a
                    href="#/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Settings
                  </a>
                  <a
                    href="#/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
