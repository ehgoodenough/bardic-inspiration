import urrl from "urrl"
import fetchquest from "./utility/fetchquest.js"
import datadump from "./utility/datadump.js"

const MAKO = 80235804
const GASKET = 112003554
const DNDBEYOND_CHARACTER_URRL = urrl("https://character-service.dndbeyond.com/character/v3/character/{characterId}")


async function retrieveCharacter({characterId}) {
    const response = await fetchquest({
        "method": "GET",
        "url": DNDBEYOND_CHARACTER_URRL({
            "characterId": characterId
        })
    })

    const data = response.data
    // await datadump(data)

    const character = {
        "characterId": data.id,
        "userId": data.userId,
        "dndbeyondUrl": data.readonlyUrl,
        "avatarUrl": data.avatarUrl,
        "themeColor": data.themeColor,
        "resources": {
            "inspiration": data.inspiration,
            "baseHealth": data.baseHitPoints,
            "bonusHealth": data.bonusHitPoints,
            "overrideHealth": data.overrideHitPoints,
            "removedHealth": data.removedHitPoints,
            "temporaryHealth": data.temporaryHitPoints,
        },
        "abilities": data.stats.map((stat, index) => {
            return {
                "id": stat.id,
                "baseValue": stat.value,
                "overrideValue": data.overrideStats[index].value,
                "bonusValue": data.bonusStats[index].value,
            }
        }),
        "coinpurse": data.currencies,

        // level, list of classes (by name)
        // adversity tokens

        // skills!!!
        // skills, saving throws, initiative, perceptions, ac. senses+movement types/speeds.
        // actions, damage.
        // roll any dice
    }
    console.log(character)
}

retrieveCharacter({"characterId": GASKET})
