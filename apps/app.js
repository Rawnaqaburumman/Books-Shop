'use strict'

let booksArray =[];

function Books (bookName , price ){
this.bookName = bookName;
this.price = price;
this.numberOfPages=   Math.floor((Math.random() * 500) + 1);;
booksArray.push(this);

}

getinfo ();

Books.prototype.renderRows = function () {



    let parent = document.getElementById('table');
    let newRow = document.createElement('tr');
    parent.appendChild(newRow);


        let data= document.createElement('td');
        newRow.appendChild(data);
        data.textContent = this.bookName;

        let dataa= document.createElement('td');
        newRow.appendChild(dataa);
        dataa.textContent =this.numberOfPages;

     
        let dataaa= document.createElement('td');
        newRow.appendChild(dataaa);
        dataaa.textContent= this.price;


}

let theForm = document.getElementById('bookForm');
theForm.addEventListener('submit', handleevent);

function handleevent (event) {
    
    event.preventDefault();
    console.log(event.target.bookname.value );
 let  newName = event.target.bookname.value 
let   newPrice = event.target.bookprice.value;


let newBook = new Books ( newName ,parseInt(newPrice) );
console.log(booksArray);
// savedinfo ();
newBook.renderRows();
savedinfo ()

}





function savedinfo (){
    let convert = JSON.stringify(booksArray);
    localStorage.setItem('booksArray', convert);
  


}

function getinfo (){
    let data = localStorage.getItem('booksarray');
    console.log(data);
    let parsdata = JSON.parse(data )
    console.log(parsdata);
    if (parsdata){
        for (let i =0 ; i< booksArray.length ; i++ ){
            let newObject = new Books (booksArray[i].this.bookName , booksArray[i].this.price);

        }



    }
   
 
}

