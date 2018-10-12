import { MetroPage } from './app.po';

describe('metro App', function() {
  let page: MetroPage;

  beforeEach(() => {
    page = new MetroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
