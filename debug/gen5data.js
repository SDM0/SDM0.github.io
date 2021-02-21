// ##### Stats 

//Aegislash
const aegislash = [
    {"base_stat": 60},
    {"base_stat": 50},
    {"base_stat": 150},
    {"base_stat": 50},
    {"base_stat": 150},
    {"base_stat": 60}
]

//Butterfree
const butterfree = [
    {"base_stat": 60},
    {"base_stat": 45},
    {"base_stat": 50},
    {"base_stat": 80},
    {"base_stat": 80},
    {"base_stat": 70}
]

//Beedrill
const beedrill = [
    {"base_stat": 65},
    {"base_stat": 80},
    {"base_stat": 40},
    {"base_stat": 45},
    {"base_stat": 80},
    {"base_stat": 75}
]

//Pidgeot
const pidgeot = [
    {"base_stat": 83},
    {"base_stat": 80},
    {"base_stat": 75},
    {"base_stat": 70},
    {"base_stat": 70},
    {"base_stat": 91}
]

//Pikachu
const pikachu = [
    {"base_stat": 35},
    {"base_stat": 55},
    {"base_stat": 30},
    {"base_stat": 50},
    {"base_stat": 40},
    {"base_stat": 90}
]

//Raichu
const raichu = [
    {"base_stat": 60},
    {"base_stat": 90},
    {"base_stat": 55},
    {"base_stat": 90},
    {"base_stat": 80},
    {"base_stat": 100}
]

//Nidoqueen
const nidoqueen = [
    {"base_stat": 90},
    {"base_stat": 82},
    {"base_stat": 87},
    {"base_stat": 75},
    {"base_stat": 85},
    {"base_stat": 76}
]

//Nidoking
const nidoking = [
    {"base_stat": 81},
    {"base_stat": 92},
    {"base_stat": 77},
    {"base_stat": 85},
    {"base_stat": 75},
    {"base_stat": 85}
]

//Clefable
const clefable = [
    {"base_stat": 95},
    {"base_stat": 70},
    {"base_stat": 73},
    {"base_stat": 85},
    {"base_stat": 90},
    {"base_stat": 60}
]

//Wigglytuff
const wigglytuff = [
    {"base_stat": 140},
    {"base_stat": 70},
    {"base_stat": 45},
    {"base_stat": 75},
    {"base_stat": 50},
    {"base_stat": 45}
]

//Vileplume
const vileplume = [
    {"base_stat": 75},
    {"base_stat": 80},
    {"base_stat": 85},
    {"base_stat": 100},
    {"base_stat": 90},
    {"base_stat": 50}
]

//Poliwrath
const poliwrath = [
    {"base_stat": 90},
    {"base_stat": 85},
    {"base_stat": 95},
    {"base_stat": 70},
    {"base_stat": 90},
    {"base_stat": 70}
]

//Alakazam
const alakazam = [
    {"base_stat": 55},
    {"base_stat": 50},
    {"base_stat": 45},
    {"base_stat": 135},
    {"base_stat": 85},
    {"base_stat": 120}
]

//Victreebel
const victreebel = [
    {"base_stat": 80},
    {"base_stat": 105},
    {"base_stat": 65},
    {"base_stat": 100},
    {"base_stat": 60},
    {"base_stat": 70}
]

//Golem
const golem = [
    {"base_stat": 80},
    {"base_stat": 110},
    {"base_stat": 130},
    {"base_stat": 55},
    {"base_stat": 65},
    {"base_stat": 45}
]

//Ampharos
const ampharos = [
    {"base_stat": 90},
    {"base_stat": 75},
    {"base_stat": 75},
    {"base_stat": 115},
    {"base_stat": 90},
    {"base_stat": 55}
]

//Bellossom
const bellossom = [
    {"base_stat": 75},
    {"base_stat": 80},
    {"base_stat": 85},
    {"base_stat": 90},
    {"base_stat": 100},
    {"base_stat": 50}
]

//Azumarill
const azumarill = [
    {"base_stat": 100},
    {"base_stat": 50},
    {"base_stat": 80},
    {"base_stat": 50},
    {"base_stat": 80},
    {"base_stat": 50}
]

//Jumpluff
const jumpluff = [
    {"base_stat": 75},
    {"base_stat": 55},
    {"base_stat": 70},
    {"base_stat": 55},
    {"base_stat": 85},
    {"base_stat": 110}
]

//Roserade
const roserade = [
    {"base_stat": 60},
    {"base_stat": 70},
    {"base_stat": 55},
    {"base_stat": 125},
    {"base_stat": 105},
    {"base_stat": 100}
]

//Krookodile
const krookodile = [
    {"base_stat": 95},
    {"base_stat": 117},
    {"base_stat": 70},
    {"base_stat": 65},
    {"base_stat": 70},
    {"base_stat": 92}
]

// ##### Abilities 

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
    "aegislash-shield",
    "butterfree",
    "beedrill",
    "pidgeot",
    "pikachu",
    "raichu",
    "nidoqueen",
    "nidoking",
    "clefable",
    "wigglytuff",
    "vileplume",
    "poliwrath",
    "alakazam",
    "victreebel",
    "golem",
    "ampharos",
    "bellossom",
    "azumarill",
    "jumpluff",
    "roserade"
]

const statsFix = [
    aegislash,
    butterfree,
    beedrill,
    pidgeot,
    pikachu,
    raichu,
    nidoqueen,
    nidoking,
    clefable,
    wigglytuff,
    vileplume,
    poliwrath,
    alakazam,
    victreebel,
    golem,
    ampharos,
    bellossom,
    azumarill,
    jumpluff,
    roserade
]
