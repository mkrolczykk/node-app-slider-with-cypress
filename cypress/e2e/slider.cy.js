describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Move Slides Test', function () {
  it('Checks if user can clik next slide and then back to previous slide', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.wait(2000);
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Check Slides Content Test', function () {
  it('Checks if main page slides contain correct descriptions', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.card-description').should('contain', 'Rome');
    cy.get('.card-description').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.card-description').should('contain', 'London');
    cy.get('.card-description').should('contain', 'United Kingdom');
    cy.wait(2000);
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.card-description').should('contain', 'Paris');
    cy.get('.card-description').should('contain', 'France');
  });
});