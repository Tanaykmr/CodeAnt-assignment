import Header from '../../components/header/Header';
import MainApp from '../../components/mainApp/MainApp';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <Sidebar />
      <Header />
      <div
        id="main"
        className="mt-16 h-full flex-1 overflow-y-auto bg-[#FAFAFA] lg:mt-0 lg:p-4"
      >
        <MainApp />
      </div>
    </div>
  );
}
