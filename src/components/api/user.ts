import { IForm } from '../../pages/JoinPage';
import { axiosIntestance } from './index';

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

export const axiosGetSellerSignUp = async (userData: IForm) => {
  try {
    const data = await axiosIntestance.post('/accounts/signup/', userData);
    console.log(data);
    return data;
  } catch (error) {
    console.error('axiosGetSellerSignUp', error);
  }
};

// data:
// name: "yed"
// phone_number: "01029735307"
// user_type: "BUYER"
// username: "yeeed"

//yeeeD
//12341234a
