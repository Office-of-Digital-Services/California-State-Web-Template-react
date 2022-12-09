// Sample images
import testAvatar from './components/Blockquote/blockquote-with-image.jpg';
import bannerImage from './patterns/Banner/main-banner.svg';
import featureBannerImage from './patterns/Banner/ocean.jpg';
import cardImage from './patterns/Card/card-image.jpg';
import parallaxImage1 from './components/Parallax/background-primary.jpg';
import parallaxImage2 from './components/Parallax/bg-open-data.jpg';
import parallaxImage3 from './components/Parallax/main-banner4.jpg';
import sunflower1 from './patterns/CardGrid/sunflower1.jpg';
import sunflower2 from './patterns/CardGrid/sunflower2.jpg';
import sunflower3 from './patterns/CardGrid/sunflower3.jpg';

// Components
import Accordion from './components/Accordion/Accordion';
import Alert from './components/Alert/Alert';
import Blockquote from './components/Blockquote/Blockquote';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Button from './components/Button/Button';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import TextField from './components/FormElements/TextField';
import TextArea from './components/FormElements/TextArea';
import Checkbox from './components/FormElements/Checkbox';
import RadioButton from './components/FormElements/RadioButton';
import DropdownMenu from './components/FormElements/DropdownMenu';
import FileInput from './components/FormElements/FileInput';
import HorizontalSeparator from './components/HorizontalSeparator/HorizontalSeparator';
import Lists from './components/Lists/Lists';
import Modal from './components/Modal/Modal';
import NumberCounter from './components/NumberCounter/NumberCounter';
import Parallax from './components/Parallax/Parallax';
import ProgressBar from './components/ProgressBar/ProgressBar';
import SocialMediaIcons from './components/SocialMediaIcons/SocialMediaIcons';
import Table from './components/Table/Table';
import Tabs from './components/Tabs/Tabs';

// Patterns
import Banner from './patterns/Banner/Banner';
import Card from './patterns/Card/Card';
import CardGrid from './patterns/CardGrid/CardGrid';
import LinkGrid from './patterns/LinkGrid/LinkGrid';
import ProgressTracker from './patterns/ProgressTracker/ProgressTracker';

// Structure
import UtilityHeader from './structure/Header/Header';
import SiteHeader from './structure/SiteHeader/SiteHeader';
import MobileControls from './structure/MobileControls/MobileControls';
import ActiveSearch from './structure/Search/ActiveSearch';
import InactiveSearch from './structure/Search/InactiveSearch';
import FeaturedSearch from './structure/Search/FeaturedSearch';
import SiteNavigation from './structure/SiteNavigation/SiteNavigation';
import Footer from './structure/Footer/Footer';
import GradientBackgrounds from './get-started/GradientBackgrounds/GradientBackgrounds';
import TextAccentColors from './get-started/TextAccentColors/TextAccentColors';
import IconMenu from './structure/SiteNavigation/IconMenu';

function App() {

  return (
    <>
      <div className={'main-content'} id={'main-content'}>
        <main id={'main'} className={'main-primary'}>
          <Banner
            bodyText={'Enhance your websites and applications with the latest version (V6) of the State Template using ReactJS!'}
            buttonHref={'https://github.com/Office-of-Digital-Services/California-State-Web-Template-react'}
            buttonText={'Explore code'}
            imageSrc={bannerImage}
            titleText={'Hello world!'}
          // type={'feature'}
          />
          <div style={{ background: '#cccccc' }}>
            <div className={'container p-t-lg'}>
              <CardGrid
                contentArr={[
                  {
                    bodyText: 'Body goes here',
                    icon: 'ca-gov-icon-accessibility',
                    titleText: 'Title Goes Here'
                  },
                  {
                    bodyText: 'Body goes here',
                    icon: 'ca-gov-icon-audience',
                    titleText: 'Title Goes Here'
                  },
                  {
                    bodyText: 'Body goes here',
                    icon: 'ca-gov-icon-book',
                    titleText: 'Title Goes Here'
                  }
                ]}
              />
            </div>
          </div>

        </main>
      </div>
    </>
  );
}

export default App;
