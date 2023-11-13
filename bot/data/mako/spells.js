{
    "spellSlots": [
        {
            "level": 1,
            "used": 0,
            "available": 0
        },
        {
            "level": 2,
            "used": 0,
            "available": 0
        },
        {
            "level": 3,
            "used": 0,
            "available": 0
        },
        {
            "level": 4,
            "used": 0,
            "available": 0
        },
        {
            "level": 5,
            "used": 0,
            "available": 0
        },
        {
            "level": 6,
            "used": 0,
            "available": 0
        },
        {
            "level": 7,
            "used": 0,
            "available": 0
        },
        {
            "level": 8,
            "used": 0,
            "available": 0
        },
        {
            "level": 9,
            "used": 0,
            "available": 0
        }
    ],
    "pactMagic": [
        {
            "level": 1,
            "used": 0,
            "available": 0
        },
        {
            "level": 2,
            "used": 0,
            "available": 0
        },
        {
            "level": 3,
            "used": 0,
            "available": 0
        },
        {
            "level": 4,
            "used": 0,
            "available": 0
        },
        {
            "level": 5,
            "used": 0,
            "available": 0
        }
    ],
    "spells": {
        "race": [],
        "class": [],
        "background": null,
        "item": [
            {
                "overrideSaveDc": 15,
                "limitedUse": {
                    "name": null,
                    "statModifierUsesId": null,
                    "resetType": null,
                    "numberUsed": 0,
                    "minNumberConsumed": 1,
                    "maxNumberConsumed": 1,
                    "maxUses": 0,
                    "operator": null,
                    "useProficiencyBonus": false,
                    "proficiencyBonusOperator": null,
                    "resetDice": null
                },
                "id": 4172149,
                "entityTypeId": 61600994,
                "definition": {
                    "id": 2021,
                    "name": "Burning Hands",
                    "level": 1,
                    "school": "Evocation",
                    "duration": {
                        "durationInterval": 0,
                        "durationUnit": null,
                        "durationType": "Instantaneous"
                    },
                    "activation": {
                        "activationTime": 1,
                        "activationType": 1
                    },
                    "range": {
                        "origin": "Self",
                        "rangeValue": 0,
                        "aoeType": "Cone",
                        "aoeValue": 15
                    },
                    "asPartOfWeaponAttack": false,
                    "description": "<p>As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.</p>\r\n<p>The fire ignites any flammable objects in the area that aren't being worn or carried.</p>\r\n<p><strong>At Higher Levels.</strong> When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.</p>",
                    "snippet": "",
                    "concentration": false,
                    "ritual": false,
                    "rangeArea": null,
                    "damageEffect": null,
                    "components": [
                        1,
                        2
                    ],
                    "componentsDescription": "",
                    "saveDcAbilityId": 2,
                    "healing": null,
                    "healingDice": [],
                    "tempHpDice": [],
                    "attackType": null,
                    "canCastAtHigherLevel": true,
                    "isHomebrew": false,
                    "version": null,
                    "sourceId": null,
                    "sourcePageNumber": 220,
                    "requiresSavingThrow": true,
                    "requiresAttackRoll": false,
                    "atHigherLevels": {
                        "scaleType": "spellscale",
                        "higherLevelDefinitions": [],
                        "additionalAttacks": [],
                        "additionalTargets": [],
                        "areaOfEffect": [],
                        "duration": [],
                        "creatures": [],
                        "special": [],
                        "points": []
                    },
                    "modifiers": [
                        {
                            "fixedValue": null,
                            "id": "spell_2021_23",
                            "entityId": null,
                            "entityTypeId": null,
                            "type": "damage",
                            "subType": "fire",
                            "dice": null,
                            "restriction": "",
                            "statId": null,
                            "requiresAttunement": false,
                            "duration": null,
                            "friendlyTypeName": "Damage",
                            "friendlySubtypeName": "Fire",
                            "isGranted": false,
                            "bonusTypes": [],
                            "value": null,
                            "availableToMulticlass": null,
                            "modifierTypeId": 0,
                            "modifierSubTypeId": 0,
                            "componentId": 0,
                            "componentTypeId": 0,
                            "die": {
                                "diceCount": 3,
                                "diceValue": 6,
                                "diceMultiplier": null,
                                "fixedValue": null,
                                "diceString": "3d6"
                            },
                            "count": 1,
                            "durationUnit": null,
                            "usePrimaryStat": false,
                            "atHigherLevels": {
                                "scaleType": "spellscale",
                                "higherLevelDefinitions": [
                                    {
                                        "level": 1,
                                        "typeId": 15,
                                        "dice": {
                                            "diceCount": 1,
                                            "diceValue": 6,
                                            "diceMultiplier": null,
                                            "fixedValue": 0,
                                            "diceString": "1d6"
                                        },
                                        "value": null,
                                        "details": ""
                                    }
                                ],
                                "additionalAttacks": [],
                                "additionalTargets": [],
                                "areaOfEffect": [],
                                "duration": [],
                                "creatures": [],
                                "special": [],
                                "points": []
                            }
                        }
                    ],
                    "conditions": [],
                    "tags": [
                        "Damage"
                    ],
                    "castingTimeDescription": "",
                    "scaleType": "spellscale",
                    "sources": [
                        {
                            "sourceId": 1,
                            "pageNumber": null,
                            "sourceType": 2
                        },
                        {
                            "sourceId": 2,
                            "pageNumber": 220,
                            "sourceType": 1
                        }
                    ],
                    "spellGroups": []
                },
                "definitionId": 0,
                "prepared": false,
                "countsAsKnownSpell": null,
                "usesSpellSlot": false,
                "castAtLevel": 3,
                "alwaysPrepared": false,
                "restriction": null,
                "spellCastingAbilityId": null,
                "displayAsAttack": false,
                "additionalDescription": null,
                "castOnlyAsRitual": false,
                "ritualCastingType": null,
                "range": {
                    "origin": "Self",
                    "rangeValue": 0,
                    "aoeType": "Cone",
                    "aoeValue": 15
                },
                "activation": {
                    "activationTime": 1,
                    "activationType": 1
                },
                "baseLevelAtWill": false,
                "atWillLimitedUseLevel": null,
                "isSignatureSpell": null,
                "componentId": 7497247,
                "componentTypeId": 112130694,
                "spellListId": null
            }
        ],
        "feat": []
    },
    "classSpells": [
        {
            "entityTypeId": 1446578651,
            "characterClassId": 107009478,
            "spells": []
        },
        {
            "entityTypeId": 1446578651,
            "characterClassId": 107013790,
            "spells": []
        }
    ],
}
