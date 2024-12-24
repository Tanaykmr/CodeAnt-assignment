import Sidebar from '../../components/Sidebar/Sidebar';
import home from '../../assets/home.svg';

export default function Dashboard() {
  const value = 33;
  return (
    // mother div
    <div className="flex h-screen flex-1">
      <div className="flex w-60 flex-col gap-3 p-4">
        <Sidebar />
      </div>

      <div className="h-full flex-1 overflow-hidden bg-red-600 p-4">
        <div className="flex h-full flex-col gap-4 overflow-y-auto bg-white py-4">
          {/* the div below is the top div, containing the heading */}
          <div className="flex justify-between px-4">
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl font-bold text-[#181D27]">
                Repositories
              </span>
              <span className="text-414651 text-sm">
                {value} total repositories
              </span>
            </div>
            <div className="flex">
              <button className="group flex w-full items-center gap-2 rounded-lg p-2 hover:bg-[#1570EF] hover:text-white hover:shadow-inner">
                <img
                  src={home}
                  className="h-6 w-6 group-hover:brightness-0 group-hover:invert"
                />
                <span>Repositories</span>
              </button>{' '}
              <button className="group flex w-full items-center gap-2 rounded-lg p-2 hover:bg-[#1570EF] hover:text-white hover:shadow-inner">
                <img
                  src={home}
                  className="h-6 w-6 group-hover:brightness-0 group-hover:invert"
                />
                <span>Repositories</span>
              </button>{' '}
            </div>
          </div>
          <div>search box</div>
          <div>repoList</div>
        </div>
      </div>
    </div>
  );
}

// [#FAFAFA]
