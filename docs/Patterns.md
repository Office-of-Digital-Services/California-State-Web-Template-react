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
