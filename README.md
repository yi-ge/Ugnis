# <img height="64" src="https://cloud.githubusercontent.com/assets/5903616/20250447/5fe963c2-aa17-11e6-8648-bc1760fdaeb7.png" />Ugnis 0.0.26v

Ugnis is a visual application builder. It's like React + Redux without boilerplate.

WARNING: Ugnis is a proof of concept, we recommended waiting for 1.0v before using it for anything serious.
If you have tried the visual editor, please do leave your feedback in this issue, it helps us a lot. // TODO

# How does Ugnis work?

Ugnis consist of three parts:
  - Your application definition - a JSON file
  - Runtime - a function that renders JSON to HTML
  - Ugnis visual editor - because you wouldn't want to write JSON by hand

Read technical implementation details TODO HERE
*Ugnis is actually a small LISP-like language, just don't tell anyone that* ugnis is a programming language that should never be written by hand
Instead of using compiler to make sure that your code works, Ugnis editor just does not allow creating code that wouldn't work.
As a language it would be pretty fragile and verbose - perfect to be generated by other programs. Homoiconic.

# Goals
Goals (must be reached before releasing 1.0v)
  - [x] zero configuration, Ugnis-only apps don't need webpack or babel
  - [ ] powerful enough to write any application, Ugnis editor is written with Ugnis itself
    - [x] string, number, variants
    - [x] tables
    - [ ] connected tables - graphs
    - [ ] recursion
  - [x] plays nice with existing apps, can be introduced in small steps
  - [ ] performance
    - [ ] Remove virtual dom - Ugnis already knows how view nodes are connected with the state
    - [ ] synthetic events
    - [ ] minified build without runtime
  - [ ] scalable for humans - large applications are easy to understand
  - [ ] scalable for machines - application splitting by default
  - [ ] server side rendering
  - [ ] type safety - no runtime errors
  - [ ] editor works well on mobile
  - [ ] allow easy extension of the runtime
  - [ ] editor as a desktop app
  - [ ] router
  - [ ] fetch

# How to use it

To create your first component use the online editor TODO LINK or download the editor TODO LINK

if you don't want to download a packaged desktop app, you can use a website version via npm:
```bash
npm install ugnis-editor

node node_modules/.bin/ugnis-editor PORT=3000 PATH=./ugnis_modules #defaults
```

Once you create a component you can add it to your website, you have to import a runtime
TODO CDN

or through npm:
```bash
npm install ugnis
```

and mounting a component:
```javascript
import ugnis from 'ugnis'

const app = ugnis(htmlNode, json, defaultState)
```

If you are integrating Ugnis into an existing app, you can interact by sending and listening to events:
```javascript
app.emitEvent(eventName, data, nativeEvent)

app.addListener((eventName, data, nativeEvent, previousState, currentState, mutations)=>{ /*your code* /})
```

## Integrating with react
For react projects there is a special wrapper component
```bash
npm install ugnis-react # you don't need to npm install ugnis
```

```javascript
import React from 'react'
import Ugnis from 'ugnis-react'

const component = (props) =>
  <Ugnis
      definition={json}
      defaultState={defaultState}
      onMount={function(definition, vdom, currentState, render, emitEvent, addListener){}} />
```

#Community:
TODO Reddit

#License:

MIT