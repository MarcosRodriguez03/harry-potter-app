export interface ICharacter {
    id: string
    name: string
    alternate_names: string[]
    species: string
    gender: string
    house: string
    dateOfBirth: string
    yearOfBirth: number
    wizard: boolean
    ancestry: string
    eyeColour: string
    hairColour: string
    wand: {
        wood: string
        core: string
        length: number
    }
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alternate_actors: string[]
    alive: boolean
    image: string

    // "id": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
    // "name": "Harry Potter",
    // "alternate_names": [
    //     "The Boy Who Lived",
    //     "The Chosen One"
    // ],
    // "species": "human",
    // "gender": "male",
    // "house": "Gryffindor",
    // "dateOfBirth": "31-07-1980",
    // "yearOfBirth": 1980,
    // "wizard": true,
    // "ancestry": "half-blood",
    // "eyeColour": "green",
    // "hairColour": "black",
    // "wand": {
    //     "wood": "holly",
    //     "core": "phoenix feather",
    //     "length": 11
    // },
    // "patronus": "stag",
    // "hogwartsStudent": true,
    // "hogwartsStaff": false,
    // "actor": "Daniel Radcliffe",
    // "alternate_actors": [],
    // "alive": true,
    // "image": "https://ik.imagekit.io/hpapi/harry.jpg"
}