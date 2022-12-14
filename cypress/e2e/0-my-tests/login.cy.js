const speed = 500;

describe("Login with as valid user, then logout", () => {
    it("Login with username and password, then logout", () => {
        cy.visit("/src/login.html");
        cy.get('[data-cy="login-email-input"]').type("jowander@stud.noroff.no");
        cy.get('[data-cy="login-password-input"]').type("jowander");
        cy.get('[data-cy="login-btn"]').click();
        cy.wait(speed);
        cy.url().should("include", "/index.html");
        cy.wait(speed);
        cy.get('[data-cy="logout-btn"]').click();
        cy.wait(speed);
        cy.url().should("include", "/index.html");
    });
});
