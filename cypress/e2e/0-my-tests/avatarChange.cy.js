const speed = 500;

describe("Change Avatar", () => {
    it("Navigate to profile and change avatar", () => {
        cy.visit("/src/login.html");
        cy.wait(speed);
        cy.login("jowander@stud.noroff.no", "jowander");
        cy.url().should("include", "/index.html");
        cy.get('[data-cy="hamburger-btn"]').click();
        cy.wait(speed);
        cy.get('[data-cy="profile-page"]').click();
        // cy.url().should("include", "/src/spesificProfile.html");
    });
});
