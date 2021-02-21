//Aegislash
const aegislash = [
    {"base_stat": 60},
    {"base_stat": 50},
    {"base_stat": 150},
    {"base_stat": 50},
    {"base_stat": 150},
    {"base_stat": 60}
]


//Chandelure, Lampent, Litwick
const chandelure = [
    {
        "ability": {
            "name": "flash-fire"
        },
        "is_hidden": false,
    },
    {
        "ability": {
            "name": "flame-body",
        },
        "is_hidden": false,
    },
    {
        "ability": {
            "name": "shadow-tag",
        },
        "is_hidden": true,
    }
]

const abilitiesException = [
    "chandelure",
    "lampent",
    "litwick"
]

const abilitiesFix = [
    chandelure,
    chandelure,
    chandelure
]

const statsException = [
    "aegislash-shield"
]

const statsFix = [
    aegislash
]
