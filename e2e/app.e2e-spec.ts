import { Ng2FilePage } from './app.po';

describe('ng2-file App', () => {
  let page: Ng2FilePage;

  beforeEach(() => {
    page = new Ng2FilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
