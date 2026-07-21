import { expect, test } from "bun:test";
import bundledGrammar from "../ref/webview/assets/fortran-free-form-CqBp4yPH.js";
import packageGrammar from "@shikijs/langs/fortran-free-form";

test("installed Shiki language data matches the extracted app bundle", () => {
  expect(packageGrammar).toEqual(bundledGrammar);
});
