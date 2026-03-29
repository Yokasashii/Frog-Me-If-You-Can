const ennemi1 = {
 name: 'zombie collègue',
 x: 0, y: 0, // Position sur la grille
 stats: {
 hp: 100, maxHp: 100,
 attack: 15,
 type_Attack: "arme contandante",
 defense: 5,
 speed: 1,
 faiblesse: "arme contandante"
 },
 loot: {
    xpDrop: 15,
    goldDrop: 10
 },
 turn: null
};

const ennemi2 = {
 name: 'zombie secrétaire',
 x: 0, y: 0, // Position sur la grille
 stats: {
 hp: 100, maxHp: 100,
 attack: 15,
 type_Attack: "arme contandante",
 defense: 5,
 speed: 1,
 faiblesse: "arme tranchante"
 },
 loot: {
    xpDrop: 15,
    goldDrop: 10
 },
 turn: null
};

const ennemi3 = {
 name: 'zombie n+1',
 x: 0, y: 0, // Position sur la grille
 stats: {
 hp: 100, maxHp: 100,
 attack: 15,
 type_Attack: "arme contandante",
 defense: 5,
 speed: 1,
 faiblesse: "arme contandante"
 },
 loot: {
    xpDrop: 15,
    goldDrop: 10
 },
    turn: null
};

const boss = {
 name: 'patron',
 x: 0, y: 0, // Position sur la grille
 stats: {
 hp: 500, maxHp: 100,
 attack: 20,
 type_Attack: "arme contandante",
 defense: 5,
 speed: 1,
 faiblesse: "arme contandante"
 },
 loot: {
    xpDrop: 15,
    goldDrop: 10
 },
    turn: null
};

const armor = {
    chemise : {
        resistance : 10,
        type :  "arme contandante"
    },
    veste : {
        resistance : 20,
        type :  "arme contandante"
    },
    giletParballe  : {
        resistance : 30,
        type :  "arme contandante"
    },
    ArmureDeSamourai : {
        resistance : 40,
        type :  "arme tranchante"
    }
}

const weapon = {
    regleEnBois : {
        damage : 10,
        type :  "arme contandante"
    },
    bat : {
        damage : 20,
        type :  "arme contandante"
    },
    piedDeBiche : {
        damage : 30,
        type :  "arme contandante"
    },
    katana : {
        damage : 40,
        type :  "arme tranchante"
    }
}