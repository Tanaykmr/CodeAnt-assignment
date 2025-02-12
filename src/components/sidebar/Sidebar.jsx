import { GoChevronDown } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import call from '../../assets/call.svg';
import cloud from '../../assets/cloud.svg';
import code from '../../assets/code.svg';
import docs from '../../assets/docs.svg';
import home from '../../assets/home.svg';
import logout from '../../assets/logout.svg';
import nameLogo from '../../assets/name_logo.svg';
import settings from '../../assets/settings.svg';

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="hidden p-4 lg:flex lg:flex-col">
      <img src={nameLogo} className="mb-4" onClick={() => navigate('/login')} />
      <div className="flex h-full flex-col">
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg border p-2 px-3">
            <span className="max-w-[140px] truncate">UtkarshDhairyaPanwar</span>
            <GoChevronDown className="ml-2 h-6 w-6" />
          </div>
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
          {' '}
          <button className="duration-250 group flex w-full items-center gap-2 rounded-lg p-2 transition-all hover:-translate-y-1 hover:bg-[#1570EF] hover:text-white hover:shadow-inner">
            <img
              src={call}
              className="h-6 w-6 group-hover:brightness-0 group-hover:invert"
            />
            <span>Support</span>
          </button>{' '}
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
    </div>
  );
}
