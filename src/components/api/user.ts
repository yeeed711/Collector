import { IForm } from '../../pages/JoinPage';
import { ILoginForm } from '../../pages/LoginPages';
import { axiosIntestance } from './index';

// 사용자아이디 중복체크
export const axiosUserNameCheck = async (username: string) => {
  try {
    const { data } = await axiosIntestance.post(
      '/accounts/signup/valid/username/',
      {
        username: username,
      },
    );
    return data;
  } catch (error) {
    console.error('axiosUserNameCheck', error);
  }
};

// 구매자 회원가입
export const axiosPostSellerSignUp = async (userData: IForm) => {
  try {
    const data = await axiosIntestance.post('/accounts/signup/', userData);
    console.log(data);
    return data;
  } catch (error) {
    console.error('axiosPostSellerSignUp', error);
  }
};

// 구매자 로그인
export const axiosPostSellerSignIn = async (userData: ILoginForm) => {
  try {
    const data = await axiosIntestance.post('/accounts/login/', userData);
    console.log(data);
    return data;
  } catch (error) {
    console.log('axiosPostSellerSignIn', error);
  }
};

// data:
// name: "yed"
// phone_number: "01029735307"
// user_type: "BUYER"
// username: "yeeed"

//yeeeD
//12341234a
