import { RecepientbookPage } from './app.po';

describe('recepientbook App', function() {
  let page: RecepientbookPage;

  beforeEach(() => {
    page = new RecepientbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rp works!');
  });
});
