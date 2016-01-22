//in HTML DOM eveything is a node:
//1. the document itself is a document node
//2. All HTML elements are element nodes
//3. all HTML attributes are attribute nodes (attributes provide additional info about an element)
//4. Text inside HTML elements are text nodes
//5. comments are comment nodes

window.onload = function (){
  /*var myName = 'Jon';*/

  function generateDocument(){
    
    //first div in HTML body
    var firstDiv = document.createElement('div');
    firstDiv.id = 'first';
    document.body.appendChild(firstDiv);

    var firstSpan = document.createElement('span');
    firstSpan.id = 'myName';
    document.getElementById('first').appendChild(firstSpan);

    var firstText = document.createTextNode('Jason');
    document.getElementById('myName').appendChild(firstText);

    //second div in HTML body
    
    var secondDiv = document.createElement('div');
    secondDiv.id = 'second';
    document.body.appendChild(secondDiv);

    var secondSpan = document.createElement('span');
    secondSpan.id = 'yourName';
    document.getElementById('second').appendChild(secondSpan);

    var secondText = document.createTextNode('Joe');
    document.getElementById('yourName').appendChild(secondText);

    //third div
    
    var thirdDiv = document.createElement('div');
    thirdDiv.id = 'third';
    document.body.appendChild(thirdDiv);

    var thirdSpan = document.createElement('span');
    thirdSpan.id = 'neighborName';
    document.getElementById('third').appendChild(thirdSpan);

    var thirdText = document.createTextNode('Victor');
    document.getElementById('neighborName').appendChild(thirdText);

    //fourth div
    var fourthDiv = document.createElement('div');
    fourthDiv.id = 'nested';
    document.body.appendChild(fourthDiv);

    var fourthSpan = document.createElement('span');
    fourthSpan.id = 'deeperNested';
    document.getElementById('nested').appendChild(fourthSpan);

    var paraElement = document.createElement('p');
    paraElement.id = 'superNested';
    document.getElementById('deeperNested').appendChild(paraElement);

    var fourthText = document.createTextNode("YAY");
    document.getElementById('superNested').appendChild(fourthText);    
  }

  generateDocument();
};

