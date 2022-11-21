// Sample images
import testAvatar from './components/Blockquote/blockquote-with-image.jpg';
import bannerImage from './patterns/Banner/main-banner10.jpg';
import featureBannerImage from './patterns/Banner/ocean.jpg';
import cardImage from './patterns/Card/card-image.jpg';
import parallaxImage1 from './components/Parallax/background-primary.jpg';
import parallaxImage2 from './components/Parallax/bg-open-data.jpg';
import parallaxImage3 from './components/Parallax/main-banner4.jpg';
import sunflower1 from './patterns/CardGrid/sunflower1.jpg';
import sunflower2 from './patterns/CardGrid/sunflower2.jpg';
import sunflower3 from './patterns/CardGrid/sunflower3.jpg';

// JSON for component props
// import alertData from './exampleData/alertProps.json';

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
          contentArr={['Here is some text for body #1', 'Here is more text for another paragraph']}
        />
      </div>
      <div>
        <h3>Accordion List</h3>
        <Accordion
          type={'list'}
          contentArr={[{
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
        <Parallax
          contentObj={
            {
              imageSrc: parallaxImage1,
              heightInPx: '300',
              centerText: 'SCROLL DOWN',
              hasLightTextColor: false
            }
          }
        />
        <Parallax
          contentObj={
            {
              imageSrc: parallaxImage2,
              heightInPx: '300',
              headingText: 'Parallax Height',
              bodyText: 'Height can be specified by adding heightInPx prop, such as heightInPx: 300',
              hasLightTextColor: false
            }
          }
        />
        <Parallax
          contentObj={
            {
              imageSrc: parallaxImage3,
              heightInPx: '300',
              headingText: 'Light text color',
              bodyText: 'Make light text on dark backgrounds by changing the hasLightTextColor prop value to true',
              hasLightTextColor: true
            }
          }
        />
      </div>
      <hr />
      <div>
        <h2>Progress Bar</h2>
        <ProgressBar percentComplete={50} />
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
        <Tabs
          headerArr={['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']}
          sectionArr={
            [
              { headline: 'Tab 1 headline', text: 'This is tab 1 body text' },
              { headline: 'Tab 2 headline', text: 'This is tab 2 body text' },
              { headline: 'Tab 3 headline', text: 'This is tab 3 body text' },
              { headline: 'Tab 4 headline', text: 'This is tab 4 body text' }
            ]
          }
        />
      </div>
      <hr />
      <div>
        <h1>Patterns</h1>
        <h2>Banner</h2>
        <Banner
          type={'fullspan'}
          titleText={'Title'}
          bodyText={'Highlight an action you want people to take or important information on the homepage.'}
          buttonText={'Short link'}
          imageSrc={bannerImage}
        />
        <Banner
          type={'feature'}
          titleText={'Title'}
          bodyText={'Highlight an action you want people to take or important information on the homepage.'}
          buttonText={'Short link'}
          imageSrc={featureBannerImage}
        />
      </div>
      <hr />
      <div className={'col-md-2'}>
        <h2>Card</h2>
        <h3>Basic Card</h3>
        <Card
          titleText={'Give your card a short title'}
          bodyText={'Use this space to briefly tell your reader what they will find at the card\'s destination'}
          imageSrc={cardImage}
          altText={'Card size'}
          buttonHref={'https://www.google.com'}
          buttonText={'Go to Google'}
        />
        <h3>News Card</h3>
        <Card
          titleText={'Give your card a short title'}
          bodyText={'Use this space to briefly tell your reader what they will find at the card\'s destination'}
          imageSrc={cardImage}
          altText={'Card size'}
          buttonHref={'https://www.google.com'}
          buttonText={'Go to Google'}
          type={'news'}
          date={'Nov 17, 2022'}
          author={'John Doe'}
          agency={'CDT'}
        />
      </div>
      <hr />
      <div>
        <h2>Card Grid</h2>
        <CardGrid
          contentArr={
            [
              {
                titleText: 'Give your card a short title',
                bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                imageSrc: cardImage,
                altText: 'Card size',
                buttonHref: 'https://www.google.com',
                buttonText: 'Go to Google',
              },
              {
                titleText: 'Give your card a short title',
                bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                imageSrc: cardImage,
                altText: 'Card size',
                buttonHref: 'https://www.google.com',
                buttonText: 'Go to Google'
              },
              {
                titleText: 'Give your card a short title',
                bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                imageSrc: cardImage,
                altText: 'Card size',
                buttonHref: 'https://www.google.com',
                buttonText: 'Go to Google',
              },
            ]
          }
        />
        <CardGrid
          contentArr={
            [
              {
                titleText: 'Short title',
                bodyText: 'Briefly tell your reader what they will find at the card\'s destination then link to the official news release or news section within your site.',
                imageSrc: cardImage,
                altText: 'Card size',
                buttonHref: 'https://www.google.com',
                buttonText: 'Go to Google',
                date: 'Month DD, YYYY',
                author: 'Author',
                agency: 'Agency',
                type: 'news'
              },
              {
                titleText: 'Short title',
                bodyText: 'Briefly tell your reader what they will find at the card\'s destination then link to the official news release or news section within your site.',
                imageSrc: cardImage,
                altText: 'Card size',
                buttonHref: 'https://www.google.com',
                buttonText: 'Go to Google',
                date: 'Month DD, YYYY',
                author: 'Author',
                agency: 'Agency',
                type: 'news'
              },
              {
                titleText: 'Short title',
                bodyText: 'Briefly tell your reader what they will find at the card\'s destination then link to the official news release or news section within your site.',
                imageSrc: cardImage,
                altText: 'Card size',
                buttonHref: 'https://www.google.com',
                buttonText: 'Go to Google',
                date: 'Month DD, YYYY',
                author: 'Author',
                agency: 'Agency',
                type: 'news'
              },
            ]
          }
        />
        <CardGrid
          contentArr={
            [
              {
                titleText: 'Infographic',
                bodyText: 'Commonly recognized by visitors and generally reserved for data-rich visualization.',
                icon: 'ca-gov-icon-clipboard text-huge d-block text-center color-p2 color-p2-hover'
              },
              {
                titleText: 'Icons',
                bodyText: 'Should be simple and maintain the likeness of the object it represents.',
                icon: 'ca-gov-icon-accessibility text-huge d-block text-center color-p2 color-p2-hover'
              },
              {
                titleText: 'Card body',
                bodyText: 'This space should quickly describe what visitors will find at the button link.',
                icon: 'ca-gov-icon-calendar text-huge d-block text-center color-p2 color-p2-hover'
              },
            ]
          }
        />
        <CardGrid
          contentArr={
            [
              {
                imageSrc: sunflower1,
                altText: 'Yellow sunflower',
                titleText: 'Card title',
                bodyText: 'Briefly tell your reader what they will find at the card\'s destination then link to that location.',
              },
              {
                imageSrc: sunflower2,
                altText: 'Yellow sunflower',
                titleText: 'Card title',
                bodyText: 'Briefly tell your reader what they will find at the card\'s destination then link to that location.'
              },
              {
                imageSrc: sunflower3,
                altText: 'Yellow sunflower',
                titleText: 'Card title',
                bodyText: 'Briefly tell your reader what they will find at the card\'s destination then link to that location.'
              },
            ]
          }
        />
        <h3>Link Grid</h3>
        <LinkGrid linkArr={
          [
            { href: '#', linkText: 'Short link 1' },
            { href: '#', linkText: 'Short link 2' },
            { href: '#', linkText: 'Short link 3' }
          ]
        } />
      </div>
      <hr />
      <div>
        <h2>Progress Tracker</h2>
        <ProgressTracker
          type={'horizontal'}
          currentStep={3}
          contentArr={
            [
              {
                title: 'Step 1',
                body: 'Briefly discuss the step or identify the milestone.',
              },
              {
                title: 'Step 2',
                body: 'Keep the message clear and concise.',
              },
              {
                title: 'Step 3',
                body: 'Do not link to more information from the tracker.',
              },
              {
                title: 'Step 4',
                body: 'Instead, link to additional information in your body content or tracker caption.',
              },
            ]
          }
        />
        <ProgressTracker
          type={'vertical'}
          contentArr={
            [
              {
                title: 'Step 1 Contributor',
                body: 'Briefly discuss the step or identify the milestone.',
                date: 'YY - YY'
              },
              {
                title: 'Step 2 Contributor',
                body: 'Keep the message clear and concise.',
                date: 'YY - YY'

              },
              {
                title: 'Step 3 Contributor',
                body: 'Do not link to more information from the tracker.',
                date: 'YY - YY'

              },
              {
                title: 'Step 4 Contributor',
                body: 'Instead, link to additional information in your body content or tracker caption.',
                date: 'YY - YY'

              },
            ]
          }
        />
        <ProgressTracker
          type={'step'}
          contentArr={
            [
              {
                title: ' Give your steps a clear, concise title ',
                body: 'The step list is a good fit for lengthy content. Use this space to discuss the step or identify the milestone. If there is information that your visitor must know before completing this step, you can talk about that here too.',
              },
              {
                title: 'Make your steps actionable',
                body: 'Be sure to tell your visitor exactly what they have to do to complete the step. If the process is not fully fleshed out, then this component may not be the best fit for your content. ',
              },
              {
                title: 'Conclude the process',
                body: 'All good things must come to an end. Tell your reader how to complete their task. If needed, you can link to additional information in the step list content. ',
              },
            ]
          }
        />
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
