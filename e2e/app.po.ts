import { browser, element, by } from 'protractor';

export class RecepientbookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rp-root h1')).getText();
  }
}
