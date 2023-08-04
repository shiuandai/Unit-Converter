<h2 align="center">Unit-Converter</h2>

<p align="center">
  <em> The unit converter is my fourth project of Scrimba Front-End course, in this course I build web designs from scratch and structure the code to finish the layout design.</em>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Join the chat at https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist](https://badges.gitter.im/Front-End-Checklist/Front-End-Design-Checklist.svg)](https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## Table of Contents
* **[1. Design requirements](#1---design-requirements)**
	* [1.1 Onclick](#11---Onclick)
	* [1.2 Template-String](#12---Template-String)
	* [1.3 AddEventListener](#13---AddEventListener)
	* [1.4 Double Click](#14---Double-Click)

---

> The **Unit Converter** is my fourth static website, I practice to build the function() and use "Template String" to make code easily to read.

I start the Scrimba Module 2 course- Web dev basics and learn how to use basic HTML, CSS & JavaScript knowledge. At the end of the course, I follow the Figma template to finish the digital unit converter to quickly transfer the unit, take a look at the → [Unit Converter](https://shiuandai.github.io/Unit-Converter/).

## How I start the project?

* Ensure all points are taken into consideration from Figma Template. → [Figma Template from Scrimba](https://www.figma.com/file/cqtGul0V8RFXY4vTcIv1Kc/Unit-Conversion?type=design&node-id=0-1&mode=design&t=VhkuEmfZw4OMoEqd-0)
* Generate all conversions when the user click "Convert".
* Round the numbers down to 3 decimal places.
* Use the "Template String/Template literals" concept in the project to show the conversion result.

---

## 1. - Design requirements

Designing a unit converter website requires following some rules and taking into consideration that the project is not only a graphic project but a web project too. The next sections are crucial for any web project.

### 1.1 - Onclick

* [ ] **onclick** Call a function when a button is clicked:.
	> ℹ️ [onclick] GET to know more about the definition. → [W3School](https://www.w3schools.com/jsref/event_onclick.asp)
* [ ] **Be familiar with the HTML Tag**. 
* [ ] Before working on each website project, I can **build every template** with my own structure concept. Building the structure before everything else will facilitate my work afterward.

```html
<button onclick="myFunction()">Click me</button>
```

**[⬆ back to top](#table-of-contents)**

### 1.2 - Template-String

Why do we use template string. The main purpose is easy to read→ [Explanation](https://levelup.gitconnected.com/what-are-template-literals-and-why-should-you-use-it-in-javascript-3468bfaeb05d)

* [ ] **Template String is a string interpolation with embedded expressions**
* [ ] Below it is an example to show how to use it.

```js
for (let i = 0; i < myLeads.length; i++) {
     // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
```


**[⬆ back to top](#table-of-contents)**

### 1.3 - AddEventListener

Another method to active the button.

The addEventListener() method attaches an event handler to the specified element. Example shows below.

```js
document.getElementById("myBtn").addEventListener("click", displayDate);
```

  __Resources:__
	* 📖 [addEventListener()](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)


**[⬆ back to top](#table-of-contents)**


### 1.4 - Double-Click

* [ ] When double click the function will be actived.
      
```js
const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
```

## Author

**[Shiuan Dai](https://www.linkedin.com/in/shiuandai/)**

**[⬆ back to top](#table-of-contents)**


[6]:	https://guideguide.me/
[7]:	https://www.sketchapp.com/docs/canvas/rulers-guides-grids/
[8]:	https://getbootstrap.com/docs/4.0/layout/grid/
[9]:	http://flexboxgrid.com/
[10]: https://css-tricks.com/dont-overthink-it-grids/
[11]:	https://www.lifewire.com/aco-file-2619477
[16]:	http://bradfrost.com/blog/post/atomic-web-design/
[22]:	https://js.libhunt.com/
[23]:	https://bestof.js.org/
[28]:	https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist
