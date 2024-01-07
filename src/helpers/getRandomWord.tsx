let words:string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'TELEFONO',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',
    'PROGRAMACION',
    'SOFTWARE',
    'FULLSTACK',
]


export function getRandomWord(){
    const randomize = Math.floor(Math.random() * words.length);
    const randomWord = words[randomize]
    return randomWord;
}