export function lifeShowing (hero) {
    //console.log(hero.name, hero.health)
    if (hero.health < 15) {
        return 'critical';
    }
    if (hero.health >= 15 && hero.health < 50) {
        return 'cwounded';
    }
    if (hero.health >= 50) {
        return 'healthy';
    }
}