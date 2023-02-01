// const { default: antlr4 } = await import("antlr4");
import antlr4 from "antlr4";
import { startServer } from "./server";

const chars = new antlr4.InputStream("1 + 2");

console.log(chars);

startServer();

export { chars };
