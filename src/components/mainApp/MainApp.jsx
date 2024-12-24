import plus from '../../assets/plus.svg';
import refresh from '../../assets/refresh.svg';
import search from '../../assets/search.svg';
import { repoList } from '../../data/repoList';
import RepoCard from '../repoCard/repoCard';

export default function MainApp() {
  const value = repoList.length;
  return (
    <div className="flex flex-col divide-y divide-gray-300 border bg-white lg:rounded-lg">
      <div className="flex flex-col gap-3 bg-white p-4 lg:rounded-lg">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#181D27]">Repositories</h2>
            <span className="text-sm text-[#414651]">
              {value} total repositories
            </span>
          </div>

          <div className="mt-3 flex gap-3">
            <button className="group flex min-h-[44px] touch-manipulation items-center gap-2 rounded-lg border bg-white px-4 py-2 shadow-md transition-all duration-200 active:translate-y-0.5 active:shadow-sm [@media(hover:hover)]:hover:-translate-y-0.5 [@media(hover:hover)]:hover:shadow-lg">
              <img
                src={refresh}
                className="h-4 w-4 transition-transform duration-300 [@media(hover:hover)]:group-hover:rotate-180"
              />
              <span>Refresh All</span>
            </button>

            <button className="group flex touch-manipulation items-center gap-2 rounded-lg bg-[#1570EF] px-4 py-1 text-white shadow-inner transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-sm">
              <img src={plus} className="h-4 w-4 brightness-0 invert" />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        <div id="123" className="relative min-w-[30%] lg:w-[30%]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <img
              src={search}
              className="h-5 w-5 text-gray-400"
              alt="Search icon"
            />
          </div>
          <input
            type="search"
            id="search"
            className="w-full rounded-lg border py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search repositories..."
          />
          {/* </div> */}
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
