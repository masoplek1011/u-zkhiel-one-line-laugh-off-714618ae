import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I set my alarm for 7, 7:05, 7:10, and one more for the lie that I'm a morning person.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
