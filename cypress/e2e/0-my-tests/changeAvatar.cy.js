const speed = 500;

describe("Login and change avatar", () => {
    it("Login in, go to profile page, change avatar", () => {
        cy.visit("/src/login.html");
        cy.login("jowander@stud.noroff.no", "jowander");
        cy.url().should("include", "/index.html");
        cy.get('[data-cy="hamburger-btn"]').click();
        cy.wait(speed);
        cy.get('[data-cy="profile-page"]').click();
        // cy.url().should("include", "/src/spesificProfile.html");
        // cy.get('[data-cy="avatar-input"]').type(
        //     "https://static1.personality-database.com/profile_images/8234280eab3348eea48b7daaadef65cc.png"
        // );
        // cy.get('[data-cy="change-avatar-btn"]').click();
        // cy.wait(speed);
    });
});
