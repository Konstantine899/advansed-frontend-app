// src/shared/lib/classNames/classNames.test.ts
import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  // тест первого аргумента
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  // Тест третьего аргумента т.е. дополнительного класса
  test("with additional class", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  // Тест второго аргумента т.е. мода равный true
  test("with mods", () => {
    const expected = "someClass class1 class2 hovered scrollable"; // hovered scrollable мы ожидаем в конце
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  // Тест второго аргумента т.е. мода false
  test("with mods", () => {
    const expected = "someClass class1 class2 hovered"; // hovered scrollable мы ожидаем в конце
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  // Тест второго аргумента т.е. мода undefined
  test("with mods", () => {
    const expected = "someClass class1 class2 hovered"; // hovered scrollable мы ожидаем в конце
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
