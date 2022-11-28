## Accordion
<p className="description">The Accordion component is dynamic and can generate a Basic Accordion or Accordion list depending on the value of the `type` prop.</p> 

### Basic Accordion
```
<Accordion
  summaryStr={'Here is a summary'}
  contentArr={
    [
      'Here is some text for body #1',
      'Here is more text for another paragraph'
    ]
  }
/>
````
   
### Accordion List
```
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
<td>Set to 'list' for Accordion List.</td>
</tr>
<tr>
<td><code>summaryStr</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets summary text for Basic Accordion.</td>
</tr>
<tr>
<td><code>contentArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>
  <p>For Basic Accordion: Each array index generates a paragraph containing the array index value.</p>
  <p>For Accordion List: Each array index contains an Object with 'heading' and 'content' key value pairs.</p>
  </td>
</tr>
</table>
</div> 

## Alert
The Alert component is dynamic and can generate different Alerts based on the `alertLevel` value. Hyperlinks can be added by including `buttonHref` and `buttonText` values.  
```
<Alert
  alertLevel={'info'}
  alertText={'We\'ve made some changes that might impact your experience.'}
  buttonHref={'https://google.com'}
  buttonText={'Learn more'}
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
<td><code>alertLevel</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets styling based on alert level value
<ul>
<li>info</li>
<li>warning</li>
<li>danger</li>
<li>success</li>
<li>severe</li>
</ul>
</td>
</tr>
<tr>
<td><code>alertText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets the alert text to display</td>
</tr>
<tr>
<td><code>buttonHref</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets the URL to visit on click</td>
</tr>
<tr>
<td><code>buttonText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets the button text to display</td>
</tr>
</table>
</div>

## Blockquote
The Blockquote component is dynamic and can generate different quote styles based on the props passed in.
### With graphic

```
<Blockquote
  withGraphic={true}
  quote={'Good quotes help to tell a story and enhance the credibility of a press release, news story, or speech. Words that are crafted well can leave a lasting impact on the world.'}
  author={'Holly Zuluaga'}
/>
```   
### Without graphic
```
<Blockquote
  withGraphic={false}
  quote={'Good quotes help to tell a story and enhance the credibility of a press release, news story, or speech. Words that are crafted well can leave a lasting impact on the world.'}
  author={'Holly Zuluaga'}
/>  
```   
### With image
```
<Blockquote
  imageSrc={testAvatar}
  altText={'Person\'s face'}
  quote={'You can pair a block quote with the image of related content or the author of the quote.'}
  author={'Author'}
/>   
```
### With pulled quote
```
<Blockquote
  withPulledQuote={true}
  quote={'Good quotes help to tell a story and enhance the credibility of a press release, news story, or speech. Words that are crafted well can leave a lasting impact on the world.'}
  author={'Holly Zuluaga'}
/>
```
### With prominent styling
```
<Blockquote
  isProminent={true}
  quote={'Good quotes help to tell a story and enhance the credibility of a press release, news story, or speech. Words that are crafted well can leave a lasting impact on the world.'}
  author={'Holly Zuluaga'}
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
<td><code>altText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets alt text for image</td>
</tr>
<tr>
<td><code>author</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets the author's name text</td>
</tr>
<tr>
<td><code>imageSrc</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets the path for image source</td>
</tr>
<tr>
<td><code>isProminent</code></td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
<td>Applies the <code>prominent</code> class</td>
</tr>
<tr>
<td><code>quote</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets the quote text</td>
</tr>
<tr>
<td><code>withGraphic</code></td>
<td><code>Boolean</code></td>
<td><code>true</code></td>
<td>Applies the quotation mark icon and styling</td>
</tr>
<tr>
<td><code>withPulledQuote</code></td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
<td>Applies the <code>pull-quote</code> class</td>
</tr>
</table>
</div>

## Breadcrumb
<p>The Breadcrumb component uses passed in props to determine what to display</p>   

```
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
<td><code>breadcrumbArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>An array of Objects containing <code>href</code> and <code>title</code> keys</td>
</tr>
<tr>
<td><code>currentPage</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>The title of the active page</td>
</tr>
</table>
</div>

## Button
<p>The Button component takes in props to set button size, text, type, disabled value, and hyperlink destination.</p>

```
<Button
  buttonSize={'lg'}
  buttonText={'Primary color'}
  buttonType={'primary'}
  disabled={true}
  href={'#'}
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
<td><code>buttonSize</code></td>
<td><code>string</code></td>
<td><code>'default'</code></td>
<td>
Sets Button size
<ul>
<li>lg</li>
<li>default</li>
<li>sm</li>
<li>xs</li>
</ul>
</td>
</tr>
<tr>
<td><code>buttonText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets Button display text</td>
</tr>
<tr>
<td><code>buttonType</code></td>
<td><code>string</code></td>
<td><code>'default'</code></td>
<td>Sets class applied to Button
<ul>
<li>default</li>
<li>primary</li>
<li>highlight</li>
<li>standout</li>
<li>outline-primary</li>
<li>outline-highlight</li>
<li>outline-standout</li>
</ul>
</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
<td>Sets Button <code>disabled</code> value</td>
</tr>
<tr>
<td><code>href</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets URI to visit on Button click</td>
</tr>
</table>
</div>

