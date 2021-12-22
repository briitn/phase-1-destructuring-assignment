const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
let [firstt,second,thirdd,fourthh,lastt]=farmAnimals.split(' ')
let moo=firstt
let neigh=second
let baa=thirdd
let oink=fourthh
let cluck=lastt
//console.log(moo)
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
let [first, ,third,fourth,last]=farmAnimals.split(' ')
 let bessie=first
 let dolly=third
 let babe=fourth
 let little=last
//console.log(first)

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
let [first1, ,third3,fourth4,]=farmAnimals.split(' ')
let blackAndWhite=first1
let black=third3
let pink=fourth4
//console.log(fourth4)
// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
let [color1,color2,color3,color4,color5,color6,color7]=colors
let red=color1
let orange=color2
let yellow=color3
let green=color4
let blue=color5
let indigo=color6
let violet=color7

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let [colorr,coloro,colory,colorg,colorb, ,colorv]=colors
let r=colorr
let o=coloro
let y=colory
let g=colorg
let b=colorb
let v=colorv
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const[, , , , ,colorin , ,]=colors
const indg=colorin
//console.log(colorin)
// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const {muppetName,color,song,job,partner}=muppet
const muppetname1=muppetName
const color9=color
const song1=song
const job1=job
const partner1=partner



// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const {song2,song4}=nestedMuppet.album.theMuppetMovie
const {nestedJob,nestedPartner}=nestedMuppet
const songs2=song2
const songs4=song4
const job2=nestedJob
const partner2=nestedPartner
console.log(job2)