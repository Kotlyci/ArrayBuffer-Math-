export default class Character {
    static types = [
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
        'MagicСhange',
    ]

    constructor(name, type) {
        if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
            this.name = name;
        } else {
            throw new Error('Имя должно быть строкой и от 2 до 10 символов!')
        }

        if (typeof type === 'string' && Character.types.includes(type)) {
            this.type = type;
        } else {
            throw new Error(`Тип персонажа должен быть ${this.types.join(' ')}`)
        }

        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить левел умершего(')
        }

        this.level += 1;
        this._attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health <= 0) {
            throw new Error('Персонаж умер(')
        }

        this.health -= points * (1 - this.defence / 100);
    }
}