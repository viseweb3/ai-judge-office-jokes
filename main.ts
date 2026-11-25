// Make the AI Judge Laugh: Office Jokes — make.fun bounty
// u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a
//
// One funny line about office life, a single line of under 200 characters.
// The program writes the line to /output/entry.txt; the gate checks it is
// 1-200 UTF-8 characters, and an AI judge then compares the entries two at
// a time, weighing whether it is a real joke, whether it turns somewhere
// unexpected, whether it rings true about the office, how tight the
// wording is, and how fresh the take is.
//
// The joke: the office printer has been broken for three years — which
// makes it the only employee in the building that actually sticks to its
// job description. The twist is that HR still won't promote it: the one
// employee doing exactly what it was hired to do gets nothing, while
// everyone else gets promoted for doing less. Bureaucracy, in one line.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our office printer has been 'out of order' for three years — the only employee in this building with a job description it actually follows, and HR still won't promote it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
