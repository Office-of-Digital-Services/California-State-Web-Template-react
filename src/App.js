// Sample images
import testAvatar from './components/Blockquote/blockquote-with-image.jpg';
import primaryParallax from './components/Parallax/background-primary.jpg';
import lightParallax from './components/Parallax/bg-open-data.jpg';
import sunsetParallax from './components/Parallax/main-banner4.jpg';
import bannerImage from './patterns/Banner/main-banner.svg';
import featureBannerImage from './patterns/Banner/ocean.jpg';
import basicCardImage from './patterns/Card/basic-card-image.jpg';
import sunflowerImage1 from './patterns/CardGrid/sunflower1.jpg';
import sunflowerImage2 from './patterns/CardGrid/sunflower2.jpg';
import sunflowerImage3 from './patterns/CardGrid/sunflower3.jpg';


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
import SingleLevelList from './components/SideNavigation/SingleLevelList';
import MultiLevelList from './components/SideNavigation/MultiLevelList';
import NavigationAccordionList from './components/SideNavigation/NavigationAccordionList';
import SocialMediaIcons from './components/SocialMediaIcons/SocialMediaIcons';
import Table from './components/Table/Table';
import Tabs from './components/Tabs/Tabs';

// Patterns
import Banner from './patterns/Banner/Banner';
import Card from './patterns/Card/Card';
import CardGrid from './patterns/CardGrid/CardGrid';
import LinkGrid from './patterns/LinkGrid/LinkGrid';
import ProgressTracker from './patterns/ProgressTracker/ProgressTracker';

// CSS Shortcuts
import GradientBackgrounds from './get-started/GradientBackgrounds/GradientBackgrounds';
import TextAccentColors from './get-started/TextAccentColors/TextAccentColors';

