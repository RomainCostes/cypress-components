/// <reference types="cypress" />

context("Smart Tag", () => {
  beforeEach(() => {
    cy.visit("../../tp_components/smart-tag.html");
  });

    it("reveal btn", () => {
      cy.get('[data-cy="btn"]').trigger("mouseover");
      cy.get('[data-cy="hover"]').should("have.css", "display", "block");
    });

    it("hide btn", () => {
      cy.get('[data-cy="btn"]').trigger("mouseexit");
      cy.get('[data-cy="hover"]').should("have.css", "display", "none");
    });
});

/// <reference types="cypress" />