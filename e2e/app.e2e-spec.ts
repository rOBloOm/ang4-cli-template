import { Ang4CliTemplatePage } from './app.po';

describe('ang4-cli-template App', () => {
  let page: Ang4CliTemplatePage;

  beforeEach(() => {
    page = new Ang4CliTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
