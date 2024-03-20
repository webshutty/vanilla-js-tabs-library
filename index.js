require('react');
require('react-dom');

class Tabs {
  constructor(selector) {
    this.tabsContainer = document.querySelector(selector);
    this.tabs = this.tabsContainer.querySelectorAll('.tab');
    this.contents = this.tabsContainer.querySelectorAll('.content');

    this.init();
  }

  init() {
    this.tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => this.selectTab(index));
    });

    this.selectTab(0); // Select the first tab by default
  }

  selectTab(index) {
    this.tabs.forEach(tab => tab.classList.remove('active'));
    this.tabs[index].classList.add('active');

    this.contents.forEach(content => content.classList.remove('show'));
    this.contents[index].classList.add('show');
  }
}

module.exports = Tabs;
