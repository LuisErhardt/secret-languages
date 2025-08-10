import { toRaeubersprache, fromRaeubersprache } from "../src/translations";

describe("toRaeubersprache", () => {
  it("translates 'Räubersprache'", () => {
    expect(toRaeubersprache("Räubersprache")).toBe("Roräuboberorsospoproracochohe");
  });

  it("translates 'Haus'", () => {
    expect(toRaeubersprache("Haus")).toBe("Hohausos");
  });

  it("translates 'Leiter'", () => {
    expect(toRaeubersprache("Leiter")).toBe("Loleitoteror");
  });

  it("translates 'Mäuse'", () => {
    expect(toRaeubersprache("Mäuse")).toBe("Momäusose");
  });

  it("translates Sentence with '!'", () => {
    expect(toRaeubersprache("Du bist schön!")).toBe("Dodu bobisostot soscochohönon!");
  });

  it("handles consonants with upper cases", () => {
    expect(toRaeubersprache("auTo")).toBe("auToto");
  });

  it("translates 'Ma-Gazin'", () => {
    expect(toRaeubersprache("Ma-Gazin")).toBe("Moma-Gogazozinon");
  });

  it("handles empty parameter", () => {
    expect(toRaeubersprache("")).toBe("");
  });

  it("ignores new line", () => {
    expect(toRaeubersprache("Ein \n Zeilenumbruch")).toBe("Einon \n Zozeilolenonumombobrorucochoh");
  });
});

describe("fromRaeubersprache", () => {
  it("reverse translates 'Räubersprache'", () => {
    expect(fromRaeubersprache("Roräuboberorsospoproracochohe")).toBe("Räubersprache");
  });

  it("reverse translates 'Haus'", () => {
    expect(fromRaeubersprache("Hohausos")).toBe("Haus");
  });

  it("reverse translates 'Leiter'", () => {
    expect(fromRaeubersprache("Loleitoteror")).toBe("Leiter");
  });

  it("reverse translates 'Mäuse'", () => {
    expect(fromRaeubersprache("Momäusose")).toBe("Mäuse");
  });

  it("reverse translates Sentence with '!'", () => {
    expect(fromRaeubersprache("Dodu bobisostot soscochohönon!")).toBe("Du bist schön!");
  });

  it("reverse translates 'auTo'", () => {
    expect(fromRaeubersprache("auToto")).toBe("auTo");
  });

  it("reverse translates 'Ma-Gazin'", () => {
    expect(fromRaeubersprache("Moma-Gogazozinon")).toBe("Ma-Gazin");
  });

  it("handles empty parameter", () => {
    expect(fromRaeubersprache("")).toBe("");
  });

  it("ignores new line", () => {
    expect(fromRaeubersprache("Einon \n Zozeilolenonumombobrorucochoh")).toBe("Ein \n Zeilenumbruch");
  });
});
