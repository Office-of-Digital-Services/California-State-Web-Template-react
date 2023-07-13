// Sample images
import bannerImage from './patterns/Banner/main-banner.svg';

// Patterns
import Banner from './patterns/Banner/Banner';
import CardGrid from './patterns/CardGrid/CardGrid';
import ProgressTracker from './patterns/ProgressTracker/ProgressTracker';

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
          />

          <div style={{ background: '#cccccc' }}>
            <div className={'container p-t-lg'}>
              <CardGrid
                contentArr={[
                  {
                    type: 'icon',
                    bodyText: 'Body goes here',
                    icon: 'ca-gov-icon-code',
                    titleText: 'Title Goes Here'
                  },
                  {
                    type: 'icon',
                    bodyText: 'Body goes here',
                    icon: 'ca-gov-icon-accessibility',
                    titleText: 'Title Goes Here'
                  },
                  {
                    type: 'icon',
                    bodyText: 'Body goes here',
                    icon: 'ca-gov-icon-capitol',
                    titleText: 'Title Goes Here'
                  }
                ]}
              />
            </div>
          </div>
          <div className="container mb-2">
            <h2>Get started now</h2>
            <p>The State Template is now available in ReactJS! <br />Start developing with dynamic components.</p>
            <ProgressTracker
              type={'horizontal'}
              currentStep={1}
              contentArr={[
                {
                  title: 'Step 1',
                  body: 'Download React State Template'
                },
                {
                  title: 'Step 2',
                  body: 'Check out component examples'
                },
                {
                  title: 'Step 3',
                  body: 'Build amazing things'
                }
              ]}
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
