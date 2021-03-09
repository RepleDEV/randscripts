#include <iostream>
#include <stdlib.h>
#include <vector>
#include <time.h>
#include <string>

#define nl "\n"

using namespace std;

class Game {
    public:
        // Player's (you) cards
        vector<string> cards_player1;
        // Computer's (enemy) cards
        vector<string> cards_player2;
        // House's deck. Standard 52 card deck.
        vector<string> deck = {
            "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK",
            "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK",
            "HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK",
            "SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK"
        };
    public: 
        // Constructor
        Game() {
            srand((unsigned) time(0));
            for (int i = 0;i < 2;++i) {
                const int cardIndex = (rand() % deck.size());
                cards_player1.push_back(deck[cardIndex]);
                deck.erase(deck.begin() + cardIndex);
            }
            for (int i = 0;i < 2;++i) {
                const int cardIndex = (rand() % deck.size());
                cards_player2.push_back(deck[cardIndex]);
                deck.erase(deck.begin() + cardIndex);
            }
        }
        vector<vector<string>> get_decks() {
            return {cards_player1, cards_player2};
        }
};

// From: https://stackoverflow.com/a/4654718/13160047
bool is_number(const string& s) {
    string::const_iterator it = s.begin();
    while (it != s.end() && isdigit(*it)) ++it;
    return !s.empty() && it == s.end();
}

vector<int> get_values(vector<string> deck) {
    vector<int> res;
    for (int i = 0;i < deck.size();++i) {
        const string card = deck.at(i).substr(1);
        if (is_number(card)) {
            res.push_back(stoi(card));
        } else {
            if (card == "A") {
                srand((unsigned) time(0));
                const int rng = (rand() % 2);
                if (rng) {
                    res.push_back(11);
                } else {
                    res.push_back(1);
                }
            } else if (card == "J" || card == "Q" || card == "K") {
                res.push_back(10);
            }
        }
    }
    return res;
}

void print_card_values(Game game) {
    const vector<int> card_values_player1 = get_values(game.cards_player1);
    const vector<int> card_values_player2 = get_values(game.cards_player2);
    
    int total_value_player1 = 0;
    int total_value_player2 = 0;

    cout << "Your cards:";

    for (int i = 0;i < card_values_player1.size();++i) {
        const int card = card_values_player1.at(i);
        cout << " " << card;
        total_value_player1 += card;
    }

    cout << ", total value: " << total_value_player1;

    cout << ". Your opponent's cards:";
    for (int i = 0;i < card_values_player2.size();++i) {
        const int card = card_values_player2.at(i);
        cout << " " << card;
        total_value_player2 += card;
    }

    cout << ", total value: " << total_value_player2;

    cout << "." << nl;
}

void print_next_turn() {
    cout << "Type h to HIT, or s to STAND" << nl;
}


int main() {
    cout << "Welcome to Black Jack in C++!" << nl;

    char play_game;
    cout << "Play? (y/n)" << nl;
    cin >> play_game;
    if (play_game != 'y') {
        return 0;
    }

    Game game;

    vector<int> card_values_player1 = get_values(game.cards_player1);
    vector<int> card_values_player2 = get_values(game.cards_player2);

    print_card_values(game);
    print_next_turn();

    return 0;
}  
