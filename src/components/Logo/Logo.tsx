import logoImg from '../../assets/Logo-hodu.png';

interface ILogo {
  width: string;
  height: string;
}

const Logo = ({ width, height }: ILogo) => {
  return (
    <img src={logoImg} alt='호두마켓 로고' width={width} height={height} />
  );
};

export default Logo;
