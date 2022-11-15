// Sample images
import testAvatar from './components/Blockquote/blockquote-with-image.jpg';
import bannerImage from './patterns/Banner/main-banner10.jpg';
import featureBannerImage from './patterns/Banner/ocean.jpg';
import cardImage from './patterns/Card/card-image.jpg';

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
import BasicTable from './components/Table/BasicTable';
import ShadedTable from './components/Table/ShadedTable';
import ZebraTable from './components/Table/ZebraTable';
import Tabs from './components/Tabs/Tabs';

// Patterns
import FullSpanBanner from './patterns/Banner/FullSpanBanner';
import FeatureBanner from './patterns/Banner/FeatureBanner';
import Card from './patterns/Card/Card';
import BasicCardGrid from './patterns/CardGrid/BasicCardGrid';
import NewsGrid from './patterns/CardGrid/NewsGrid';
import ImageryGrid from './patterns/CardGrid/ImageryGrid';
import LinkGrid from './patterns/LinkGrid/LinkGrid';
import HorizontalTracker from './patterns/ProgressTracker/HorizontalTracker';
import VerticalTracker from './patterns/ProgressTracker/VerticalTracker';
import StepList from './patterns/ProgressTracker/StepList';

// Structure
import UtilityHeader from './structure/UtilityHeader/UtilityHeader';
import SiteHeader from './structure/SiteHeader/SiteHeader';
import MobileControls from './structure/MobileControls/MobileControls';
import ActiveSearch from './structure/Search/ActiveSearch';
import InactiveSearch from './structure/Search/InactiveSearch';
import FeaturedSearch from './structure/Search/FeaturedSearch';
import SingleLevelMenu from './structure/SiteNavigation/SingleLevelMenu';
import NavigationDropdownMenu from './structure/SiteNavigation/NavigationDropdownMenu';
import Megamenu from './structure/SiteNavigation/Megamenu';
import Footer from './structure/Footer/Footer';
import GradientBackgrounds from './get-started/GradientBackgrounds/GradientBackgrounds';
import TextAccentColors from './get-started/TextAccentColors/TextAccentColors';

import './js/cagov/tabs';

