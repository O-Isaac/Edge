import { Glob } from "glob";
import path from "node:path"
import sharp from "sharp";

const glob = new Glob('public/assets/images/original/*', {})
const files = Array.from(glob.iterateSync())

for (const file of files) {
    const [fileName] = file.split("\\").at(-1).split(".")
    console.log("! Converting file %s", fileName)
    
    const fileOutPath = path.join("public/assets/images/minified", `${fileName}.webp`)
    
    sharp(file)
        .webp({ lossless: false, quality: 25 })
        .toFile(fileOutPath)
        .then(() => console.log("+ Converted to %s", `${fileOutPath}`))
}