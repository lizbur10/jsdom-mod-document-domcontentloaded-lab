# Document Ready

## Learning Goals

- Explain why `DOMContentLoaded` is important
- Set up an event on `DOMContentLoaded`

## Introduction

When we first learned about events, it made sense to talk about events in terms
of things users do: clicking or mousing or typing.

But JavaScript events can also be less obvious.

- "When we fetched some data"
- "When the window appeared"
- "When the DOM's data finished updating the screen"

We're going to learn more about that last one. That event is called
`DOMContentLoaded`. It's a good way to set up learning more about the AJAX
technique (update the DOM based on fetched data) that we'll cover later.

## Explain Why `DOMContentLoaded` Is Important

We don't ever want to write our JavaScript inside our HTML files. For the same
reasons that we want to separate out our CSS from our HTML, we want to separate
out our JavaScript from our HTML, too.

![Letting Down Obi-Wan](https://media.giphy.com/media/3ornjJSq2s9xznhO80/giphy.gif)

_Don't let Obi-Wan down: separate structure (HTML) and behavior (JavaScript)_

But if we define JavaScript code in a file included in the `<head>` tag, and
that JavaScript code tries to "bind an event to some HTML element," well, that
element _doesn't exist yet_. Remember, the browser's still processing the
`<head>`, it's not started loading up the `<body>` yet. As a result, we're going
(try) to bind an event to..._nothing_.

This can be really confusing and hard to debug. Things will _look_ as they ought
_on screen_. But the events will **not** have been bound. You might not even
**see** the error message if your DevTools Console isn't open.

In this lesson we'll experience this bug, move to a simple solution, and then
use the solution based on the `DOMContentLoaded` event.

## Set Up An Event On `DOMContentLoaded`

### Part I:

If you take a look at `index-demo.html`, you'll notice we have event-handling
code JavaScript code written at the bottom. We know the HTML element we want to
target, `body`, has to be present because it appears before the `<script>` tag
in which our JavaScript appears.

Let's see how this works.

Fire up a web server with the `httpserver` command. Open the `index-demo.html`
(something like: `http://<address>/index-demo.html`), page in the browser and
open the DevTools console. Clicking anywhere in the body should trigger a
message to the console.

View the page and confirm the JavaScript code works. Click on the words to make
sure you're inside the `body` element.

### Part II:

Next, move this code into a new file called `script.js`. Include `script.js` in
the `<head>` of `index-demo.html`. Reload the page. Your click event won't work.
You might notice JavaScript giving an error in the DevTools console:

```text
Uncaught TypeError: Cannot read property 'addEventListener' of null
```

Here the browser is telling us it tried to add a listener to an event that
didn't exist, `<body>`. We want to attach our listeners _only after_ we know
that the `<body>` has fully loaded. We do this by setting up an event listener
for an event called `DOMContentLoaded`. Inside of that event's handler, we know
it's safe to bind to HTML elements in the `<body>`.

Edit the code in `script.js` to "wrap" the code inside of an event handler for
`DOMContentLoaded`.

As you can see, the wrapping code is the same handler style you've used for all
the other DOM elements. This time, though, you're binding to the DOM itself.

```js
document.addEventListener("DOMContentLoaded", (e) => {
  document
    .querySelector("body")
    .addEventListener("click", (e) => console.log("Reggae, Reggae!"));
});
```

Go back to your browser and refresh the content. Your listener now works
(again).

## Moving On

Let's practice some of the ideas in this lesson on our own. While we've been
dealing with click events lately, let's not forget that we know how to modify
the DOM. Tracking click events might even be your path to [Internet fame and
fortune!][cow]

We've provided you a failing test that you need to fix. Run `learn` to see the
output from the test. Add code to pass the test. Once your code passes the test,
enter `learn submit` and move on.

## Conclusion

In this lesson you learned to bind events to DOM events that aren't user
controlled. This will allow you to operate on the DOM with the guarantee that
the DOM nodes you need are there.

[cow]: https://www.cowclicker.com/
