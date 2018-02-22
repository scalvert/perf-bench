var setup = function() {
  var arr = [];
  var item0 = 0;
  var item1 = 'item1';
  var item2 = true;
  var item3 = {};
  var item4 = function() {};
};

require('do-you-even-bench')([
  {
    name: 'flat array',
    setup: setup,
    fn: function() {
      arr.push(item0, item1, item2, item3, item4);
    },
  },
  {
    name: 'wrapping object',
    setup: setup,
    fn: function() {
      arr.push({ item0, item1, item2, item3, item4 });
    },
  },
]);
