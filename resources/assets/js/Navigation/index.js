const plugin = {};

const defaults = {
  attributes: {
    trigger: 'data-navigation-trigger',
    currentStatus: 'aria-expanded',
  },
};

const triggerCurrentStatus = (element) => {
  if (!element.hasAttribute(defaults.attributes.currentStatus)) {
    element.setAttribute(defaults.attributes.currentStatus, 'false');
  }

  return element.getAttribute(defaults.attributes.currentStatus);
};

const triggerNavigation = (element) => {
  const currentStatus = triggerCurrentStatus(element);

  if (currentStatus === 'true') {
    element.setAttribute(defaults.attributes.currentStatus, 'false');
    return;
  }

  element.setAttribute(defaults.attributes.currentStatus, 'true');
};

const focusManagement = (element) => {
  const currentStatus = triggerCurrentStatus(element);

  if (currentStatus === 'false') {
    element.focus();
  }

  element.nextElementSibling.firstElementChild.focus();
};

const eventListeners = () => {
  const selector = `[${defaults.attributes.currentStatus}]`;
  const navigationTriggers = document.querySelectorAll(selector);

  navigationTriggers.forEach((item) => {
    item.addEventListener('click', () => {
      triggerNavigation(item);
      focusManagement(item);
    });
  });
};

plugin.init = () => {
  eventListeners();
};

export default { plugin };
