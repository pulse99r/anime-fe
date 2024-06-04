import './main-page.css'
import SideBar from '../sidebar.js'
import Main from '../main.js'

function MainPage() {

  return (
    <div className="main-page">
      <div className='main-page__header'>
        <h1>Main Page</h1>
        <h3>This will show users and Animes</h3>
      </div>
      <div classNames="main-page__content">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default MainPage;
