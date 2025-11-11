waitForElement | 
A replacement for [waitForKeyElements](https://gist.github.com/BrockA/2625891#file-waitforkeyelements-js) using MutationObserver.


This is basically just a direct conversion to using MutationObserver

Examples:
```js
    waitForElement("div.comments", (object) => {
      object.text("do something only for the first found object...");
    });
```
```js
    waitForElement("div.comments", (object) => {
      object.text("keep doing something to all found objects...");
    }, 0);
```
```js
    function deleteDiv(object) {
      object.remove() // Remove and stop waiting for matching objects
    }

    waitForElement("div#1", deleteDiv);
    waitForElement("div#3", deleteDiv);
    waitForElement("div#6", deleteDiv);
```
```js
    function deleteDiv(object) {
      object.remove() // Remove and keep waiting for new objects to also remove
    }

    waitForElement("div.magic", deleteDiv, 0);
    waitForElement("div.rainbow_tag", deleteDiv, 0);
    waitForElement("div.dislike", deleteDiv, 0);
```
```js
    // ==UserScript==
    // @name         Example UserScript using waitForElement
    // @require      https://code.jquery.com/jquery-3.7.1.min.js
    // @require      https://raw.githubusercontent.com/GentlePuppet/waitForElement/refs/heads/main/waitForElement.js
    // ==/UserScript==
    
    waitForElement("div.comments", (object) => {
        object.text("do something only for the first found object...");
    });
```



waitForElement(selector, callback, 1, document)
* selector {string} - jQuery selector for the desired element(s).
* callback {function} - Function to call when elements are found. Receives a jQuery-wrapped element.
* [once=true] {boolean} - If true, stops observing after first match.
* [root=document] {string|Element|jQuery} - Optional root or iframe selector to observe within.
