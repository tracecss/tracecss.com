export function headingAnchors(markdown, slugify, linkLabel) {
  markdown.core.ruler.push('heading_ids', ({ tokens }) => {
    const ids = new Set();

    for (const [index, token] of tokens.entries()) {
      if (token.type !== 'heading_open') continue;

      const base = slugify(tokens[index + 1].content) || 'section';
      let id = base;
      for (let suffix = 2; ids.has(id); suffix++) {
        id = `${base}-${suffix}`;
      }

      ids.add(id);
      token.attrSet('id', id);
    }
  });

  markdown.renderer.rules.heading_open = (
    tokens,
    index,
    options,
    env,
    renderer,
  ) => {
    const heading = tokens[index];
    const openingTag = renderer.renderToken(tokens, index, options);
    if (heading.tag === 'h1') return openingTag;

    const id = encodeURIComponent(heading.attrGet('id'));
    const label = markdown.utils.escapeHtml(
      linkLabel(tokens[index + 1].content, env?.page),
    );
    return (
      openingTag +
      `<a class="heading-anchor" href="#${id}" aria-label="${label}">` +
      `#</a>`
    );
  };
}
