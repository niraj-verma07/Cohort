import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import fs from "fs";

let dataBuffer = fs.readFileSync("./story.pdf");

const parser = new PDFParse({
  data: dataBuffer,
});

const data = await parser.getText();

console.log(data);

const spiltter = new RecursiveCharacterTextSplitter({
  chunkSize: 100,
  chunkOverlap: 0,
});

const chunks = await spiltter.splitText(data.text);

console.log(chunks);
