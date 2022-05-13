/// <reference types="cypress" />

context("Scroll", () => {
  beforeEach(() => {
    cy.visit("../../tp_components/scroll-to-top.html");
  });

  it("reveal btn", () => {
    cy.scrollTo(0, 200);
    cy.get('[data-cy="div-btn"]').should("have.css", "display", "block");
  });

  it("go top on click btn", () => {
    cy.scrollTo(0, 200);
    cy.get('[data-cy="btn"]').click();
    cy.window().its("scrollY").should("equal", 0);
  });
});
