import idGenerator from "./idGenerator";

afterEach(() => {
  window.currentId = 0;
});
it("should generate 1", () => {
  const id = idGenerator();
  expect(id).toBe(1);
});
it("should generate 2", () => {
  let id = idGenerator();
  id = idGenerator();
  expect(id).toBe(2);
});
