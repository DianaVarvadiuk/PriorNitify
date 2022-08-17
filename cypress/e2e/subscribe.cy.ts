import { loadInterceptsDefaults } from "./intercept/group_interceps/_defaults";
import { SubscribePage } from "./page-object/SubscribePage";
import { SubscribeBusinessPage } from "./page-object/SubscribeBusinessPage";
describe("Subcribe page", () => {
  beforeEach(() => {
    loadInterceptsDefaults();
  });

  it("Should check data subscribe page and subscribe business page ", () => {
    const subscribepage = new SubscribePage();
    subscribepage.visit();
    cy.url().should("include", "?step=0");
    subscribepage.getPrice().should("have.text", "$0.10");
    subscribepage
      .getPriorNoticeText()
      .should("have.text", "per Prior Notice after first 7 days");
    subscribepage.getSubscribeBtn().should("be.enabled").click();
    cy.url().should("include", "?step=1");
    subscribepage.getSubscribeFormBtn().should("be.disabled");
    //write invalid company
    subscribepage.getCompanyName("it");
    subscribepage
      .getInvalidFeedbackCompany()
      .should(
        "have.text",
        "Company Name required, at least 3 and no more than 100 characters"
      );
    //focus  First Name
    subscribepage.getFocusFirstName();
    subscribepage
      .getInvalidFeedbackFirstName()
      .should(
        "have.text",
        "First Name required, at least 1 and no more than 50 characters"
      );
    //focus Last Name
    subscribepage.getFocusLastName();
    subscribepage
      .getInvalidFeedbackLastName()
      .should(
        "have.text",
        "Last Name required, at least 1 and no more than 50 characters"
      );
    subscribepage.getSubscribeFormBtn().should("be.disabled");
    //write valid
    subscribepage.getCompanyName("Move");
    //write invalid First Name
    subscribepage.getFirstName(
      "Valentyn1234567891011121314151617181920212223242526272829303132343536373839404142"
    );
    subscribepage
      .getInvalidFeedbackFirstName()
      .should(
        "have.text",
        "First Name required, at least 1 and no more than 50 characters"
      );
    subscribepage.getLastName(
      "Marynchyk1234567891011121314151617181920212223242526272829303132343536373839404142"
    );
    subscribepage
      .getInvalidFeedbackLastName()
      .should(
        "have.text",
        "Last Name required, at least 1 and no more than 50 characters"
      );
    subscribepage.getSubscribeFormBtn().should("be.disabled");
    //write valid dates
    subscribepage.getFirstName("Valentyn");
    subscribepage.getLastName("Marynchyk");
    subscribepage.getSubscribeFormBtn().should("be.enabled").click();
    const subscribebusiness = new SubscribeBusinessPage();
    subscribebusiness.getProducerTitle().should("have.text", "Producer");
    subscribebusiness.getProducerSubmit().should("be.enabled");
    subscribebusiness.getMerchantTitle().should("have.text", "Merchant");
    subscribebusiness.getMerchantSubmit().should("be.enabled");
    subscribebusiness.getShipperTitle().should("have.text", "Shipper");
    subscribebusiness.getShipperSubmit().should("be.enabled");
    subscribebusiness.getProducerSubmit().click();
    cy.wait(2000);
    cy.url().should("include", "/status");
  });
});
