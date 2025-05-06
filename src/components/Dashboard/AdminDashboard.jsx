import CreateTask from "../other/CreateTask.jsx";
import Header from "../other/Header.jsx";
import AllTask from "../other/AllTask.jsx";
function AdminDashboard() {
  return (
    <>
      <div className="h-screen w-full p-10">
        <Header />
        <CreateTask />
        <AllTask />
        
      </div>
    </>
  );
}

export default AdminDashboard;
