/// <reference types="cypress" />

context("Todo", () => {
  beforeEach(() => {
    cy.visit("../../tp_components/todo.html");
  });

  it("add elem", () => {
    for (let i = 0; i < 4; i++) {
      cy.get('[x-model="newTodo"]').type(`Task ${i}`);
      cy.get("[data-cy=clickBtn]").click();
    }
    cy.get("[data-cy=newTask]").should("have.length", 4);
    cy.get("[data-cy=newTask]").eq(1).get("[data-cy=del]").eq(0).click();
    cy.get("[data-cy=newTask]").should("have.length", 3);
  });
});
