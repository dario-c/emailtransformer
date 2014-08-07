## Common sources of defects
In a traditional web, every user action (event) is processed in the 
server side which sends back a refreshed page that is rendered in
the browser. As every request refreshes the page, its controls (widgets: buttons, labels...)
are reset. It's like restarting the GUI. 
On the other hand, rich JavaScript applications process the events
in the browser without page reloads. The code in the browser sends
and receive mostly data from the server. Well, sometimes
certain chunks of the GUI are loaded from the server via JavaScript
but is not the whole page. Now the controls maintain state
and they have to be cleaned up explicitly. 

Imagine a list of items that you can click. When an item is clicked
the application pops up a modal dialog displaying detailed 
information about the selected item. Let's say the dialog contains
three text boxes to display three item's properties. Then the user 
closes the dialog and selects another item, bringing the dialog 
back to the front. If programmers didn't clean up the text 
boxes within the dialog, it might display data from the old item
mixed up with the last item selected.

For this reason, it's worth repeating operations when exploring
the application seeking for defects. Certain operations may work
well for the first time but fail on consecutive trials.

Transient data may be another source of trouble. JavaScript 
applications may cache data in the browser, be it in memory or 
in the [local storage](local storage). Data is cached to enhance
user experience. The problem may arise when other users are changing
the same data at the same time. If that happens, the local data
stored in one user's browser is outdated compared with the data
that another user has sent to the server. Developers have to 
code and architect the application to resolve these situations. 

Network failures can represent yet another source of trouble.
If the network fails for a little while and the application tries
to send data to the server, that data might be lost, unless the
programmers take care of that particular case. So when you explore
the application in search of defects try to switch off the 
network connection from time to time to see how the application
works around this temporary failure.

The lack of support for web standards in the browsers has been a 
typical source of 
problems in the past decade. It still is if you have to support old
browsers. Testing applications in several browsers is important,
specially if the code is written with vanilla JavaScript accessing the DOM
rather than using libraries like jQuery. jQuery and other libraries have made
a brilliant job creating an abstraction layer that prevent us from writing
code that works on some browsers and breaks the application on others.


TODO: add more information into this section


