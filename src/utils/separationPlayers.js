export default function separationPlayersByTeams(array, callbackCondition) {
    return array.reduce(([first, second], elem) => {
        return callbackCondition(elem) ? [[...first, elem], second] : [first, [...second, elem]];
    }, [[], []]);
}