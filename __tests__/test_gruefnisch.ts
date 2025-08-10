import { toGruefnisch, fromGruefnisch } from "../src/translations";

describe("toGruefnisch", () => {
  it("translates 'Hallo'", () => {
    expect(toGruefnisch("Hallo")).toBe("Hanafallonofo");
  });

  it("translates 'Haus'", () => {
    expect(toGruefnisch("Haus")).toBe("Hanafaus");
  });

  it("translates 'Leiter'", () => {
    expect(toGruefnisch("Leiter")).toBe("Lenefeitenefer");
  });

  it("translates 'Mäuse'", () => {
    expect(toGruefnisch("Mäuse")).toBe("Mänäfäusenefe");
  });

  it("translates Sentence with '!'", () => {
    expect(toGruefnisch("Grüfnisch ist schön!")).toBe("Grünüfüfninifisch inifist schönöfön!");
  });

  it("handles Vocals with upper cases", () => {
    expect(toGruefnisch("AUto")).toBe("AnafaUtonofo");
  });

  it("translates 'Ma-Gazin'", () => {
    expect(toGruefnisch("Ma-Gazin")).toBe("Manafa-Ganafazinifin");
  });

  it("handles empty parameter", () => {
    expect(toGruefnisch("")).toBe("");
  });

  it("ignores new line", () => {
    expect(toGruefnisch("Ein \n Zeilenumbruch")).toBe("Enefein \n Zenefeilenefenunufumbrunufuch");
  });
});

describe("fromGruefnisch", () => {
  it("reverse translates 'Hallo'", () => {
    expect(fromGruefnisch("Hanafallonofo")).toBe("Hallo");
  });

  it("reverse translates 'Haus'", () => {
    expect(fromGruefnisch("Hanafaus")).toBe("Haus");
  });

  it("reverse translates 'Leiter'", () => {
    expect(fromGruefnisch("Lenefeitenefer")).toBe("Leiter");
  });

  it("reverse translates 'Mäuse'", () => {
    expect(fromGruefnisch("Mänäfäusenefe")).toBe("Mäuse");
  });

  it("reverse translates Sentence with '!'", () => {
    expect(fromGruefnisch("Grünüfüfninifisch inifist schönöfön!")).toBe("Grüfnisch ist schön!");
  });

  it("reverse translates 'AUto'", () => {
    expect(fromGruefnisch("AnafaUtonofo")).toBe("AUto");
  });

  it("reverse translates 'Ma-Gazin'", () => {
    expect(fromGruefnisch("Manafa-Ganafazinifin")).toBe("Ma-Gazin");
  });

  it("handles empty parameter", () => {
    expect(fromGruefnisch("")).toBe("");
  });

  it("ignores new line", () => {
    expect(fromGruefnisch("Enefein \n Zenefeilenefenunufumbrunufuch")).toBe("Ein \n Zeilenumbruch");
  });
});
