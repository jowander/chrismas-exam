const speed = 1000;

describe("Login with as valid user, then post item", () => {
    it("Navigate to profile page, post a post", () => {
        cy.visit("/src/login.html");
        cy.login("jowander@stud.noroff.no", "jowander");
        cy.url().should("include", "/index.html");
        cy.get('[data-cy="hamburger-btn"]').click();
        cy.get('[data-cy="profile-page"]').click();
        cy.url().should("include", "/src/spesificProfile.html");
        cy.get('[data-cy="title-input"]').type("Masamune");
        cy.wait(speed);
        cy.get('[data-cy="media-input"]').type(
            "https://cdn.webshopapp.com/shops/305440/files/344616353/image.jpg"
        );
        cy.wait(speed);
        cy.get('[data-cy="bid-end"]').type("2023-01-01T16:00:01.000Z");
        cy.wait(speed);
        cy.get('[data-cy="description-input"]').type(
            "The Masamune, is an elongated nodachi. The Masamune is named after the famous Japanese swordsmith Goro Nyudo Masamune, whose blades are considered national treasures in Japan today."
        );
        cy.wait(speed);
        cy.get('[data-cy="add-item-btn"]').click();
        cy.wait(speed);
    });
});
