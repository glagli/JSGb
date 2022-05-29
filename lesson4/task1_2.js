"use stict";

console.log("task1_1");
console.log("es5");

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (Mytext) {
    this.text = Mytext
}

function AttachedPost(author, text, date) {
    Post.call(this,author,text,date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true
}


let post1 = new Post("Smith", "MyText1234","2022-10-22");
console.log('Начальные характеристики: ' + 'author = ' + post1.author + ', text = ' + post1.text + ', date = ' + post1.date);
post1.edit("NewText")
console.log('Xарактеристики продукта после применения функции: ' + 'author = ' + post1.author + ', text = ' + post1.text + ', date = ' + post1.date);

console.log("_____________________________________________________");

let attachedPost1 = new AttachedPost("Bobi", "MyText4321","2022-02-22");
console.log('Начальные характеристики: ' + 'author = ' + attachedPost1.author + ', text = ' + attachedPost1.text + ', date = ' + attachedPost1.date + ', highlighted = ' + attachedPost1.highlighted);
attachedPost1.edit("NewText")
attachedPost1.makeTextHighlighted()
console.log('Xарактеристики продукта после применения функции: ' + 'author = ' + attachedPost1.author + ', text = ' + attachedPost1.text + ', date = ' + attachedPost1.date + ', highlighted = ' + attachedPost1.highlighted);

