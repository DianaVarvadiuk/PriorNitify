Cypress.Commands.add("login", () => {
  const email = Cypress.env("email");
  const password = Cypress.env("password");
  cy.request({
    method: "POST",
    url: "https://dev-api.priornotify.com/auth/login",
    body: { email, password },
  }).then((response) => {
    Cypress.env("token", response.body.data.token);
    cy.setLocalStorage("token", response.body.data.token);
    cy.reload();
  });
});
