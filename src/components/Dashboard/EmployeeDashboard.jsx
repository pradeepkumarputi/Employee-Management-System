import Header from "../other/Header.jsx";
import React from "react";
import TaskListNumber from "../other/TaskListNumber.jsx";
import TaskList from "../TaskList/TaskList.jsx";
function EmployeeDashboard() {
    return(
        <>
        <div className="p-10 bg-[#1c1c1c] h-screen">
            <Header/>
            <TaskListNumber/>
            <TaskList/>
            
        </div>
        
        </>

    );

}

export default EmployeeDashboard;