## Countdown Timer
<p>The Countdown Timer component allows for a target date and style to be passed in via props</p>

```
<CountdownTimer
  dateStr={'Jan 1, 2023 00:00:00'}
  isDefaultColor={false}
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
<td><code>dateStr</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets countdown target date. Works with ISO-8601 formats.</td>
</tr>
<tr>
<td><code>isDefaultColor</code></td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
<td>Sets Countdown Timer color to primary or gray.</td>
</tr>
</table>
</div>

## Form Elements
<p>Form Elements include components for Checkbox, DropdownMenu, FileInput, Label, RadioButton, TextArea, and TextField.</p>

### Checkbox
```
<Checkbox
  id={'exampleCheckbox1'}
  checkboxText={'Option 1'}
  checkboxValue={'1'}
/>
```

<div>
<h4>Props</h4>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets id for Checkbox.</td>
</tr>
<tr>
<td><code>checkboxText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets text to display in Checkbox label</td>
</tr>
<tr>
<td><code>checkboxValue</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets value for Checkbox</td>
</tr>
</table>
</div>

### Dropdown Menu
```
<DropdownMenu
  id={'test_dropdown'}
  labelText={'Custom select'}
  optionsArr={[{ text: 'Option 1', value: '1' }, { text: 'Option 2', value: '2' }, { text: 'Option 3', value: '3' }]}
/>
```

<div>
<h4>Props</h4>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets id for Dropdown Menu.</td>
</tr>
<tr>
<td><code>labelText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets text to display in Dropdown Menu label</td>
</tr>
<tr>
<td><code>optionsArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>An array of Objects containing <code>text</code> and <code>value</code> keys.</td>
</tr>
</table>
</div>

### File Input
```
<FileInput
  id={'test_file_input'}
  labelText={'Upload your file'}
  feedbackText={'Feedback text.'}
/>
```

<div>
<h4>Props</h4>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets id for File Input.</td>
</tr>
<tr>
<td><code>labelText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets text to display in File Input label.</td>
</tr>
<tr>
<td><code>feedbackText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets feedback text for File Input.</td>
</tr>
</table>
</div>

### Label
```
<Label 
  labelFor={'input-1'}
  labelText={'Display text goes here'}
/>
```

<div>
<h4>Props</h4>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>labelFor</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Determines html tag that Label refers to. Set value to target tag's <code>id</code></td>
</tr>
<tr>
<td><code>labelText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets text to display in Label.</td>
</tr>
</table>
</div>

### Radio Button
```
<RadioButton
  id={'exampleRadio1'}
  radioName={'test_group'}
  radioText={'Option 1'}
  radioValue={'1'}
/>
```

<div>
<h4>Props</h4>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets id for Radio Button.</td>
</tr>
<tr>
<td><code>radioName</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets name for Radio Button.</td>
</tr>
<tr>
<td><code>radioText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets display text for Radio Button label.</td>
</tr>
<tr>
<td><code>radioValue</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets value for Radio Button.</td>
</tr>
</table>
</div>

### Text Area
```
<TextArea
  id={'exampleInputComment'}
  isRequired={true}
  labelText={'Your message'}
  subText={'Use this space for error messages or instructional text'}
/>
```

<div>
<h4>Props</h4>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets id for Text Area.</td>
</tr>
<tr>
<td><code>isRequired</code></td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
<td>Sets required attribute for Text Area.</td>
</tr>
<tr>
<td><code>labelText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets display text for Text Area label.</td>
</tr>
<tr>
<td><code>subText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets subtext for Text Area.</td>
</tr>
</table>
</div>

### Text Field
```
<TextField 
  id={'InputName'}
  isRequired={false}
  labelText={'Full Name'}
  placeholder={'Name'}
/>
```

<div>
<h4>Props</h4>
<table>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
<tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets id for Text Field.</td>
</tr>
<tr>
<td><code>isRequired</code></td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
<td>Sets required attribute for Text Field.</td>
</tr>
<tr>
<td><code>labelText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets display text for Text Field label.</td>
</tr>
<tr>
<td><code>placeholder</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets placeholder text for Text Field.</td>
</tr>
</table>
</div>

## Horizontal Separator
<p>The Horizontal Separator component style can be set by using the <code>isDotted</code> prop.</p>

```
<HorizontalSeparator isDotted={true} />
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
<td><code>isDotted</code></td>
<td><code>Boolean</code></td>
<td><code>false</code></td>
<td>Sets style for Horizontal Separator.</td>
</tr>
</table>
</div>

