describe("Login Formu Testi", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173"); 
    });
  
    it("Başarılı form doldurulduğunda submit edilebiliyor mu?", () => {
      cy.get('input[name="email"]').type("test@test.com");
      cy.get('input[name="password"]').type("abc123");
      cy.get('input[name="terms"]').check();
  
      cy.get("button").should("not.be.disabled").click();

    });
  
    it("Hatalı durumlarda hata mesajları görüyorum, buton disabled kalıyor", () => {
      cy.get('input[name="email"]').type("yanlis");
      cy.get('input[name="password"]').type("12");
        cy.contains("Geçerli bir email giriniz");
      cy.contains("Şifre en az 6 karakter ve sayı-harf içermeli");
      cy.contains("Şartları kabul etmeniz gerekiyor");
        cy.get("button").should("be.disabled");
    });
  });
  