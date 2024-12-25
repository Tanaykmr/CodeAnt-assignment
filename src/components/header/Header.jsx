import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import call from '../../assets/call.svg';
import cloud from '../../assets/cloud.svg';
import code from '../../assets/code.svg';
import docs from '../../assets/docs.svg';
import home from '../../assets/home.svg';
import logout from '../../assets/logout.svg';
import nameLogo from '../../assets/name_logo.svg';
import settings from '../../assets/settings.svg';

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onClickMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div id="header" className="fixed w-full lg:hidden">
      <div
        className={`flex flex-row items-center justify-between ${!isMenuOpen ? 'border-b border-gray-300' : ''} bg-white p-4`}
      >
        <img src={nameLogo} onClick={() => navigate('/login')} alt="logo" />
        <button onClick={onClickMenu}>
          {isMenuOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <RxHamburgerMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <>
          <div className="bg-white px-4 pb-2">
            <div className="flex rounded-lg border px-3 py-2 shadow-md-all-sides">
              <span className="w-full truncate">UtkarshDhairyaPanwar</span>
              <GoChevronDown className="h-6 w-6" />
            </div>
            <div className="mt-4">
              <button className="duration-250 group flex w-full items-center gap-2 rounded-lg p-2 transition-all hover:-translate-y-1 hover:bg-[#1570EF] hover:text-white hover:shadow-inner">
                <img
                  src={home}
                  className="h-6 w-6 group-hover:brightness-0 group-hover:invert"
                />
                <span>Repositories</span>
              </button>
              <button className="duration-250 group flex w-full items-center gap-2 rounded-lg p-2 transition-all hover:-translate-y-1 hover:bg-[#1570EF] hover:text-white hover:shadow-inner">
                <img
                  src={code}
                  className="h-6 w-6 group-hover:brightness-0 group-hover:invert"
                />
                <span>AI Code Review </span>
              </button>
              <button className="duration-250 group flex w-full items-center gap-2 rounded-lg p-2 transition-all hover:-translate-y-1 hover:bg-[#1570EF] hover:text-white hover:shadow-inner">
                <img
                  src={cloud}
                  className="h-6 w-6 group-hover:brightness-0 group-hover:invert"
                />
                <span>Cloud Security</span>
              </button>
              <button className="duration-250 group flex w-full items-center gap-2 rounded-lg p-2 transition-all hover:-translate-y-1 hover:bg-[#1570EF] hover:text-white hover:shadow-inner">
                <img
                  src={docs}
                  className="h-6 w-6 group-hover:brightness-0 group-hover:invert"
                />
                <span>How to Use</span>
              </button>
              <button className="duration-250 group flex w-full items-center gap-2 rounded-lg p-2 transition-all hover:-translate-y-1 hover:bg-[#1570EF] hover:text-white hover:shadow-inner">
                <img
                  src={settings}
                  className="h-6 w-6 group-hover:brightness-0 group-hover:invert"
                />
                <span>Settings</span>
              </button>
            </div>

            <div className="mt-auto">
              <button className="duration-250 group flex w-full items-center gap-2 rounded-lg p-2 transition-all hover:-translate-y-1 hover:bg-[#1570EF] hover:text-white hover:shadow-inner">
                <img
                  src={call}
                  className="h-6 w-6 group-hover:brightness-0 group-hover:invert"
                />
                <span>Support</span>
              </button>
              <button
                className="duration-250 group flex w-full items-center gap-2 rounded-lg p-2 transition-all hover:-translate-y-1 hover:bg-[#1570EF] hover:text-white hover:shadow-inner"
                onClick={() => navigate('/login')}
              >
                <img
                  src={logout}
                  className="h-6 w-6 group-hover:brightness-0 group-hover:invert"
                />
                <span>Logout</span>
              </button>
            </div>
          </div>
          <div
            className="h-screen w-full bg-[#6C6C6C] opacity-30"
            onClick={onClickMenu}
          ></div>
        </>
      )}
    </div>
  );
}
