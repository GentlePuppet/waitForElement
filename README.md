waitForElement | 
A replacement for [waitForKeyElements](https://gist.github.com/BrockA/2625891#file-waitforkeyelements-js) using MutationObserver.

Examples:
```js
    waitForElement("div.comments", (el) => {
      el.text("Comment found and updated!");
    });
```
```js
    waitForElement("div.comments", commentFunc);
    function commentFunc() {
      dosomething...
    } 
```
waitForElement(selector, callback, 1, document)
* selector {string} - jQuery selector for the desired element(s).
* callback {function} - Function to call when elements are found. Receives a jQuery-wrapped element.
* [once=true] {boolean} - If true, stops observing after first match.
* [root=document] {string|Element|jQuery} - Optional root or iframe selector to observe within.
