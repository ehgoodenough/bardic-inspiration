import fs from "fs/promises"

export default async function datadump(data) {
    data = JSON.stringify(data, null, 4)
    await fs.writeFile("data.json", data)
}
