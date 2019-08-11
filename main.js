var form=document.getElementById("my-form");
var list=document.getElementById("items");

//form submit
form.addEventListener("submit",addUsers);
//Delete event
list.addEventListener("click",deleteUser);

//function to add users
function addUsers(e){
    e.preventDefault();

    //get name and email
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;

    //Create new li element

    var li=document.createElement('li');
    //add class properties 
    li.className="list-group-item";
    //Add text node with input value
    text=document.createTextNode(`Name:${name}, Email:${email}`);
    li.appendChild(text);

    //create delete button element
    var deletebut=document.createElement('button');
    deletebut.className="exit-button";
    deletebut.appendChild(document.createTextNode("X"));

    //append button to li
    li.appendChild(deletebut);
    //append li to list
    list.appendChild(li);
}

function deleteUser(e){
    if(e.target.classList.contains("exit-button"))
    {
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            list.removeChild(li);

        }
    }
}