function scope() {
  if (true) {
    var test = 111
  }

  console.log('===============>', test);
}

scope()

function scope2() {
  var test = 222;
  function inner() {
    console.log('===============>', test);
  }
  inner();
}

scope2();


function outside(x) {
  function inside(y) {
    return x + y
  }
  return inside;
}

const fn_inside = outside(3);
const result = fn_inside(5);
console.log('===============>', result);

console.log('===============>', outside(3)(5));


/**
 * Scope channing: độ ưu tiên của context biến từ trong ra ngoài
 * B chưa context A access đến x
 * C chứa context B nên access được cả A
 */

function A(x) {
  function B(y) {
    function C(z) {
      console.log('===============>', x + y + z );
      return x + y + z
    }
    C(3);
  }
  B(2);
}
console.log(A(1))


/**
 * Độ ưu tiên của biến ở function bên trong ưu tiên trước biến từ bên ngoài truyền vào nếu trùng tên biến
 */

 function outter(){
   var x = 10
   function inner (x){
     return x
   }

   return inner
 }

 console.log(outter()(20))

//  Closure pitfalls

// var add_the_handlers = function (nodes) {
//   var i;
//   for (i = 0; i < nodes.length; i += 1) {
//     nodes[i].onclick = function (e) {
//       alert(i);
//     };
//   }
// };
// nodes = document.getElementById("click");
// add_the_handlers(nodes);


// solve

// var add_the_handlers = function (nodes) {
//   var helper = function (i) {
//     return function (e) {
//       alert(i);
//     };
//   };
//   var i;
//   for (i = 0; i < nodes.length; i += 1) {
//     modes[i].onclick = helper(i);
//   }
// };
