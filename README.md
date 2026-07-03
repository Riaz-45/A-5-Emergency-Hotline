1. getElementById() : means select one element by its unique id.

	 getElementsByClassName() : means select all elements with the same class and return and HTML collection.

	 querySelector() : means selects the first matching element using any CSS selector.

	 querySelectorAll() : means selects all matching elements using a CSS selector and returns a Nodelist

2. use document.createElement() for create an element, set content with innerHTML or innerText and then insert it into the DOM using appendChild()
	 
   Event Bubbling is the process where an event starts from the target element and then bubbles up to its parent, grandparent and so on until the document.

4. Event Delegation is a technique where you attach one event listener to a paent element instead of adding listeners to multiple child elements.
	 It is useful because it improves performance, uses less memory, works for dynamically added elements.

5. preventDefault() is a JavaScript event method that prevents the browser from performing its default action for an event.
   
   stopPropagation() is a JavaScript event method that stops an event from bubbling up to its parent elements.
