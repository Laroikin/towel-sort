// You should implement your task here.

module.exports = function towelSort(matrix) {
    let ans = [];
    if(!matrix){
      return ans;
    }
    matrix.forEach((ele, index) => {
        if (index % 2 == 0) {
            ele.forEach((e) => ans.push(e));
        } else {
            ele.reverse().forEach((e) => ans.push(e));
        }
    });
    return ans;
};
