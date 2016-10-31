import { browser, element, by } from 'protractor/globals';

export class MyDreamAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root md-toolbar-row')).getText();
  }
}
