import * as _ from "lodash";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

type TurnTypes = "H" | "S" | "Q";

let deck = [
    "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK",
    "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK",
    "HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK",
    "SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK"
];

class BlackJack {
    winner: null | "player1" | "player2" | "tie" = null;
    player1: Array<string> = [];
    player2: Array<string> = [];
    constructor() {
        for (let i = 0;i < 2;i++) {
            this.player1.push(BlackJack.getRandomCard());
            this.player2.push(BlackJack.getRandomCard());
        }
        if (BlackJack.getDeckValue(this.player1) == 21 || BlackJack.getDeckValue(this.player2) > 21) {
            this.winner = "player1";
        } else if (BlackJack.getDeckValue(this.player2) == 21 || BlackJack.getDeckValue(this.player1) > 21) {
            this.winner = "player2"
        }
    }
    nextTurn(input: TurnTypes): void {
        switch (input) {
            case "H":
                this.player1.push(BlackJack.getRandomCard());
                if (BlackJack.getDeckValue(this.player1) == 21) {
                    this.winner = "player1";
                } else if (BlackJack.getDeckValue(this.player1) > 21) {
                    this.winner = "player2";
                }
                break;
            case "S":
                this.enemyTurn();
                break;
            default:
                break;
        }
    }
    private enemyTurn(): void {
        let deckValue = BlackJack.getDeckValue(this.player2);
        if (deckValue < 12) {
            console.log("dval 12")

            this.player2.push(BlackJack.getRandomCard());

            deckValue = BlackJack.getDeckValue(this.player2);

            if (deckValue == 21) {
                this.winner = "player2";
            } else if (deckValue > 21) {
                this.winner = "player1";
            } else {
                this.enemyTurn();
            }
        } else if (deckValue == 12) {
            const willStand = Math.random() >= 0.9;
            if (!willStand) {
                this.player2.push(BlackJack.getRandomCard());

                const player1Value = BlackJack.getDeckValue(this.player1);

                if (player1Value < deckValue) {
                    this.winner = "player2";
                } else if (player1Value > deckValue) {
                    this.winner = "player1";
                } else {
                    this.winner = "tie";
                }

                return;
            }

            deckValue = BlackJack.getDeckValue(this.player2);

            if (deckValue == 21) {
                this.winner = "player2";
            } else if (deckValue > 21) {
                this.winner = "player1";
            } else {
                this.enemyTurn();
            }
        } else if (deckValue <= 16) {
            const willStand = Math.random() >= 0.3;
            if (!willStand) {
                this.player2.push(BlackJack.getRandomCard());

                const player1Value = BlackJack.getDeckValue(this.player1);

                if (player1Value < deckValue) {
                    this.winner = "player2";
                } else if (player1Value > deckValue) {
                    this.winner = "player1";
                } else {
                    this.winner = "tie";
                }

                return;
            }

            deckValue = BlackJack.getDeckValue(this.player2);

            if (deckValue == 21) {
                this.winner = "player2";
            } else if (deckValue > 21) {
                this.winner = "player1";
            } else {
                this.enemyTurn();
            }
        } else {
            const willStand = Math.random() >= 0.05;
            if (!willStand) {
                this.player2.push(BlackJack.getRandomCard());
            }

            deckValue = BlackJack.getDeckValue(this.player2);

            if (deckValue == 21) {
                this.winner = "player2";
            } else if (deckValue > 21) {
                this.winner = "player1";
            } else {
                const player1Value = BlackJack.getDeckValue(this.player1);

                if (player1Value < deckValue) {
                    this.winner = "player2";
                } else if (player1Value > deckValue) {
                    this.winner = "player1";
                } else {
                    this.winner = "tie";
                }
            }
        }
    }
    static getRandomCard(): string {        
        return deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
    }
    static getCardValue(card: string): number {
        if (!_.isNaN(parseInt(card[1]))) {
            return parseInt(card[1]);
        } else {
            switch (card[1]) {
                case "A":
                    return Math.random() >= 0.5 ? 1 : 11;
                default:
                    return 10;
            }
        }
    }
    static getDeckValue(cards: Array<string>) {
        return cards.map(this.getCardValue).reduce((t, n) => t + n);
    }
}

const game = new BlackJack();

console.log("BLACKJACK\n\n");
console.log(`Your cards: ${game.player1.join(", ")}. Total value: ${BlackJack.getDeckValue(game.player1)}`);
console.log(`Enemy cards: ${game.player2[0]}, ?. Total value: ?.`);

rl.on("line", (line) => {
    line = line.toLowerCase();

    if (/(h|s|q)/i.test(line)) {
        switch (line) {
            case "q":
                game.nextTurn("Q");
                break;
            case "h":
                game.nextTurn("H");
                break;
            case "s":
                game.nextTurn("S");
                break;
            default:
                break;
        }
    } else {
        console.log("Invalid input! Try again.");
        return;
    }

    if (!_.isNull(game.winner)) {
        console.log(`Your cards: ${game.player1.join(", ")}. Total value: ${BlackJack.getDeckValue(game.player1)}`);
        console.log(`Enemy cards: ${game.player2.join(", ")}. Total value: ${BlackJack.getDeckValue(game.player2)}.\n`);

        if (game.winner == "tie") {
            console.log("TIE! None of you won!");
        } else {
            console.log(`WINNER: ${game.winner == "player1" ? "YOU" : "OPPONENT"}!`);
        }
        rl.close();
    } else {
        console.log(`Your cards: ${game.player1.join(", ")}. Total value: ${BlackJack.getDeckValue(game.player1)}`);
        console.log(`Enemy cards: ${game.player2[0]}, ?. Total value: ?.\n`);
    }
});