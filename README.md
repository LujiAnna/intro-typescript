# Typescript Intro

> Tools like webpack will compile this down to regular JavaScript, so every browser can read it.
> [Docs](https://www.typescriptlang.org/)

✨ Mission

In recent PHP versions, it's possible to use the strict types option. This allows us to define what type a certain variable is expected to be. Without strict typing, PHP will auto-convert a variable when needed. While helpful in some situations, it can also cause some unexpected results. With strict typing, the wrong type will produce an error, notifying the developer and telling what the problem is.

In some cases, we might want similar behaviour in JavaScript. If that's the case, you can use TypeScript. Think of TypeScript not as a framework (in fact, it can work together with frameworks like React) but as an extra layer: it allows us to use some extra's on top of JavaScript.

# The first mission
- Convert the set-up files to TypeScript.
- Duration: 2 days

The src (source) folder contains your source file, that's the one where you will develop. The public folder will contain the resulting one (after compilation), which will be used by the index file.

🌱 Must-have's
- [ ] Install TypeScript globally on your system
- [ ] Use a config file, and adapt it so it will compile from your src folder to the public folder. Run tsc to compile the src JS file. Load the result from the public folder in the index.html.
- [ ] Time to look around in the TypeScript possibilities. Some recommendations to read:
* Basic types
* TypeScript in 5 minutes
* Find some interesting docs? Share it with your peers and coach!
- [ ] Switch your source file to a TypeScript file. Since TypeScript behaves more strict than regular JavaScript, we'll need to adapt the code for it to work again. Check for any errors coming up and fix them.
- [ ] We've fixed the errors, is there more we can do? Let's make the best out of the typing system and add a type to all our variables. Lastly, what about the functions - anything we should adapt there? Tip: switch to strict compiling now. This will force you to make as much use of TypeScript as possible.
- [ ] Usually, you will use Webpack to compile a bunch of things (the styling, for example) instead of just TypeScript. Move your application over to compile via webpack.

⚙️ Tools
- [ ] VSCode: Markdown, TypeScript, HTML
- [ ] NPM: Webpack


🌼 Nice-to-have's (Doable)
- Usually, you will use Webpack to compile a bunch of things (the styling, for example) instead of just TypeScript. Move your application over to compile via webpack.

## The second mission
- Team challenge : solo
- Repository: the-impossible-quiz

- Duration: 3 days
- Create "The impossible quiz", completely with typescript.

🌱 Must-have's
- 10 pages, each with a question and an input field for an answer.
When wrong -> try again message | When right -> move to next page (next question).
🌼 Nice-to-have's (Doable)
- Use different types of answers (numbers, strings, arrays, etc).
- Add/remove lives for correct and wrong answers.
- Add a timer on all the questions. (time up = lose life)
🌳 Nice-to-have's (hard)
- Create a user input at the start of the game to play with a username.
- Add animation to the pages.
- Create a hint-button per question: 1 hint costs 1 live.