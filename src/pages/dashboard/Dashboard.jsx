import MainApp from '../../components/mainApp/MainApp';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-1">
      <div className="flex w-60 flex-col gap-3 p-4">
        <Sidebar />
      </div>

      <div className="h-full flex-1 overflow-hidden bg-[#FAFAFA] p-4">
        <MainApp />
      </div>
    </div>
  );
}
