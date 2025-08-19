describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#primer-numero").type(4);
    cy.get("#segundo-numero").type(5);
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "9");
  });
});

describe("Multiplicador", () => {
  it("Shows the product to the user", () => {
    cy.visit("/");
    cy.get("#primer-numero").clear().type(4);
    cy.get("#segundo-numero").clear().type(5);
    cy.get("#multiplicar-button").click();
    cy.get("#resultado-div").should("contain", "20");
  });
});