function App() {
  return (
    <>
      <h1>Components</h1>
      <h2>Accordion</h2>
      <div>
        <h3>Basic Accordion</h3>
        <Accordion
          summaryStr={'Here is a summary'}
          bodyArr={['Here is some text for body #1', 'Here is more text for another paragraph']}
        />
      </div>
      <div>
        <h3>Accordion List</h3>
        <Accordion
          type={'list'}
          contentObj={[{
            heading: 'Item 1',
            content: 'Content for item 1'
          },
          {
            heading: 'Item 2',
            content: 'Content for item 2'
          }
          ]}
        />
      </div>
      <hr />
      <h2>Alert</h2>
      <div>
        <Alert
          alertLevel={'info'}
          alertText={'We\'ve made some changes that might impact your experience.'}
          buttonHref={'https://google.com'}
          buttonText={'Learn more'}
        />
        <Alert
          alertLevel={'warning'}
          alertText={'Your browser is outdated. Your experience may be degraded.'}
          buttonHref={'https://google.com'}
          buttonText={'More information'}
        />
        <Alert
          alertLevel={'danger'}
          alertText={'Your browser is currently not supported.'}
          buttonHref={'https://google.com'}
          buttonText={'Learn more'}
        />
        <Alert
          alertLevel={'success'}
          alertText={'Well done! Your form has been submitted successfully.'}
        />
        <Alert
          alertLevel={'severe'}
          alertText={'Lots of RAIN!'}
          buttonHref={'https://google.com'}
          buttonText={'Go to Google'}
        />
      </div>
      <hr />
      <h2>Blockquote</h2>
      <div>
        <h3>Basic Blockquote</h3>
        <h4>With graphic</h4>
        <Blockquote
          withGraphic={true}
          quote={'Good quotes help to tell a story and enhance the credibility of a press release, news story, or speech. Words that are crafted well can leave a lasting impact on the world.'}
          author={'Holly Zuluaga'}
        />
        <h4>Without graphic</h4>
        <Blockquote
          withGraphic={false}
          quote={'Good quotes help to tell a story and enhance the credibility of a press release, news story, or speech. Words that are crafted well can leave a lasting impact on the world.'}
          author={'Holly Zuluaga'}
        />
        <h3>Blockquote with Image</h3>
        <Blockquote
          imageSrc={testAvatar}
          altText={'Person\'s face'}
          quote={'You can pair a block quote with the image of related content or the author of the quote.'}
          author={'Author'}
        />
        <h3>Pull Quote</h3>
        <Blockquote
          withPulledQuote={true}
          quote={'Good quotes help to tell a story and enhance the credibility of a press release, news story, or speech. Words that are crafted well can leave a lasting impact on the world.'}
          author={'Holly Zuluaga'}
        />
        <h3>Prominent Blockquote</h3>
        <Blockquote
          isProminent={true}
          quote={'Good quotes help to tell a story and enhance the credibility of a press release, news story, or speech. Words that are crafted well can leave a lasting impact on the world.'}
          author={'Holly Zuluaga'}
        />
      </div>
      <hr />
      <h2>Breadcrumb</h2>
      <div>
        <Breadcrumb
          breadcrumbArr={[
            {
              href: '#',
              title: 'Breadcrumb 1'
            },
            {
              href: '#',
              title: 'Breadcrumb 2'
            }
          ]}
          currentPage={'Current Page'}
        />
      </div>
      <hr />
      <h2>Button</h2>
      <div>
        <div className="btn-row p-b">
          <Button
            buttonText={'Primary color'}
            buttonType={'primary'}
          />
          <Button
            buttonText={'Highlight color'}
            buttonType={'highlight'}
          />
          <Button
            buttonText={'Standout color'}
            buttonType={'standout'}
          />
        </div>
        <div className="btn-row p-b">
          <Button
            buttonText={'Primary color'}
            buttonType={'outline-primary'}
            href={'#'}
          />
          <Button
            buttonText={'Highlight color'}
            buttonType={'outline-highlight'}
            href={'#'}
          />
          <Button
            buttonText={'Standout color'}
            buttonType={'outline-standout'}
            href={'#'}
          />
        </div>
        <div className="btn-row p-b">
          <Button
            buttonText={'Primary color'}
            buttonType={'outline-primary'}
            href={'#'}
            disabled={true}
          />
          <Button
            buttonText={'Highlight color'}
            buttonType={'outline-highlight'}
            href={'#'}
            disabled={true}
          />
          <Button
            buttonText={'Standout color'}
            buttonType={'outline-standout'}
            href={'#'}
            disabled={true}
          />
        </div>
        <div className="btn-row m-b-lg">
          <Button
            buttonSize={'lg'}
            buttonText={'large'}
            buttonType={'default'}
            href={'#'}
          />
          <Button
            buttonText={'default'}
            buttonType={'default'}
            href={'#'}
          />
          <Button
            buttonSize={'sm'}
            buttonText={'small'}
            buttonType={'default'}
            href={'#'}
          />
          <Button
            buttonSize={'xs'}
            buttonText={'extra small'}
            buttonType={'default'}
            href={'#'}
          />
        </div>
      </div>
      <hr />
      <h2>Countdown Timer</h2>
      <div>
        <CountdownTimer
          dateStr={'Jan 1, 2023 00:00:00'}
          isDefaultColor={false}
        />
      </div>
      <hr />
      <h2>Form Elements</h2>
      <div>
        <form action="">
          <TextField id={'InputName'} placeholder={'Name'} labelText={'Full Name'} isRequired={false} />
          <TextArea
            id={'exampleInputComment'}
            isRequired={true}
            subText={'Use this space for error messages or instructional text'}
            labelText={'Your message'}
          />
          <Checkbox
            id={'exampleCheckbox1'}
            checkboxText={'Option 1'}
            checkboxValue={'1'}
          />
          <Checkbox
            id={'exampleCheckbox2'}
            checkboxText={'Option 2'}
            checkboxValue={'2'}
          />
          <Checkbox
            id={'exampleCheckbox3'}
            checkboxText={'Option 3'}
            checkboxValue={'3'}
          />
          <RadioButton
            id={'exampleRadio1'}
            radioName={'test_group'}
            radioText={'Option 1'}
            radioValue={'1'}
          />
          <RadioButton
            id={'exampleRadio2'}
            radioName={'test_group'}
            radioText={'Option 2'}
            radioValue={'2'}
          />
          <RadioButton
            id={'exampleRadio3'}
            radioName={'test_group'}
            radioText={'Option 3'}
            radioValue={'3'}
          />
          <DropdownMenu
            id={'test_dropdown'}
            labelText={'Custom select'}
            optionsArr={[{ text: 'Option 1', value: '1' }, { text: 'Option 2', value: '2' }, { text: 'Option 3', value: '3' }]}
          />
          <FileInput
            id={'test_file_input'}
            labelText={'Upload your file'}
            feedbactText={'Feedback text.'}
          />
        </form>
      </div>
      <h2>Horizontal Separator</h2>
      <div>
        <p>Default</p>
        <HorizontalSeparator />
        <p>Dotted</p>
        <HorizontalSeparator isDotted={true} />
      </div>
      <hr />
      <h2>Lists</h2>
      <div>
        <Lists
          itemsArr={['List your first unrelated item here.', 'Continue your list of unrelated items.', 'Continue your list of unrelated items.']}
        />
        <Lists
          type={'ordered'}
          itemsArr={['List step 1 of your process.', 'List the second step of your process.', 'List the third step of your process.']}
        />
      </div>
      <hr />
      <div>
        <h2>Modal</h2>
        <button type="button" className="btn btn-default btn-lg m-t-lg" data-bs-toggle="modal" data-bs-target="#modal">Open modal</button>
        <Modal headingText={'This is the modal container\'s heading'} bodyText={'This is the modal container\'s body'} />
      </div>
      <hr />
      <div>
        <h2>Number Counter</h2>
        <NumberCounter targetNumber={300} />
      </div>
      <hr />
      <div>
        <h2>Parallax</h2>
        <Parallax />
      </div>
      <hr />
      <div>
        <h2>Progress Bar</h2>
        <ProgressBar percentComplete={98} />
      </div>
      <hr />
      <div>
        <h2>Social Media Icons</h2>
        <SocialMediaIcons
          contentArr={[
            {
              type: 'facebook',
              href: 'https://www.facebook.com/'
            },
            {
              type: 'github',
              href: 'https://www.github.com/'
            },
            {
              type: 'twitter',
              href: 'https://www.twitter.com/'
            },
            {
              type: 'youtube',
              href: 'https://www.youtube.com/'
            },
            {
              type: 'linkedin',
              href: 'https://www.linkedin.com/'
            },
            {
              type: 'instagram',
              href: 'https://www.instagram.com/'
            },
            {
              type: 'email',
              href: 'mailto:your_email@ca.gov'
            }
          ]}
        />
      </div>
      <hr />
      <div>
        <h2>Table</h2>
        <Table
          headerArr={['#', 'First Name', 'Last Name', 'Username']}
          rowArr={[['1', 'Mark', 'Otto', '@mdo'], ['2', 'Jacob', 'Thornton', '@jthornton'], ['3', 'Larry', 'the Bird', '@twitter']]}
        />
        <Table
          type={'shaded'}
          headerArr={['#', 'First Name', 'Last Name', 'Username']}
          rowArr={[['1', 'Mark', 'Otto', '@mdo'], ['2', 'Jacob', 'Thornton', '@jthornton'], ['3', 'Larry', 'the Bird', '@twitter']]}
        />
        <Table
          type={'zebra'}
          headerArr={['#', 'First Name', 'Last Name', 'Username']}
          rowArr={[['1', 'Mark', 'Otto', '@mdo'], ['2', 'Jacob', 'Thornton', '@jthornton'], ['3', 'Larry', 'the Bird', '@twitter']]}
        />
      </div>
      <hr />
      <div>
        <h2>Tabs</h2>
        <Tabs />
      </div>
      <hr />
      <div>
        <h1>Patterns</h1>
        <h2>Banner</h2>
        <FullSpanBanner
          titleText={'Title'}
          bodyText={'Highlight an action you want people to take or important information on the homepage.'}
          buttonText={'Short link'}
          imageSrc={bannerImage}
        />
        <FeatureBanner
          titleText={'Title'}
          bodyText={'Highlight an action you want people to take or important information on the homepage.'}
          buttonText={'Short link'}
          imageSrc={featureBannerImage}
        />
      </div>
      <hr />
      <div className={'col-md-2'}>
        <h2>Card</h2>
        <Card
          titleText={'Give your card a short title'}
          bodyText={'Use this space to briefly tell your reader what they will find at the card\'s destination'}
          imageSrc={cardImage}
          altText={'Card size'}
        />
      </div>
      <hr />
      <div>
        <h2>Card Grid</h2>
        <BasicCardGrid />
        <NewsGrid />
        <ImageryGrid />
        <LinkGrid linkArr={[{ href: '#', linkText: 'Short link 1' }, { href: '#', linkText: 'Short link 2' }, { href: '#', linkText: 'Short link 3' }]} />
      </div>
      <hr />
      <div>
        <h2>Progress Tracker</h2>
        <HorizontalTracker />
        <VerticalTracker />
        <StepList />
      </div>
      <hr />
      <div>
        <h1>Structural Elements</h1>
        <div>
          <h2>Utility Header</h2>
          <UtilityHeader />
        </div>
        <div>
          <h2>Site Header</h2>
          <SiteHeader stateText={'State of California'} departmentText={'Web Template'} />
        </div>
        <div>
          <h2>Mobile Controls</h2>
          <MobileControls />
        </div>
        <div>
          <h2>Search</h2>
          <h3>Active Search</h3>
          <ActiveSearch />
          <h3>Inactive Search</h3>
          <InactiveSearch />
          <h3>Featured Search</h3>
          <FeaturedSearch />
        </div>
        <hr />
        <div>
          <h2>Site Navigation</h2>
          <h3>Single Level Menu</h3>
          <SingleLevelMenu
            linkObjectArr={[
              { href: '#', text: 'Getting Started' },
              { href: '#', text: 'Color Schemes' },
              { href: '#', text: 'Components' },
              { href: '#', text: 'Patterns' },
              { href: '#', text: 'About' },
              { href: '#', text: 'Contact Us' },
            ]}
          />
          <h3>Dropdown Menu</h3>
          <NavigationDropdownMenu />
          <h3>Megamenu</h3>
          <Megamenu />
        </div>
        <div>
          <h2>Footer</h2>
          <Footer />
        </div>
      </div>
      <div>
        <h2>Get Started</h2>
        <h3>Gradient Backgrounds</h3>
        <GradientBackgrounds type={'radial-secondary-light'} />
        <h3>Text Accent Colors</h3>
        <TextAccentColors accentClass={'text-accent-p1 bg-dark'} text={'Hello world'} htmlTag={'p'} />
      </div>
    </>
  );
}

export default App;
