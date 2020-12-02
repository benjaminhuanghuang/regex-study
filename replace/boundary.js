/*
    ^	以xxx开头
    $	以xxx结尾
    \b	单词边界
    \B	非单词边界
*/

"img/png/img-1.png".replace(/img/g, "image"); // image/png/image-1.png
"img/png/img-1.png".replace(/^img/g, "image"); // image/png/img-1.png

"img/png/img-1.png".replace(/png/g, "jpg"); // img/jpg/img-1.jpg
"img/png/img-1.png".replace(/png$/g, "jpg"); // img/png/img-1.jpg

"This is all I have.".replace(/is/g, "IS"); // ThIS IS all I have.
"This is all I have.".replace(/\bis\b/g, "IS"); // This IS all I have.
"This is all I have.".replace(/\Bis\b/g, "IS"); // ThIS is all I have.
