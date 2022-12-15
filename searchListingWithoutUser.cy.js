const speed = 500;

describe("Search listings", () => {
    it("Search listigs without logging in", () => {
        cy.visit("/src/login.html");
        cy.get('[data-cy="no-user-btn"]').click();
        cy.url().should("include", "/index.html");
        cy.wait(speed);
        cy.get('[data-cy="index-search"]').type("test{enter}");
    });
});
