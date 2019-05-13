import { h } from '@stencil/core';
import components from '../data/api-reference.json';

const listStyle = {
  fontFamily: 'var(--code-font-family',
  fontSize: '13px'
};

export default (props) => {
  const { page, contentChanged } = props;

  return (
    <article>
      <h1>{page.title}</h1>
      <section class="markdown-content" ref={elm => {
        if (contentChanged) {
          elm.innerHTML = page.body;
        }
      }}/>
      <hr/>
      <ul style={listStyle}>
        {components.map(([name, href]) => (
          <li key={name}>
            <stencil-route-link url={href}>{name}</stencil-route-link>
          </li>
        ))}
      </ul>
    </article>
  );
};
