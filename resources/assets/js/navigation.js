const Navigation = (() => {
  const plugin = {};

  let defaults = {
    attributes: {
      trigger: 'data-navigation-trigger',
      currentStatus: 'aria-expanded',
    },
  };

  const eventListeners = () => {
    const selector = `[${defaults.attributes.currentStatus}]`;
    const navigationTriggers = document.querySelectorAll(selector);

    navigationTriggers.onClick((e) => {
      console.log(e);
    });
  };

  const extendDefaults = (options) => {
    options.forEach((property) => {
      if (Object.prototype.hasOwnProperty.call(options, property)) {
        defaults[property] = options[property];
      }
    });

    return defaults;
  };

  const triggerCurrentStatus = (element) => {
    if (!element.hasAttribute(defaults.attributes.currentStatus)) {
      element.setAttribute(defaults.attributes.currentStatus, 'false');
    }

    return element.getAttribute(defaults.attributes.currentStatus);
  };

  const triggerNavigation = (element) => {
    const currentStatus = triggerCurrentStatus(element);

    if (!currentStatus) {
      element.setAttribute(defaults.attributes.currentStatus, 'false');
      return;
    }

    element.setAttribute(defaults.attributes.currentStatus, 'true');
  };

  plugin.init = (options) => {
    defaults = extendDefaults(defaults, options);
    eventListeners();
  };

  return plugin;
})();

Navigation.init();
