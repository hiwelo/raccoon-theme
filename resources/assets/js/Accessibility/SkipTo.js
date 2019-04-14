const plugin = {};

const defaults = {
  attributes: {
    trigger: 'data-js-skipto',
    links: 'data-js-skipto-link',
  },
};

const findTarget = (element) => {
  if (!element.hasAttribute('href')) {
    return false;
  }

  const target = element.getAttribute('href');

  return document.querySelector(target);
};

const skipToAnchor = (element) => {
  const target = findTarget(element);

  if (!target) {
    return;
  }

  target.setAttribute('tabindex', '-1');
  target.addEventListener('blur', () => {
    target.removeAttribute('tabindex');
  });
  target.focus();
};

const eventListener = (element) => {
  element.addEventListener('click', (e) => {
    skipToAnchor(element);
    e.preventDefault();
  });
};

plugin.init = () => {
  const skipToSelector = `[${defaults.attributes.trigger}]`;
  const skipToItems = `[${defaults.attributes.links}]`;
  const skipToSections = document.querySelectorAll(skipToSelector);

  if (!skipToSections.length) {
    return;
  }

  skipToSections.forEach((item) => {
    const links = item.querySelectorAll(skipToItems);

    links.forEach((link) => {
      eventListener(link);
    });
  });
};

export default { plugin };
