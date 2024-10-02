import Character from '../classes/Character';
import Daemon from '../classes/Daemon';
import Magician from '../classes/Magician';

test.each([
    [
        new Daemon('Daemon', 5),

        {
            name: 'Daemon',
            type: 'Daemon',
            health: 100,
            level: 1,
            _attack: 10,
            defence: 40,
            _stoned: false,
            distance: 5
        }
    ],

    [
        new Magician('Magician', 5),

        {
            name: 'Magician',
            type: 'Magician',
            health: 100,
            level: 1,
            _attack: 10,
            defence: 40,
            _stoned: false,
            distance: 5
        }
    ]
])('создание нового персонажа', (character, expected) => {
    expect(character).toEqual(expected);
})

test('ошибка короткого имени', () => {
    expect(() => {
        new Daemon('D');
    }).toThrow();
});

test('ошибка длинного имени', () => {
    expect(() => {
        new Daemon('DaemonDaemonDaemon', 5);
    }).toThrow();
});

test('ошибка типа имени', () => {
    expect(() => {
        new Character('Character', 'Boss');
    }).toThrow();
});

test('ошибка повышения уровня', () => {
    const deamon = new Daemon('Daemon', 5);
    deamon.health = 40;
    deamon.levelUp();
    expect(deamon).toEqual({
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        level: 2,
        _attack: 12,
        _stoned: false,
        defence: 48,
        distance: 5
    })
})

test('повышение уровня при смерти', () => {
    const deamon = new Daemon('Daemon', 5);
    deamon.health = 0;
    expect(() => {
        deamon.levelUp();
    }).toThrow();
})

test('урон в 30 очков', () => {
    const deamon = new Daemon('Daemon', 5);
    deamon.damage(30);
    expect(deamon.health).toBe(82);
})

test('смертельный урон', () => {
    const deamon = new Daemon('Daemon', 5);
    deamon.damage(300);
    expect(() => {
        deamon.damage(300);
    }).toThrow();
})

test('проверка нулевой атаки', () => {
    const deamon = new Daemon('Daemon', 10);
    expect(deamon.attack).toBe(0);
})

test('проверка атаки при stoned', () => {
    const deamon = new Daemon('Daemon', 2);
    deamon.attack = 100;
    deamon.stoned = true;
    expect(deamon.attack).toBe(85);
})

test('проверка stoned', () => {
    const deamon = new Daemon('Daemon', 10);
    deamon.stoned = true;
    expect(deamon.stoned).toBe(true);
})

test('проверка атаки', () => {
    const deamon = new Daemon('Daemon', 2);
    deamon.attack = 10;
    expect(deamon.attack).toBe(9);
})