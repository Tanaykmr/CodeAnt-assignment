import { Chip } from '@mui/material';
import plus from '../../assets/plus.svg';
import refresh from '../../assets/refresh.svg';
import search from '../../assets/search.svg';
import size from '../../assets/size.svg';
import { repoList } from '../../data/repoList';

export default function MainApp() {
  const value = 33;
  return (
    <div className="h-sm flex h-full flex-col divide-y divide-gray-300 rounded-lg border bg-white">
      {/* Header Section with Search */}
      <div className="space-y-4 p-4">
        {/* Title and Actions */}
        <div className="flex items-center justify-between">
          {/* Title and Count */}
          <div>
            <h2 className="text-3xl font-bold text-[#181D27]">Repositories</h2>
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
      <div className="divide-y divide-gray-300 overflow-y-auto">
        {repoList.map((repo) => (
          <div
            key={repo.name}
            className="flex items-center pb-4 pl-4 transition-colors duration-300 ease-in-out hover:bg-[#f5f5f5]"
          >
            <div>
              <div className="flex items-center gap-3">
                <h3 className="py-2 text-xl font-normal text-[#181D27]">
                  {repo.name}
                </h3>
                {/* <span className="inline-flex items-center rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white">
                      Chip 1
                    </span> */}
                <Chip
                  label={repo.visibility}
                  size="small"
                  sx={{
                    fontSize: '0.75rem',
                    backgroundColor: '#EFF8FF',
                    width: 60,
                    color: '#175CD3',
                    fill: 'green',
                    borderWidth: '1px',
                    borderColor: '#B2DDFF',
                    borderStyle: 'solid',
                  }}
                />
              </div>

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
  );
}
