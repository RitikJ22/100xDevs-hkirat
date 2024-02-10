/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var spent = {};
  for (var i = 0; i < transactions.length; i++) {
    var obj = transactions[i];
    if (spent[obj.category]) {
      spent[obj.category] = spent[obj.category] + obj.price;
    } else spent[obj.category] = obj.price;
  }

  var keys = Object.keys(spent);

  var ans = [];
  for (var i = 0; i < keys.length; i++) {
    category = keys[i];
    var obj = {
      category: category,
      totalSpent: spent[category],
    };
    ans.push(obj);
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
