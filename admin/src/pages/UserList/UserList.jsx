import "./List.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import UserDataTable from "../../components/UserDataTable/UserDataTable"

const UserList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UserDataTable/>
      </div>
    </div>
  )
}

export default UserList