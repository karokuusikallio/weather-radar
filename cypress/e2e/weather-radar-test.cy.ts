/// <reference types="cypress" />

const city = "Tampere";

describe("Choosing a city", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });

  it("should show data for every city", function () {
    cy.contains("Espoo");
    cy.contains("Jyväskylä");
    cy.contains("Kuopio");
    cy.contains("Tampere");
  });

  it("should show data for only the chosen city", function () {
    cy.get("#cityPicker").select(city);
    cy.get(`#${city}`).should("exist");
    cy.get(`#Espoo`).should("not.exist");
    cy.get(`#Kuopio`).should("not.exist");
    cy.get(`#Jyväskylä`).should("not.exist");
  });
});

export {};
