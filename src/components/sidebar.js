import Users from './Users';
import './sidebar.css'

function SideBar() {

  return (
    <div className="sidebar">
      <h4>This is the sidebar</h4>
      <p>Users will appear here</p>
      <Users />
    </div>
  );
}

export default SideBar;
