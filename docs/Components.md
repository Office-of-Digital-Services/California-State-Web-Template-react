## Accordion
<p class="description">The Accordion component is dynamic and can generate a Basic Accordion or Accordion list depending on the value of the `type` prop.</p> 

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

## Blockquote
The Blockquote component is dynamic and can generate different quote styles based on the
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