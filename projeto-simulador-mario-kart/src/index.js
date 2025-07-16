const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {

    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        case random < 100:
            result = "CONFRONTO";
            break;
    }

    return result;

}


async function logRollResult(charactername, block, diceResult, atributte) {
    console.log(`${charactername} rolou o dado de ${block} ${diceResult} + ${atributte} = ${diceResult + atributte}`)
}


async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {

        console.log(`RODADA ${round}:`);
        //sortear bloco
        let block = await getRandomBlock();
        console.log(`BLOCO: ${block} `)

        //rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block == "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
        }
        if (block == "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }
        if (block == "CONFRONTO") {
            powerResult1 = diceResult1 + character1.PODER;
            powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME}  confrontou o ${character2.NOME}`);

            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);



            character1.PONTOS -= powerResult1 > powerResult2 && character1.PONTOS > 0 ? 1 : 0;
            character2.PONTOS -= powerResult2 > powerResult1 && character2.PONTOS > 0 ? 1 : 0;
            console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto foi perdido" : "")

        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto`)
            character1.PONTOS++
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NOME} marcou um ponto `)
            character2.PONTOS++
        }
        console.log("------------------------------------------------")
    }
}

(async function main() {
    console.log(`Corrida entre ${player1.NOME} e ${player2.NOME} começando...`);
    console.log(``);

    await playRaceEngine(player1, player2);
})();

