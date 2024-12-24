import Header from '../../components/header/Header';
import MainApp from '../../components/mainApp/MainApp';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex-col">
      <Header />
      <div className="flex h-screen flex-1">
        <div className="hidden gap-3 p-4 lg:flex lg:w-60 lg:flex-col">
          <Sidebar />
        </div>

        <div className="h-full flex-1 overflow-auto bg-[#FAFAFA] lg:p-4">
          <MainApp />
        </div>
      </div>
    </div>
  );
}
