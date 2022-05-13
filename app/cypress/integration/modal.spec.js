/// <reference types="cypress" />

context("Modal", () => {
  beforeEach(() => {
    cy.visit("../../tp_components/modal.html");
  });

  it("reveal modal", () => {
    cy.get("[data-cy=open-modal]");
    cy.get("[data-cy=open-modal]").click();
    cy.get("[x-show=isModalVisible]").should("have.css", "display", "flex");
  });

  it("close modal", () => {
    cy.get("[data-cy=open-modal]").click();
    cy.get("[x-show=isModalVisible]").click(200, 200);
    cy.get("[x-show=isModalVisible]").should("have.css", "display", "none");
  });

  it("modal should have h2", () => {
    cy.get("[data-cy=open-modal]").click();
    cy.get("[x-show=isModalVisible]").find("h2").contains("Lorem Ipsum");
  });
});
