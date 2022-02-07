var items = [{
    id: "002",
    name: 'item 001',
    image: '/HONDA/ACCORD.jpg',
    price:34000000,
    quantity: 0

}, {
    id: "003",
    name: 'item 002',
    image: '/HONDA/BRV.webp',
    price:65000000,
    quantity: 0

}, {
    id: "004",
    name: 'item 003',
    image: '/HONDA/CRZ.jpg.crdownload',
    price:45690000,
    quantity: 0

}, {
    id: "005",
    name: 'item 004',
    image: '/TOYOTA/FORTUNER.jpeg',
        price:1365000,
    quantity: 0

}, {
    id: "006",
    name: 'item 005',
    image: '/TOYOTA/pixel.jpg',
        price:54000000,
    quantity: 0

}, {
    id: "007",
    name: 'item 006',
    image: '/TOYOTA/II.jpg',
        price:25000000,
    quantity: 0

}, {
    id: "008",
    name: 'item 007',
    image: '/KIA/BB.jpg',
        price:36000000,
    quantity: 0

}, {
    id: "009",
    name: 'item 008',
    image: '/KIA/SS.jpg',
        price:42300000,
    quantity: 0

}, {
    id: "010",
    name: 'item 009',
    image: '/KIA/VV.jpg',
        price:32100000,
    quantity: 0

}];
// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}