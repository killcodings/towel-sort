module.exports = function towelSort(matrix) {
    if (typeof matrix == "undefined" || matrix.length == 0) return [];

    let mass = [];
    for (let i = 0; i < matrix.length; i++) {
        mass = mass.concat(i % 2 == 0 ? matrix[i] : matrix[i].reverse());
    }

    return mass;
};
