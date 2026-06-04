describe('template spec', () => {
  it('startdriveup', () => {
    cy.visit('/')
    cy.get('#inputField').click().type("0782521877")
  })
})