//react imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//shoaib imports
import NoticeBoard from './NoticeDir/Notice-board';
import NoticeDetail from './NoticeDir/NoticeDetail';
import StaffHome from './Staff/StaffHome';
import CreateNotice from './Staff/CreateNotice';
import DeleteNotice from './NoticeDir/DeleteNotice';
import UpdateNotice from './NoticeDir/UpdateNotice';
//sehar imports
import NavBar from './RegistrationDir/NavBar';
import LoginForm from './RegistrationDir/LoginForm';
import Registerform from './RegistrationDir/Registerform';
import Firstpage from './RegistrationDir/Firstpage';
import ForgotPassword from './RegistrationDir/ForgotPassword';
import HomePage from './RegistrationDir/HomePage';
//imran imports
import Clearance from './ClearanceDir/Clearnce';
import StaffClear from './Staff/staffClearance';
import Reason from './Staff/Reason';

//ameena & maham imports
import HomeTradingSharing from './TradingAndSharingDir/HomeTradingSharing';
import Create from './TradingAndSharingDir/Create';
import NotFound from './TradingAndSharingDir/NotFound';
import TSPsotDetails from './TradingAndSharingDir/TSPostDetails';
import HomeLostFound from './LostAndFoundDir/HomeLostFound';
import LSPostDetails from './LostAndFoundDir/LSPostDetails';
import HomeTripsEvents from './TripsDir/HomeTripsEvents';
import TEPostList from './TripsDir/TEPostDetails';

//
//
//
//Admin imports

//Sehar
import SHAdminUnderNav from './Admin/SH-AdminUnderNav';
import SHNavBarAdmin from './Admin/SH-NavBarAdmin';
import SHAddNewNotice from './Admin/SH-AddNewNotice';
import UpdateAdminNotice from './Admin/SH-NoticeEdit';
import DeleteAdminNotice from './Admin/SH-DeleteNotice';

//Maham
import MahNavbar from './Admin/MahNavbar';
import TEPostListAdmin from './Admin/TEPostListAdmin';
import TSPostListAdmin from './Admin/TSPostListAdmin';
import LFPostListAdmin from './Admin/LFPostListAdmin';

//Ameena
import AdminUserList from './Admin/AdminUserList';
import AdminUserCreate from './Admin/AdminUserCreate';
import AUserNavbar from './Admin/AUserNavbar';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Sehar routes */}
        <Switch>
          <Route exact path="/">
            <Firstpage></Firstpage>
          </Route>

          <Route exact path="/Home">
            <HomePage></HomePage>
          </Route>

          <Route exact path="/forgot">
            <ForgotPassword></ForgotPassword>
          </Route>

          <Route exact path="/login">
            <LoginForm></LoginForm>
          </Route>

          <Route exact path="/forgot">
            <NavBar></NavBar>
          </Route>

          <Route exact path="/login">
            <NavBar></NavBar>
          </Route>

          <Route exact path="/register">
            <Registerform />
          </Route>

          {/* Shoaib routes */}
          <Route path="/notice-board">
            <NoticeBoard />
          </Route>
          <Route path="/notices/:id/:user">
            <NoticeDetail />
          </Route>
          <Route path="/delete/:id">
            <DeleteNotice />
          </Route>
          <Route path="/update/:id">
            <UpdateNotice />
          </Route>
          <Route path="/StaffHome">
            <StaffHome></StaffHome>
          </Route>
          <Route path="/CreateNotice">
            <CreateNotice></CreateNotice>
          </Route>

          {/* Imran routes */}
          <Route path="/Clearance">
            <Clearance />
          </Route>
          <Route path="/StaffClearance">
            <StaffClear />
          </Route>
          <Route path="/Reason">
            <Reason />
          </Route>

          {/* Ameena & Maham routes */}
          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/HomeTradingSharing">
            <HomeTradingSharing />
          </Route>
          <Route path="/NotFound">
            <NotFound />
          </Route>
          <Route path="/tsblogs/:id">
            <TSPsotDetails />
          </Route>
          <Route path="/HomeLostFound">
            <HomeLostFound />
          </Route>
          <Route path="/lfblogs/:id">
            <LSPostDetails />
          </Route>
          <Route path="/HomeTripsEvents">
            <HomeTripsEvents />
          </Route>
          <Route path="/teblogs/:id">
            <TEPostList />
          </Route>
        </Switch>



        {/* Admin Routes */}

        <Switch>

          {/* Saher Admin Notice Handler */}
          <Route path="/admin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
              <div className="SH-Admin-home-content">
                <SHAdminUnderNav></SHAdminUnderNav>
              </div>
            </div>
          </Route>
          <Route path="/CreateNoticeAdmin">
            <SHAddNewNotice></SHAddNewNotice>
          </Route>
          <Route path="/editNotice/:id">
           <UpdateAdminNotice></UpdateAdminNotice>
          </Route>
          <Route path="/deleteNotice/:id">
            <DeleteAdminNotice></DeleteAdminNotice>
          </Route>

          {/* Maham Admin Post Handler */}
          <Route path="/tepostListAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <MahNavbar></MahNavbar>
            <TEPostListAdmin />
          </Route>

          <Route path="/tspostListAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <MahNavbar></MahNavbar>
            <TSPostListAdmin />
          </Route>

          <Route path="/lfpostListAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <MahNavbar></MahNavbar>
            <LFPostListAdmin />
          </Route>

          {/* Ameena Admin User Handler */}
          <Route path="/adminUserLists">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <AUserNavbar></AUserNavbar>
            <AdminUserList />
          </Route>

          <Route path="/createUserByAdmin">
            <div className="Navbar">
              <SHNavBarAdmin></SHNavBarAdmin>
            </div>
            <AUserNavbar></AUserNavbar>
            <AdminUserCreate />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;


