const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)

}

async function walk(files, rootDir) {
    for (let file of files){
        const fileF = path.resolve(rootDir, file)
        console.log(file)
        const stats = await fs.stat(fileF)

        if (stats.isDirectory()){
            readdir(fileF)
            continue
        }
        console.log(stats.isDirectory())
    }
}



readdir("/home/william/Downloads/Aulas/")