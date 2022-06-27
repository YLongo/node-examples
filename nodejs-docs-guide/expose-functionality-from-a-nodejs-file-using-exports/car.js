
// const car = {
//     brand: 'ford',
//     model: 'fiesta'
// }

// 使用以下两种方式都可以将car对象导出以供其它模块使用
// 但是在其它模块的访问方式有差异
// module.exports = car;
// exports.car = car;

exports.car = {
    brand: 'ford',
    model: 'fiesta'
};

module.exports = {
    brand: 'tesla',
    model: 'model s'
};


