import {combineReducers} from 'redux';
import menu from './menu';
import menuItem from './menuItem';
import materialUploaded from './materialUploaded';
import loadImage from './uploadImage';
import resultJump from './resultJump';
import loginJumped from './loginJumped';
import userMessageLoaded from './userMessageLoaded';
import redirectPage from './redirectPage';
import registerToLogin from './registerToLogin';
import registerErrShowed from './registerErrShowed';
import loginUserErrShowed from './loginUserErrShowed';
import userDisplayed from './userDisplayed';
import userCenterRedirectPage from './userCenterRedirectPage';
import userCenterMessageLoaded from './userCenterMessageLoaded';
import selfWorksGetted from './selfWorksGetted';
import homePage from './homePage';
const resultList = combineReducers({
  menu,
  menuItem,
  materialUploaded,
  loadImage,
  resultJump,
  loginJumped,
  userMessageLoaded,
  redirectPage,
  registerToLogin,
  registerErrShowed,
  loginUserErrShowed,
  userDisplayed,
  userCenterRedirectPage,
  userCenterMessageLoaded,
  selfWorksGetted,
  homePage
});

export default resultList;
