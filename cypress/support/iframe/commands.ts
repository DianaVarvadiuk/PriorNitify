declare namespace Cypress {
    interface Chainable<Subject = any> {
      getIframeBody(selector: string): Chainable<Subject>;
    }
  }