module.exports = function (shop, threshold) {
  var pull = [];
  for (var i = 0; i < shop.length; i++) {
    if (shop[i].age > threshold) {

      pull.push(shop[i]);
    }

  }
  return pull;


}