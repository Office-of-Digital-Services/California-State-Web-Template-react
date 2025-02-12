// Sample images
import testAvatar from './components/Blockquote/blockquote-with-image.jpg';

// Components
import Accordion from './components/Accordion/Accordion';
import Alert from './components/Alert/Alert';
import Blockquote from './components/Blockquote/Blockquote';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Button from './components/Button/Button';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';

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
          </div>

        </main>
      </div>
    </>
  );
}

export default App;
