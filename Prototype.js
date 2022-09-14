/* 1. Yêu cầu:
Viết 1 method "logger" truyền vào 2 arguments: title, message, 
method này có thể sử dụng trên mọi array trong 1 file JS

Method này sẽ in ra title và message theo 1 format như sau: "title: message"
(suggestions: use prototype and __proto__)

vd: const arr1 = [1,2];
    arr1.logger('ERR', 'this is err message'); 
// in ra màn hình dòng chữ ERR: this is err message
    arr1.logger('INFO', 'this is info message'); 
// in ra màn hình dòng chữ INFO: this is info message
*/

Array.prototype.logger = function (title, message) {
  // return title +':'+ message

  console.log(title + ':' + message);
};

const arr1 = [1, 2];
const arr2 = ['1', '2'];

arr1.logger('ERR', 'this is err message');
arr2.logger('INFO', 'this is info message');

/* 
2.
Cho function constructor Student như sau

function Student(name, age) {
    this.name = name;
    this.age = age;
}

Yêu cầu thêm 1 method 'sayHi', khi thực thi method này sẽ in ra màn hình chữ 'hello', 
áp dụng được cho tất cả các object được tạo ra từ Student bằng toán tử new, nhưng không được thay đổi function Student
(sử dụng prototype hoặc __proto__)
VD: const quang = new Student('quang', 23);
    quang.sayHi(); //in ra màn hình chữ 'hello'

*/

// const Student = {
//   Student: function (name, age) {
//     this.name = name;
//     this.age = age;
//   },
// };

function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.sayHi = function () {
  console.log('Hello');
};

const quang = new Student('quang', 23);
quang.sayHi();

/* 
3.	Cho object personObject như sau:
const personObject = {
    fullName: function(){
        return this.firstName + ' ' + this.lastName    
    }
};
Yêu cầu thêm 1 method 'sayBye', khi thực thi method này sẽ in ra màn hình chữ 'goodbye', 
áp dụng được cho tất cả các object được tạo ra từ personObject bằng Object.create;
(sử dụng 2 cách)
const quang = Object.create(prototypeObject);
quang.sayBye(); //in ra màn hình chữ 'goodbye'

*/

const personObject = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

//c1
// personObject.sayBye = function () {
//   console.log('Good bye!!!');
// };
// const quang1 = Object.create(personObject);
// quang1.sayBye();

//c2
personObject.constructor.prototype.sayBye = function () {
  console.log('Good bye!!!');
};
console.log(personObject);
const quang1 = Object.create(personObject);
quang1.sayBye();

const quang2 = Object.create(personObject);
quang2.sayBye();
