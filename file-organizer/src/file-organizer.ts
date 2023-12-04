export {};
import fs from "fs";
import path from "path";

const source_folder = "H:/src/Projects/React Projects/teste-organiza";

const readFolder = async () => {
  const folder_files = await fs.readdirSync(source_folder);
  for (const file of folder_files) {
    const file_date = (await fs.statSync(source_folder + "/" + file)).mtime;
  }
};

readFolder();
