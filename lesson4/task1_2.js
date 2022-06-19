"use stict";
console.log("_____________________________________________________");
console.log("task1_2");
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

console.log("_____________________________________________________");
console.log("es6");

class PostEs6 {
    constructor(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

    edit(Mytext) {
        this.text = Mytext
    }
}
class AttachedPostEs6 extends PostEs6{
    constructor(author, text, date){
        super(author,text,date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true
    }
}

let post2 = new PostEs6("Smith", "MyText1234","2022-10-22");
console.log('Начальные характеристики: ' + 'author = ' + post2.author + ', text = ' + post2.text + ', date = ' + post2.date);
post2.edit("NewText")
console.log('Xарактеристики продукта после применения функции: ' + 'author = ' + post2.author + ', text = ' + post2.text + ', date = ' + post2.date);

console.log("_____________________________________________________");

let attachedPost2 = new AttachedPostEs6("Bobi", "MyText4321","2022-02-22");
console.log('Начальные характеристики: ' + 'author = ' + attachedPost2.author + ', text = ' + attachedPost2.text + ', date = ' + attachedPost2.date + ', highlighted = ' + attachedPost2.highlighted);
attachedPost2.edit("NewText")
attachedPost2.makeTextHighlighted()
console.log('Xарактеристики продукта после применения функции: ' + 'author = ' + attachedPost2.author + ', text = ' + attachedPost2.text + ', date = ' + attachedPost2.date + ', highlighted = ' + attachedPost2.highlighted);
