import Character from './Character';

export default class MagicСhange extends Character {
    constructor(name, distance, type='MagicСhange') {
        super(name, type);
        this._attack = 10;
        this._stoned = false;
        this.defence = 40;
        this.distance = distance
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    set attack(value) {
        this._attack = value;
    }

    get attack() {
        if (this.distance < 0 || this.distance > 5) {
            return 0;
        }

        let attackValue = this._attack - (this._attack / 10) * (this.distance - 1);

        if (this._stoned === true) {
            attackValue -= Math.log2(this.distance) * 5;
        }

        return Math.floor(attackValue);
    }
}