function App() {

  return (
    <>
      <div className={'main-content'} id={'main-content'}>
        <main id={'main'} className={'main-primary'}>
          <div className={'container p-t-md'}>
            <h1 id={'components'}>Components</h1>
            <h2>Accordion</h2>
            <div>
              <h3>Basic Accordion</h3>
              <Accordion
                summaryStr={'Here is a summary'}
                contentArr={
                  [
                    'Here is some text for body #1',
                    'Here is more text for another paragraph'
                  ]
                }
              />
            </div>
            <div>
              <h3>Accordion List</h3>
              <Accordion
                type={'list'}
                contentArr={
                  [
                    {
                      heading: 'Item 1',
                      content: 'Content for item 1'
                    },
                    {
                      heading: 'Item 2',
                      content: 'Content for item 2'
                    }
                  ]
                }
              />
            </div>
            <hr />
            <h2>Alert</h2>
            <div>
              <Alert
                alertLevel={'info'}
                alertText={'A new version of the State Web Template has launched.'}
                boldText={'New!'}
                href={'https://template.webstandards.ca.gov/'}
                linkText={'Upgrade now'}
              />
              <Alert
                alertLevel={'warning'}
                alertText={'Our website may be impacted during upgrade.'}
                boldText={'Warning:'}
                href={'https://template.webstandards.ca.gov/'}
                linkText={'Learn more'}
              />
              <Alert
                alertLevel={'danger'}
                alertText={'Our systems are currently down.'}
                boldText={'Alert:'}
                href={'https://template.webstandards.ca.gov/'}
                linkText={'Learn more'}
              />
              <Alert
                alertLevel={'resolution'}
                alertText={'Our systems are back up again.'}
                boldText={'Fixed.'}
                href={'https://template.webstandards.ca.gov/'}
                linkText={'Learn more'}
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
              <h3>Primary action buttons</h3>
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
              <h3>Secondary action buttons</h3>
              <div className="btn-row p-b">
                <Button
                  buttonText={'Primary color'}
                  buttonType={'outline-primary'}
                  buttonSize={'default'}
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
              <h3>Disabled buttons</h3>
              <div className="btn-row p-b">
                <Button
                  buttonText={'Primary color'}
                  buttonType={'primary'}
                  disabled
                />
                <Button
                  buttonText={'Highlight color'}
                  buttonType={'highlight'}
                  disabled
                />
                <Button
                  buttonText={'Standout color'}
                  buttonType={'standout'}
                  disabled
                />
              </div>
              <h3>Button sizes</h3>
              <div className="btn-row m-b-lg">
                <Button
                  buttonText={'Large'}
                  buttonType={'default'}
                  buttonSize={'lg'}
                  href={'#'}
                />
                <Button
                  buttonText={'Default'}
                  buttonType={'default'}
                  href={'#'}
                />
                <Button
                  buttonText={'Small'}
                  buttonType={'default'}
                  buttonSize={'sm'}
                  href={'#'}
                />
                <Button
                  buttonText={'Extra small'}
                  buttonType={'default'}
                  buttonSize={'xs'}
                  href={'#'}
                />
              </div>
            </div>
            <hr />
            <h2>Countdown Timer</h2>
            <div>
              <CountdownTimer
                dateStr={'Jan 1, 2026 00:00:00'}
                isDefaultColor={false}
              />
            </div>
            <hr />
            <h2>Form Elements</h2>
            <div>
              <form action="">
                <TextField
                  id={'InputName'}
                  isRequired={false}
                  labelText={'Full Name'}
                  placeholder={'Name'}
                />
                <TextArea
                  id={'exampleInputComment'}
                  isRequired={true}
                  labelText={'Your message'}
                  subText={'Use this space for error messages or instructional text'}
                />
                <div class="form-check m-b">
                  <Checkbox
                    id={'exampleCheckbox1'}
                    checkboxText={'Option 1'}
                    checkboxValue={'1'}
                  />
                </div>
                <div class="form-check m-b">
                  <Checkbox
                    id={'exampleCheckbox2'}
                    checkboxText={'Option 2'}
                    checkboxValue={'2'}
                  />
                </div>
                <div class="form-check m-b">
                  <Checkbox
                    id={'exampleCheckbox3'}
                    checkboxText={'Option 3'}
                    checkboxValue={'3'}
                  />
                </div>
                <div class="form-check m-b">
                  <RadioButton
                    id={'exampleRadio1'}
                    radioName={'test_group'}
                    radioText={'Option 1'}
                    radioValue={'1'}
                  />
                </div>
                <div class="form-check m-b">
                  <RadioButton
                    id={'exampleRadio2'}
                    radioName={'test_group'}
                    radioText={'Option 2'}
                    radioValue={'2'}
                  />
                </div>
                <div class="form-check m-b">
                  <RadioButton
                    id={'exampleRadio3'}
                    radioName={'test_group'}
                    radioText={'Option 3'}
                    radioValue={'3'}
                  />
                </div>
                <DropdownMenu
                  id={'test_dropdown'}
                  labelText={'Custom select'}
                  optionsArr={[{ text: 'Option 1', value: '1' }, { text: 'Option 2', value: '2' }, { text: 'Option 3', value: '3' }]}
                />
                <FileInput
                  id={'test_file_input'}
                  labelText={'Upload your file'}
                  feedbackText={'Feedback text.'}
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
            <h2>Lists</h2>
            <div>
              <Lists
                itemsArr={['List step 1 of your process.', 'Continue your list of unrelated items', 'Continue your list of unrelated items']}
              />
            </div>
            <div>
              <Lists
                itemsArr={['List step 1 of your process.', 'List the second step of your process.', 'List the third step of your process.']}
                type={'ordered'}
              />
            </div>
            <hr />
            <div>
              <h2>Modal</h2>
              <button type="button" className="btn btn-default btn-lg m-t-lg" data-bs-toggle="modal" data-bs-target="#modal">Open modal</button>
              <Modal
                bodyText={'This is the modal container\'s body'}
                headingText={'This is the modal container\'s heading'}
                modalId={'modal'}
              />
            </div>
            <hr />
            <div>
              <h2>Number Counter</h2>
              <NumberCounter
                countTime={'5000'}
                targetNumber={300}
              />

            </div>
            <hr />
            <div>
              <Parallax
                contentObj={
                  {
                    bodyText: '',
                    centerText: 'SCROLL DOWN',
                    hasLightTextColor: true,
                    headingText: '',
                    heightInPx: '300',
                    imageSrc: primaryParallax,
                  }
                }
              />
              <Parallax
                contentObj={
                  {
                    bodyText: 'Height can be specified by adding heightInPx prop, such as heightInPx: 300',
                    centerText: '',
                    hasLightTextColor: false,
                    headingText: 'Parallax Height',
                    heightInPx: '300',
                    imageSrc: lightParallax,
                  }
                }
              />
              <Parallax
                contentObj={
                  {
                    bodyText: 'Make light text on dark backgrounds by changing the hasLightTextColor prop value to true',
                    centerText: '',
                    hasLightTextColor: true,
                    headingText: 'Light text color',
                    heightInPx: '300',
                    imageSrc: sunsetParallax,
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
              <h2>Side Navigation</h2>
              <h3>Single-Level List</h3>
              <SingleLevelList
                contentArr={[
                  { isActive: true, isLanding: true, text: 'Landing page', href: '/' },
                  { text: 'Page 1', href: '/' },
                  { text: 'Page 2', href: '/' },
                  { text: 'Page 3', href: '/' },
                  { text: 'Page 4', href: '/' },
                  { text: 'Page 5', href: '/' }
                ]}
              />
              <h3>Multi-Level List</h3>
              <MultiLevelList
                contentArr={
                  [
                    { text: 'Page 1', href: '/' },
                    { text: 'Page 2', href: '/' },
                    { text: 'Page 3', href: '/' },
                    {
                      text: 'Page 4', href: '/', secondLevelArr: [
                        { text: 'Page A', href: '/' },
                        { isLanding: true, text: 'Page B Section Landing', href: '/' },
                        { text: 'Page B-1', href: '/', isActive: true },
                        { text: 'Page B-2', href: '/' },
                      ]
                    },
                    { text: 'Page 5', href: '/' },
                  ]
                }
              />
              <h3>Accordion List</h3>
              <NavigationAccordionList
                contentArr={
                  [
                    { text: 'Page 1', href: '/' },
                    {
                      text: 'Page 2', href: '/', secondLevelArr: [
                        { text: 'Page A', href: '/' },
                        { text: 'Page B', href: '/' },
                      ]
                    },
                    { text: 'Page 3', href: '/' },
                    { text: 'Page 4', href: '/' },
                    { text: 'Page 5', href: '/' },
                  ]
                }
              />
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
            <br />
            <hr />
            <div>
              <h2>Table</h2>
              <h3>Basic</h3>
              <Table
                type={'default'}
                headerArr={['#', 'First Name', 'Last Name', 'Username']}
                rowArr={[['1', 'Mark', 'Otto', '@mdo'], ['2', 'Jacob', 'Thornton', '@jthornton'], ['3', 'Larry', 'the Bird', '@twitter']]}
              />
              <h3>Shaded</h3>
              <Table
                type={'shaded'}
                headerArr={['#', 'First Name', 'Last Name', 'Username']}
                rowArr={[['1', 'Mark', 'Otto', '@mdo'], ['2', 'Jacob', 'Thornton', '@jthornton'], ['3', 'Larry', 'the Bird', '@twitter']]}
              />
              <h3>Zebra</h3>
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
                    { headline: 'Tab 1 headline', text: 'Tab 1 text' },
                    { headline: 'Tab 2 headline', text: 'Tab 2 text' },
                    { headline: 'Tab 3 headline', text: 'Tab 3 text' },
                    { headline: 'Tab 4 headline', text: 'Tab 4 text' }
                  ]
                }
              />
            </div>
            <hr />
            <h1 id={'patterns'}>Patterns</h1>
            <div>
              <h2>Banner</h2>
              <Banner
                type={'fullspan'}
                titleText={'Title'}
                bodyText={'Highlight an action you want people to take or important information on the homepage.'}
                buttonText={'Short link'}
                imageSrc={bannerImage}
                href={'/'}
              />
              <Banner
                type={'feature'}
                titleText={'Title'}
                bodyText={'Highlight an action you want people to take or important information on the homepage.'}
                buttonText={'Short link'}
                imageSrc={featureBannerImage}
                href={'/'}
              />
            </div>
            <hr />
            <div className={'col-md-2'}>
              <h2>Card</h2>
              <h3>Default Card</h3>
              <Card
                titleText={'Give your card a short title'}
                bodyText={'Use this space to briefly tell your reader what they will find at the card\'s destination'}
                imageSrc={basicCardImage}
                altText={'Card size'}
                buttonHref={'https://www.google.com'}
                buttonText={'Go to Google'}
              />
              <h3>Icon Card</h3>
              <Card
                titleText={'Give your card a short title'}
                bodyText={'Use this space to briefly tell your reader what they will find at the card\'s destination'}
                imageSrc={basicCardImage}
                altText={'Card size'}
                buttonHref={'https://www.google.com'}
                buttonText={'Go to Google'}
                type={'icon'}
                icon={'ca-gov-icon-clipboard'}
              />
              <h3>Image Card</h3>
              <Card
                titleText={'Give your card a short title'}
                bodyText={'Use this space to briefly tell your reader what they will find at the card\'s destination'}
                imageSrc={basicCardImage}
                altText={'Card size'}
                buttonHref={'https://www.google.com'}
                buttonText={'Go to Google'}
                type={'image'}
              />
            </div>
            <hr />
            <div>
              <h2>Card Grid</h2>
              <h3>3 cards</h3>
              <CardGrid
                contentArr={
                  [
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                  ]
                }
              />
              <h3>4 cards</h3>
              <CardGrid
                contentArr={
                  [
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                  ]
                }
              />
              <h3>5 cards</h3>
              <CardGrid
                contentArr={
                  [
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                  ]
                }
              />
              <h3>6 cards</h3>
              <CardGrid
                contentArr={
                  [
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                  ]
                }
              />
              <h3>7 cards</h3>
              <CardGrid
                contentArr={
                  [
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
                    },
                    {
                      titleText: 'Give your card a short title',
                      bodyText: 'Use this space to briefly tell your reader what they will find at the card\'s destination',
                      imageSrc: basicCardImage,
                      altText: 'Card size',
                      buttonHref: 'https://www.google.com',
                      buttonText: 'Go to Google',
                      type: 'image'
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
                      buttonHref: '#',
                      type: 'icon',
                      icon: 'ca-gov-icon-clipboard',
                    },
                    {
                      titleText: 'Icons',
                      bodyText: 'Should be simple and maintain the likeness of the object it represents.',
                      buttonHref: '#',
                      type: 'icon',
                      icon: 'ca-gov-icon-accessibility',
                    },
                    {
                      titleText: 'Card body',
                      bodyText: 'This space should quickly describe what visitors will find at the button link.',
                      buttonHref: '#',
                      type: 'icon',
                      icon: 'ca-gov-icon-calendar',
                    },
                  ]
                }
              />
              <CardGrid
                contentArr={
                  [
                    {
                      titleText: 'Card title',
                      bodyText: 'Briefly tell your reader what they will find at the card\'s destination then link to that location.',
                      imageSrc: sunflowerImage1,
                      altText: 'Close up of sunflower',
                      buttonHref: '#',
                      type: 'image'
                    },
                    {
                      titleText: 'Card title',
                      bodyText: 'Briefly tell your reader what they will find at the card\'s destination then link to that location.',
                      imageSrc: sunflowerImage2,
                      altText: 'Close up of sunflower',
                      buttonHref: '#',
                      type: 'image'
                    },
                    {
                      titleText: 'Card title',
                      bodyText: 'Briefly tell your reader what they will find at the card\'s destination then link to that location.',
                      imageSrc: sunflowerImage3,
                      altText: 'Close up of sunflower',
                      buttonHref: '#',
                      type: 'image'
                    },
                  ]
                }
              />
            </div>
            <hr />
            <div>
              <h3>Link Grid</h3>
              <LinkGrid
                linkArr={
                  [
                    { href: '#', linkText: 'Short link 1' },
                    { href: '#', linkText: 'Short link 2' },
                    { href: '#', linkText: 'Short link 3' }
                  ]
                }
              />
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
                      title: 'Give your steps a clear, concise title',
                      body: 'The step list is a good fit for lengthy content. Use this space to discuss the step or identify the milestone. If there is information that your visitor must know before completing this step, you can talk about that here too.',
                    },
                    {
                      title: 'Make your steps actionable',
                      body: 'Be sure to tell your visitor exactly what they have to do to complete the step. If the process is not fully fleshed out, then this component may not be the best fit for your content.',
                    },
                    {
                      title: 'Conclude the process',
                      body: 'All good things must come to an end. Tell your reader how to complete their task. If needed, you can link to additional information in the step list content.',
                    },
                  ]
                }
              />
            </div>
            <hr />
            <div id={'css-shortcuts'}>
              <h2>CSS Shortcuts</h2>
              <h3>Gradient Backgrounds</h3>
              <div>
                <div style={{ display: 'flex' }}>
                  <GradientBackgrounds
                    type={'primary'}
                  />
                  <GradientBackgrounds
                    type={'highlight'}
                  />
                  <GradientBackgrounds
                    type={'standout'}
                  />
                  <GradientBackgrounds
                    type={'secondary'}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <GradientBackgrounds
                    type={'primary-standout'}
                  />
                  <GradientBackgrounds
                    type={'primary-highlight'}
                  />
                  <GradientBackgrounds
                    type={'primary-secondary'}
                  />
                  <GradientBackgrounds
                    type={'standout-highlight'}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <GradientBackgrounds
                    type={'danger-warning'}
                  />
                  <GradientBackgrounds
                    type={'info-success'}
                  />
                  <GradientBackgrounds
                    type={'radial-gray'}
                  />
                  <GradientBackgrounds
                    type={'radial-gray-light'}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <GradientBackgrounds
                    type={'radial-primary'}
                  />
                  <GradientBackgrounds
                    type={'radial-highlight'}
                  />
                  <GradientBackgrounds
                    type={'radial-standout'}
                  />
                  <GradientBackgrounds
                    type={'radial-secondary'}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>Text Accent Colors</h3>
              <TextAccentColors
                accentClass={'text-accent1'}
                text={'Hello world'}
                htmlTag={'p'}
              />
              <TextAccentColors
                accentClass={'text-accent2'}
                text={'Hello world'}
                htmlTag={'p'}
              />
              <TextAccentColors
                accentClass={'text-accent3'}
                text={'Hello world'}
                htmlTag={'p'}
              />
              <TextAccentColors
                accentClass={'text-accent9 bg-dark'}
                text={'Hello world'}
                htmlTag={'p'}
              />
              <TextAccentColors
                accentClass={'text-accent-p1 bg-dark'}
                text={'Hello world'}
                htmlTag={'p'}
              />
              <TextAccentColors
                accentClass={'text-accent-s1 bg-dark'}
                text={'Hello world'}
                htmlTag={'p'}
              />
            </div>
          </div >

        </main >
      </div >
    </>
  );
}

export default App;
