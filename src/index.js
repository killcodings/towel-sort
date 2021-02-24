
// You should implement your task here.

module.exports = function towelSort(matrix) {


  if (typeof matrix === "undefined") {
      return [];
  }
  else {
      let mass = [];
      for (i = 0; i < matrix.length; i++) {
          if (i % 2 == 0) {

              for (j = 0; j < matrix[i].length; j++) {

                  mass.push(matrix[i][j])
              }
          } else {
              let matx = matrix[i].reverse()
              for (k = 0; k < matx.length; k++) {

                  mass.push(matx[k])

              }
          }

      }
      console.log(mass)
      return mass;
  }
}