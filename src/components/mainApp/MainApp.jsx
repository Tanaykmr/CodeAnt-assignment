import { FiPlus, FiRefreshCcw } from 'react-icons/fi';
import search from '../../assets/search.svg';
import { repoList } from '../../data/repoList';
import RepoCard from '../repoCard/repoCard';

export default function MainApp() {
  const value = repoList.length;
  return (
    <div className="flex flex-col divide-y divide-gray-300 border bg-white lg:rounded-lg">
      <div className="flex flex-col gap-3 bg-white p-4 lg:rounded-lg">
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#181D27]">Repositories</h2>
            <span className="text-sm text-[#414651]">
              {value} total repositories
            </span>
          </div>

          <div className="flex items-center gap-3 lg:p-4 lg:pb-0">
            <button className="group flex touch-manipulation items-center gap-2 rounded-lg border bg-white px-4 py-2 text-[#414651] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0.5 active:shadow-sm">
              <FiRefreshCcw className="transition-transform duration-300 [@media(hover:hover)]:group-hover:rotate-180" />
              <span>Refresh All</span>
            </button>

            <button className="group flex touch-manipulation items-center gap-1 rounded-lg bg-[#1570EF] px-4 py-2 text-white shadow-inner transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-sm">
              <FiPlus className="h-5 w-5" />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        <div
          id="searchbar"
          className="flex min-w-[30%] items-center rounded-lg border pl-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 lg:w-[30%]"
        >
          <img src={search} className="h-5 w-5" alt="Search icon" />

          <input
            type="search"
            id="search"
            className="w-full rounded-lg py-2 pl-2 focus:outline-none"
            placeholder="Search repositories..."
          />
        </div>
      </div>

      <div className="snap-y divide-y divide-gray-300 overflow-y-auto">
        {repoList.map((repo) => (
          <div
            key={repo.name}
            className="flex snap-end items-center overflow-auto pb-4 pl-4 transition-colors duration-300 ease-in-out hover:bg-[#f5f5f5]"
          >
            <RepoCard {...repo} />
          </div>
        ))}
      </div>
    </div>
  );
}
