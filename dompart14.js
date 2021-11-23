

var form = document.getElementById('addForm');
var itemList =document.getElementById('items');

//form submit Event----//

form.addEventListener('submit', addItem);

itemList.addEventListener('click',removeItem);

//-----aDdItem--//

function addItem(e){
    e.preventDefault();

    //---------Get input Value-----//
    var item = document.getElementById('item').value;
    // console.log(item);

    //-----create new Li element----//

    var li = document.createElement('li');

    //----class Name--//
    li.className = 'list-group-item';
    //---------Add text Node with Input Value-----//
    
    li.appendChild(document.createTextNode(item));

    //------Create delete button-------//
    
    var deleteBtn = document.createElement('button');
    
    
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    

    //----------Append textNode---------//
    deleteBtn.appendChild(document.createTextNode('x'));


    //--------Append button to Li--//
    li.appendChild(deleteBtn);

    itemList.appendChild(li);



}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}
