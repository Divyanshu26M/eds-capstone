export default function decorate(block) {
  const image = block.querySelector('picture');
  const featuredText = block.querySelector('h4, h5, h6');
  const title = block.querySelector('h1, h2, h3');
  const description = block.querySelectorAll('p')[0];
  const button = block.querySelector('a');

  if (image && title && description && button) {
    const articleContent = document.createElement('div');
    articleContent.classList.add('article-content');

    const articleText = document.createElement('div');
    articleText.classList.add('article-text');

    const articleImage = document.createElement('div');
    articleImage.classList.add('article-image');

    const pattr = document.createElement('p');

    articleImage.appendChild(image);
    articleText.appendChild(featuredText);
    articleText.appendChild(title);
    articleText.appendChild(description);
    pattr.appendChild(button);
    articleText.appendChild(pattr);

    articleContent.appendChild(articleImage);
    articleContent.appendChild(articleText);

    block.innerHTML = '';
    block.appendChild(articleContent);
  }
}
