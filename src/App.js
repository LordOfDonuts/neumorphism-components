import './App.css';

import Calculator from './components/calculator/Calculator';
import Checkbox from './components/checkbox/Checkbox';
import ClickMeButton from './components/click-me-button/ClickMeButton';
import DigitalCock from './components/digital-clock/DigitalClock';
import GradientRing from './components/gradient-ring/GradientRing';
import BitcoinButton from './components/bitcoin-btn/BitcoinButton';
import LoginForm from './components/login-form/LoginForm';
import MovingSliders from './components/moving-sliders/MovingSliders';
import Pagination from './components/pagination/Pagination';
import ProfileCard from './components/profile-card/ProfileCard';
import Slider from './components/slider/Slider';
import LoadingCircle from './components/loading-circle/LoadingCircle';
import RadioButtons from './components/radio-btns/RadioButtons';
import SocialMediaIcons from './components/social-media-icons/SocialMediaIcons';
import AnalogClock from './components/analog-clock/AnalogClock';
import SomeCoolText from './components/some-cool-text/SomeCoolText';
import PhoneButtons from './components/phone-buttons/PhoneButtons';

function App() {
  return (
    <div className='components-grid'>
      <ProfileCard />
      <AnalogClock />
      <MovingSliders />
      <Checkbox />
      <DigitalCock />
      <ClickMeButton />
      <GradientRing />
      <Slider />
      <SocialMediaIcons />
      <RadioButtons />
      <BitcoinButton />
      <Calculator />
      <LoginForm />
      <LoadingCircle />
      <Pagination />
      <SomeCoolText />
      <PhoneButtons />
    </div>
  );
}

export default App;