## Lists
<p>The type of List can be set by using the <code>type</code> prop. </p>

```
<Lists
  itemsArr={['List step 1 of your process.', 'List the second step of your process.', 'List the third step of your process.']}
  type={'ordered'}
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
<td><code>itemsArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>Each array index generates a list item from that index's value.</td>
</tr>
<tr>
<td><code>type</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Pass in 'ordered' to generate an ordered list</td>
</tr>
</table>
</div>

## Modal
<p>The Modal heading and body text can be set by using props.</p>

```
<Modal 
  bodyText={'This is the modal container\'s body'} 
  headingText={'This is the modal container\'s heading'}
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
<td><code>bodyText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets the text to display in the Modal body.</td>
</tr>
<tr>
<td><code>headingText</code></td>
<td><code>string</code></td>
<td><code></code></td>
<td>Sets the text to display in the Modal heading.</td>
</tr>
</table>
</div>

## Number Counter
<p>The Number Counter component's count speed and target number can be set by using props</p>

```
<NumberCounter
  countTime={'5000'}
  targetNumber={300}
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
<td><code>countTime</code></td>
<td><code>string</code></td>
<td><code>'4000'</code></td>
<td>Sets the count time for the Number Counter.</td>
</tr>
<tr>
<td><code>targetNumber</code></td>
<td><code>int</code></td>
<td><code></code></td>
<td>Sets the target number that the Number Counter stops at.</td>
</tr>
</table>
</div>

## Parallax
<p>The Parallax component can be configured by using the <code>contentObj</code> prop.</p>

```
contentObj={
  {
    bodyText: 'Make light text on dark backgrounds by changing the hasLightTextColor prop value to true',
    centerText: 'Add optional center text and container',
    hasLightTextColor: true,
    headingText: 'Light text color',
    heightInPx: '300',
    imageSrc: './path/to/image.jpg',
  }
}
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
<td><code>contentObj</code></td>
<td><code>object</code></td>
<td><code></code></td>
<td>An object containing the following keys:
<ul>
<li><code>bodyText</code><br />Sets body text</li>
<li><code>centerText</code><br />Sets center text and container</li>
<li><code>hasLightTextColor</code><br />Darkens background if set <code>true</code></li>
<li><code>headingText</code><br />Sets heading text</li>
<li><code>heightInPx</code><br />Sets height in pixels</li>
<li><code>imageSrc</code><br />Sets URI for image</li>
</ul>
</td>
</tr>
</table>
</div>

## Progress Bar
<p>The completion percentage can be set by using <code>percentComplete</code> prop</p>

```
<ProgressBar percentComplete={50} />
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
<td><code>percentComplete</code></td>
<td><code>int</code></td>
<td><code></code></td>
<td>Sets the completion percentage to display</td>
</tr>
</table>
</div>

## Social Media Icons
<p>Social Media Icons can be set by using the <code>contentArr</code> prop.</p>

```
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
      type: 'email',
      href: 'mailto:your_email@ca.gov'
    }
  ]}
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
<li><code>type</code><br />
  <ul>
    <li>facebook</li>
    <li>github</li>
    <li>twitter</li>
    <li>youtube</li>
    <li>linkedin</li>
    <li>instagram</li>
    <li>email</li>
  </ul>
</li>
<li><code>href</code><br />Sets destination URL</li>

</ul>
</td>
</tr>
</table>
</div>

## Table
<p>Different Table types can be generated by using the <code>type</code> prop.</p>

```
<Table
  type={'shaded'}
  headerArr={['#', 'First Name', 'Last Name', 'Username']}
  rowArr={[['1', 'Mark', 'Otto', '@mdo'], ['2', 'Jacob', 'Thornton', '@jthornton'], ['3', 'Larry', 'the Bird', '@twitter']]}
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
<td>Sets class for Table
<ul>
<li>shaded</li>
<li>zebra</li>
</ul>
</td>
</tr>
<tr>
<td><code>headerArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>Each array index generates a table header containing the index value</td>
</tr>
<tr>
<td><code>rowArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>A nested array where each index contains an array with each row's data. </td>
</tr>
</table>
</div>

## Tabs
<p>Tab content is generated by using props.</p>

```
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
<td><code>headerArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>Each array index generates a Tab header containing the index value</td>
</tr>
<tr>
<td><code>sectionArr</code></td>
<td><code>array</code></td>
<td><code></code></td>
<td>An array of objects containing the following keys:
<ul>
<li><code>headline</code><br />Sets Tab content headline</li>
<li><code>text</code><br />Sets Tab content body text</li>
</ul>
</td>
</tr>
</table>
</div>