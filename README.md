# cypressIoTest
Web Automaton Testing using cypress

1 Cypress does not use Selenium.
Most end-to-end testing tools are Selenium-based, which is why they all share the same problems. To make Cypress different, we built a new architecture from the ground up. Whereas Selenium executes remote commands through the network, Cypress runs in the same run-loop as your application.

2 Cypress focuses on doing end-to-end testing REALLY well.
Cypress is not a general automation framework, nor is it a unit testing framework for your back end services. There are already great tools out there that do that. Rather, we specialize in one thing - creating a great experience while you write end to end tests for your web applications.

3 Cypress works on any front-end framework or website.
Cypress tests anything that runs in a web browser. All of the architecture surrounding Cypress is built to handle modern JavaScript frameworks especially well. We have hundreds of projects using the latest React, Angular, Vue, Elm, etc. frameworks. Cypress also works equally well on older server rendered pages or applications.

4 Cypress tests are only written in JavaScript.
While you can compile down to JavaScript from any other language, ultimately the test code is executed inside the browser itself. There are no language or driver bindings - there is and will only ever be just JavaScript.

5 Cypress is all in one.
Writing end-to-end tests takes a lot of different tools to work together. With Cypress you get multiple tools in one. There is no need to install 10 separate tools and libraries to get your test suite set up. We have taken some of the best-in-class tools you are likely already familiar with and made them all work together seamlessly.


Can use Visual studio code or webstorm to work with Cypress:

Go to the terminal in Visual studio code 

1)mkdir cypress_test_demo
2)cd cypress_test_demo
3) NPM Global Requirements

  $ npm init
     ( Press ^C at any time to quit. package name: (cypresstest) version: (1.0.0) description: Test cypress working entry point: (index.js) test command: git repository:)
     
  $ npm install -g cpy-cli
  
  $ npm install -g karma-cli
  
  $ npm install -g appium
  
  $ npm install -g webpack
  
  $ npm install -g webpack-dev-server
  
  $ npm install -g documentation
  
  $ npm install -g cypress --save-dev


--On Visual Studio Code > On the Terminal enter 
>  npm run cypress:open

--Opens a new Cypress window > Run simpleseach.spec.js test
>    click on simplesearch.spec.js



Underscore.js :

Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. It’s the answer to the question: “If I sit down in front of a blank HTML page, and want to start being productive immediately, what do I need?” … and the tie to go along with jQuery's tux and Backbone's suspenders.

Underscore provides over 100 functions that support both your favorite workaday functional helpers: map, filter, invoke — as well as more specialized goodies: function binding, javascript templating, creating quick indexes, deep equality testing, and so on.

Installation
Node.js npm install underscore

commonly used ones:

Collection Functions (Arrays or Objects)
each_.each(list, iteratee, [context]) Alias: forEach 
Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.

_.each([1, 2, 3], alert);
=> alerts each number in turn...
_.each({one: 1, two: 2, three: 3}, alert);
=> alerts each number value in turn...
Note: Collection functions work on arrays, objects, and array-like objects such as arguments, NodeList and similar. But it works by duck-typing, so avoid passing objects with a numeric length property. It's also good to note that an each loop cannot be broken out of — to break, use _.find instead.

