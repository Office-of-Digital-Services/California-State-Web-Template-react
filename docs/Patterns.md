## Banner
<p>The Banner component can be configured by using props.</p>

```
<Banner
  type={'fullspan'}
  titleText={'Title'}
  bodyText={'Body text goes here.'}
  buttonText={'Button text goes here'}
  imageSrc={'./path/to/image.jpg'}
/>
```
<div>
<h3>Props</h3>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>type</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets the type of Banner to generate.
<ul>
<li>fullspan</li>
<li>feature</li>
</ul>
</td>
</tr>
<tr>
<td><code>titleText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets title text for Banner.</td>
</tr>
<tr>
<td><code>bodyText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets body text for Banner</td>
</tr>
<tr>
<td><code>buttonText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets button text for Banner</td>
</tr>
<tr>
<td><code>imageSrc</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets URI for image source</td>
</tr>
</table>
</div>

## Card
<p>The Card component can generate a Basic Card or News Card by using the <code>type</code> prop.</p>

### Basic Card
```
<Card
  titleText={'Give your card a short title'}
  bodyText={'Card body text'}
  imageSrc={'./path/to.image.jpg'}
  altText={'Card size'}
  buttonHref={'https://www.google.com'}
  buttonText={'Go to Google'}
/>
```

### News Card
```
<Card
  titleText={'Give your card a short title'}
  bodyText={'Card body text'}
  imageSrc={'./path/to.image.jpg'}
  altText={'Card size'}
  buttonHref={'https://www.google.com'}
  buttonText={'Go to Google'}
  type={'news'}
  date={'Nov 17, 2022'}
  author={'John Doe'}
  agency={'CDT'}
/>
```

<div>
<h3>Props</h3>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>type</code></td>
<td><code>string</code></td>
<td><code>default</code></td>
<td>Sets the type of Card to generate.
<ul>
<li>default</li>
<li>news</li>
</ul>
</td>
</tr>
<tr>
<td><code>titleText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets title text for Card.</td>
</tr>
<tr>
<td><code>bodyText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets body text for Card</td>
</tr>
<tr>
<td><code>buttonText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets button text for Card</td>
</tr>
<tr>
<td><code>buttonHref</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets destination URL</td>
</tr>
<tr>
<td><code>imageSrc</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets URI for image source</td>
</tr>
<tr>
<td><code>altText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets alt text for image</td>
</tr>
<tr>
<td><code>date</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets date for News Card<br /><strong>For use with News Card</strong>
</td>
</tr>
<tr>
<td><code>author</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets author for News Card<br /><strong>For use with News Card</strong>
</td>
</tr>
<tr>
<td><code>agency</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets agency for News Card<br /><strong>For use with News Card</strong>
</td>
</tr>
</table>
</div>

## Card Grid
<p>The Card Grid pattern generates Cards based on the values provided in the <code>contentArr</code> prop. Each index of the array contains an object with corresponding Card props</p>

```
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
      titleText: 'Infographic',
      bodyText: 'Commonly recognized by visitors and generally reserved for data-rich visualization.',
      icon: 'ca-gov-icon-clipboard text-huge d-block text-center color-p2 color-p2-hover'
    },
  ]
  }
/>
```

<div>
<h3>Props</h3>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>contentArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>An array of objects containing the following keys:
<ul>
<li><code>titleText</code><br />Sets Card title text</li>
<li><code>bodyText</code><br />Sets Card body text</li>
<li><code>imageSrc</code><br />Sets URI for image</li>
<li><code>altText</code><br />Sets alt text for image</li>
<li><code>buttonHref</code><br />Sets on-click destination URL</li>
<li><code>buttonText</code><br />Sets button text</li>
<li><code>icon</code><br />Sets class name for icon</li>
<li><code>type</code><br />Sets styling for Card types<br /><ul><li>default</li><li>news</li></ul></li>
<li><code>author</code><br />Sets author for News Card<br /><strong>For use with News Card</strong></li>
<li><code>agency</code><br />Sets for News Card<br /><strong>For use with News Card</strong></li>
<li><code>date</code><br />Sets date for News Card<br /><strong>For use with News Card</strong></li>
</ul>
</td>
</tr>
</table>
</div>

## Link Grid
<p>The Link Grid pattern can be configured by using the <code>linkArr</code> prop.</p>

```
<LinkGrid 
  linkArr={
    [
      { href: '#', linkText: 'Short link 1' },
      { href: '#', linkText: 'Short link 2' },
      { href: '#', linkText: 'Short link 3' }
    ]
  }
/>
```
<div>
<h3>Props</h3>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>linkArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>An array of objects containing the following keys:
<ul>
<li><code>href</code><br />Sets destination URL</li>
<li><code>linkText</code><br />Sets link text</li>
</ul>
</td>
</tr>
</table>
</div>

## Progress Tracker
<p>Different types of Progress Trackers can be generated by using the <code>type</code> prop.</p>

```
<ProgressTracker
  type={'horizontal'}
  currentStep={3}
  contentArr={
    [
      {
        title: 'Step 1',
        body: 'Step 1 body.',
      },
      {
        title: 'Step 2',
        body: 'Step 2 body.',
      },
      {
        title: 'Step 3',
        body: 'Step 3 body.',
      },
      {
        title: 'Step 4',
        body: 'Step 4 body.',
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
        body: 'Step 1 body.',
        date: 'YY - YY'
      },
      {
        title: 'Step 2 Contributor',
        body: 'Step 2 body.',
        date: 'YY - YY'

      },
      {
        title: 'Step 3 Contributor',
        body: 'Step 3 body.',
        date: 'YY - YY'

      },
      {
        title: 'Step 4 Contributor',
        body: 'Step 4 body.',
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
        title: 'Step 1 title',
        body: 'Step 1 body.',
      },
      {
        title: 'Step 2 title',
        body: 'Step 2 body. ',
      },
      {
        title: 'Step 3 title',
        body: 'Step 3 body.',
      },
    ]
  }
/>
```
<div>
<h3>Props</h3>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>contentArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>An array of objects containing the following keys:
<ul>
<li><code>title</code><br />Sets step title text</li>
<li><code>body</code><br />Sets step body text</li>
<li><code>date</code><br />Sets step date text</li>
</ul>
</td>
</tr>
<tr>
<td><code>type</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Determines the type of Progress Tracker to generate:
<ul>
<li>horizontal</li>
<li>vertical</li>
<li>step</li>
</ul>
</td>
</tr>
<tr>
<td><code>currentStep</code></td>
<td><code>int</code></td>
<td><code></code></td>
<td>Sets the current step for Horizontal Progress Tracker
</td>
</tr>
</table>
</div>