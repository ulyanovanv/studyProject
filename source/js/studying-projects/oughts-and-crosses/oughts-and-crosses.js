import $ from '../../vendor/jquery.min.js';

const SYMBOL_1 = 'X';
const SYMBOL_2 = 'O';
const WIN_CONDITIONS = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
$(function() {
    var game = new Game();
});


function Game() {
    this.players = [ new Player(SYMBOL_1),  new Player(SYMBOL_2) ];
    this.currentPlayer=this.players[0];
    this.victoryNoone = 0;
    this.cells = [];
    for (var i = 1; i <= 9; i++) {
        this.cells[i] = new Cell(this, i);
        // console.log(this.cells[i].symbol); // - здесь создаются объекты для клеток
    }
    this.nextTurn = function() {
        this.currentPlayer = this.currentPlayer.symbol === this.players[0].symbol ? this.players[1] : this.players[0];
        $("#whose-turn span").text(this.currentPlayer.symbol);
        this.isWinner();
    }
    this.clearing = function(){
        for (var key in this.cells){
            this.cells[key].clear();
        }
    }
    $("#start-again").on('click', this.clearing.bind(this));

    this.isWinner = function() {
        for (var i=0; i<WIN_CONDITIONS.length; i++) {
            var firstNum = WIN_CONDITIONS[i][0];
            var secondNum = WIN_CONDITIONS[i][1];
            var thirdNum = WIN_CONDITIONS[i][2];
            var firstSymbol = this.cells[firstNum].symbol;
            var secondSymbol = this.cells[secondNum].symbol;
            var thirdSymbol = this.cells[thirdNum].symbol;
            if (firstSymbol && firstSymbol===secondSymbol && firstSymbol===thirdSymbol){
                for(var key in this.players) {
                    if (firstSymbol===this.players[key].symbol){
                        this.players[key].win();
                        this.clearing();
                        return;
                    }
                }
            }
        }
        for (var i in this.cells){
            if(!this.cells[i].symbol){
                return;
            }
        }
        this.nodobyWon();
    }
    this.nodobyWon = function(){
        this.victoryNoone ++;
        $("#winDraw").text(this.victoryNoone);
        this.clearing();
    }
}

function Player(symbol) {
    this.symbol = symbol;
    this.victory = 0;
    this.win = function(){
        this.victory ++;
        $("#win" + this.symbol).text(this.victory);
    }
}

function Cell(game, number) {
    this.game = game;
    this.number = number;
    this.symbol = '';
    this.htmlEl = $('.c' + this.number);
    // console.log(this.cells);
    this.addSymbol = function(symbol) {
        this.symbol = symbol;
        this.htmlEl.text(symbol);
    }
    this.clear = function() {
        this.symbol = '';
        this.htmlEl.text('');
    }
    this.click = function() {
        if (this.symbol) return;
        this.addSymbol(this.game.currentPlayer.symbol);
        this.game.nextTurn();

    }
    this.htmlEl.on('click', this.click.bind(this));
}
