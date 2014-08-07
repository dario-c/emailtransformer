## JSON
JSON is the string representation of a JavaScript object literal (a serialized object). 
This is an object literal:

    {name: 'Bob', surname: 'Wayne'}

This is its JSON representation:

    '{"name":"Bob","surname":"Wayne"}'

As you can see they are very similar but not the same. JSON is not
valid JavaScript, it's just a string. To convert JSON to/from 
JavaScript, there is a built-in utility implemented by all modern
browsers: 

    var theObject = JSON.parse(theJSONstring); // JSON to JS
    var string = JSON.stringify(theJSobject);  // JS to JSON

JSON is mostly used to exchange data between the browser and the 
server side as well as to write configuration files.


