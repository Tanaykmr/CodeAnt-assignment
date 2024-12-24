import { repoList } from '../../../repoList';
import plus from '../../assets/plus.svg';
import refresh from '../../assets/refresh.svg';
import search from '../../assets/search.svg';
import size from '../../assets/size.svg';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Dashboard() {
  const value = 33;
  return (
    // mother div

    <div className="flex h-screen flex-1">
      <div className="flex w-60 flex-col gap-3 p-4">
        <Sidebar />
      </div>

      <div className="h-full flex-1 overflow-hidden bg-[#FAFAFA] p-4">
        <div className="flex h-full flex-col divide-y divide-gray-300 rounded-lg border bg-white shadow-sm">
          {/* Header Section with Search */}
          <div className="space-y-4 p-4">
            {/* Title and Actions */}
            <div className="flex items-center justify-between">
              {/* Title and Count */}
              <div>
                <h2 className="text-3xl font-bold text-[#181D27]">
                  Repositories
                </h2>
                <span className="text-sm text-[#414651]">
                  {value} total repositories
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="group flex items-center gap-2 rounded-lg border px-4 py-1 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                  <img
                    src={refresh}
                    className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180"
                  />
                  <span>Refresh All</span>
                </button>

                <button className="group flex items-center gap-2 rounded-lg bg-[#1570EF] px-4 py-1 text-white shadow-inner transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
                  <img src={plus} className="h-4 w-4 brightness-0 invert" />
                  <span>Add Repository</span>
                </button>
              </div>
            </div>

            {/* Search Box */}
            <div className="w-[30%]">
              <div className="relative">
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
                  className="w-full rounded-lg border py-2 pl-10 pr-3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search repositories..."
                />
              </div>
            </div>
          </div>

          {/* Repository List */}
          <div className="divide-y divide-gray-300">
            {repoList.map((repo) => (
              <div
                key={repo.name}
                className="flex items-center p-4 transition-colors duration-300 ease-in-out hover:bg-[#f5f5f5]"
              >
                <div>
                  <h3 className="text-xl font-normal text-[#181D27]">
                    {repo.name}
                  </h3>
                  <div className="flex gap-9">
                    <span className="flex items-center gap-1 text-sm text-[#414651]">
                      {repo.type}
                      <span className="ml-1 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                    </span>
                    <span className="flex items-center gap-2 text-sm text-[#414651]">
                      <img src={size} className="h-4 w-4" /> {repo.size}
                    </span>
                    <span className="text-sm text-[#414651]">
                      Updated {repo.updatedAt}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// [#FAFAFA]
