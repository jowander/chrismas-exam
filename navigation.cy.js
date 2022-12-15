const speed = 500;

describe("Navigate from login to register to index", () => {
    it("Tests navigation and opens show more posts", () => {
        cy.visit("/src/login.html");
        cy.get('[data-cy="new-account"]').click();
        cy.wait(speed);
        cy.url().should("include", "/src/registerUser.html");
        cy.wait(speed);
        cy.get('[data-cy="header-link-register"]').click();
        cy.wait(speed);
        cy.url().should("include", "/index.html");
        cy.wait(speed);
        cy.get('[data-cy="show-more"]').click();
        cy.get('[data-cy="hamburger-btn"]').click();
        cy.get('[data-cy="login-link"]').click();
        cy.wait(speed);
        cy.url().should("include", "/src/login.html");
    });
});
