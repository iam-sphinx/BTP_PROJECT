import Feed from "../../components/Feed";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#826da8] flex justify-center">
      <div className="max-w-[1640px] w-full h-full bg-white flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}
