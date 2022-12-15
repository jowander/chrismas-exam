const speed = 500;

describe("Login with as valid user, then logout", () => {
    it("Login with username and password with custom command, then logout", () => {
        cy.visit("/src/login.html");
        cy.login("jowander@stud.noroff.no", "jowander");
        cy.wait(speed);
        cy.url().should("include", "/index.html");
        cy.wait(speed);
        cy.get('[data-cy="logout-btn"]').click();
        cy.wait(speed);
        cy.url().should("include", "/index.html");
    });
});
