class ShittyIcons {
  constructor() {
    this.iconData = {
      "archive": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" color="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M2.1 2.6v3.9q-.1.9.5 1.3 1.4.7 2.8.8l1.8.2q1 .2 2.2 0l7-.4h4c.8 0 .8-.1 1-1s.4-2.4.1-3.4q.1-.6-.4-.8h-4.8q-4.5-.1-9-.8Q4.5 2 2 2m1.7 7.4-.3 3.7-.2 5c-.1.5-.4 2.6.4 2.8H18c1.6 0 1.8-2.7 1.8-4q.1-2.6.6-5.3c0-.7.2-2.2-.3-2.6M8.5 11.8l6-.1"/></svg>`,
    };

    this.options = {
      iconAttribute: "shitty-icon",
      fallbackClass: "shitty-icon-fallback",
      onIconNotFound: (iconName) => {
        console.warn(
          `Icon "${iconName}" Could not be found or does not exist.`,
        );
      },
    };

    this.version = "";
  }

  replaceIcons() {
    const shittyIcons = document.querySelectorAll(
      `i[${this.options.iconAttribute}]`,
    );
    let allIconsImported = true;

    shittyIcons.forEach((icon) => {
      const iconName = icon.getAttribute(this.options.iconAttribute);
      if (this.iconData[iconName]) {
        icon.outerHTML = this.iconData[iconName];
      } else {
        icon.classList.add(this.options.fallbackClass);
        this.options.onIconNotFound(iconName);
        allIconsImported = false;
      }
    });

    if (allIconsImported) {
      console.log(`Imported Shitty Icons ${this.version}successfully.`);
    }
  }

  addIcon(name, svgContent) {
    this.iconData[name] = svgContent;
  }

  configure(options) {
    this.options = { ...this.options, ...options };
  }
}

// Create a new instance of PaperIcons
const shittyIcons = new ShittyIcons();

// Export the instance for use in different environments
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = shittyIcons;
} else {
  window.ShittyIcons = shittyIcons;
}
