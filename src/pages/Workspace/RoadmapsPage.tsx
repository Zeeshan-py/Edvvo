import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Map, Clock, Star } from 'lucide-react';
import { HeroSection } from '../Home/sections/HeroSection';
import { FooterSection } from '../Home/sections/FooterSection';

const roadmaps = [
  {
    id: 1,
    title: "Web Development Roadmap",
    description: "Complete path from beginner to full-stack developer",
    steps: [
      {
        name: "HTML Basics",
        description: "HTML (HyperText Markup Language) is the backbone of every web page. It provides the structure and meaning to content by using elements like headings, paragraphs, lists, links, images, and more.",
        subtopics: [
          {
            title: "Headings",
            detail: "Headings are used to define the titles and subtitles on your page. Use <h1> for the main title, <h2> for subtitles, and so on up to <h6>.",
            code: `<h1>Main Title</h1>\n<h2>Subtitle</h2>`
          },
          {
            title: "Paragraphs",
            detail: "Paragraphs are blocks of text wrapped in <p> tags. They help organize your content into readable sections.",
            code: `<p>This is a paragraph of text in HTML.</p>`
          },
          {
            title: "Lists",
            detail: "Lists help organize items. Use <ul> for unordered (bulleted) lists and <ol> for ordered (numbered) lists. Each item goes in an <li> tag.",
            code: `<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>`
          },
          {
            title: "Links",
            detail: "Links allow users to navigate to other pages or sites. Use the <a> tag with an href attribute.",
            code: `<a href=\"https://www.example.com\">Visit Example</a>`
          },
          {
            title: "Images",
            detail: "Images are embedded using the <img> tag with a src attribute pointing to the image URL.",
            code: `<img src=\"https://via.placeholder.com/150\" alt=\"Placeholder Image\" />`
          },
          {
            title: "Line Break & Horizontal Rule",
            detail: "<br> inserts a line break. <hr> creates a horizontal line, often used to separate content.",
            code: `First line<br>Second line<hr>Section Divider`
          },
          {
            title: "Strong & Emphasis",
            detail: "<strong> makes text bold, <em> makes text italic for emphasis.",
            code: `<strong>Important</strong> <em>Emphasized</em>`
          },
          {
            title: "Blockquote",
            detail: "<blockquote> is used to indicate a section that is quoted from another source.",
            code: `<blockquote>\n  This is a quoted section.\n</blockquote>`
          },
          {
            title: "Code",
            detail: "<code> is used to display a single line or word of code inline.",
            code: `Here is <code>inline code</code> in a sentence.`
          },
          {
            title: "Superscript & Subscript",
            detail: "<sup> displays text as superscript (above the line), <sub> as subscript (below the line). Useful for math and chemical formulas.",
            code: `E = mc<sup>2</sup>\nH<sub>2</sub>O`
          },
          {
            title: "Abbreviation",
            detail: "<abbr> marks up an abbreviation or acronym, and the title attribute provides the full term.",
            code: `<abbr title=\"World Health Organization\">WHO</abbr>`
          },
          {
            title: "Marked & Highlighted Text",
            detail: "<mark> highlights text with a yellow background by default.",
            code: `This is <mark>important</mark> text.`
          },
          {
            title: "Preformatted Text",
            detail: "<pre> preserves whitespace and line breaks, displaying text exactly as written.",
            code: `<pre>Line 1\n  Line 2\n    Line 3</pre>`
          },
          {
            title: "Deleted & Inserted Text",
            detail: "<del> shows deleted text (strikethrough), <ins> shows inserted text (underlined).",
            code: `<del>Old text</del> <ins>New text</ins>`
          },
          {
            title: "Small Text",
            detail: "<small> renders text in a smaller font size.",
            code: `<small>Fine print</small>`
          },
          {
            title: "Keyboard Input",
            detail: "<kbd> is used to indicate keyboard input.",
            code: `Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.`
          },
          {
            title: "Address",
            detail: "<address> is used for contact information.",
            code: `<address>123 Main St, City, Country</address>`
          }
        ],
        resources: [
          { label: "MDN HTML Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" },
          { label: "HTML Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" }
        ]
      },
      {
        name: "HTML Advanced",
        description: "Advanced HTML covers more complex elements and attributes, such as tables, forms, semantic tags, embedding media, and document structure.",
        subtopics: [
          {
            title: "Tables",
            detail: "Tables organize data into rows and columns. Use <table> for the table, <tr> for rows, <th> for headers, and <td> for data cells.",
            code: `<table>\n  <tr>\n    <th>Name</th><th>Age</th>\n  </tr>\n  <tr>\n    <td>Alice</td><td>24</td>\n  </tr>\n</table>`
          },
          {
            title: "Forms",
            detail: "Forms collect user input. Use <form> with input elements like <input>, <textarea>, <button>.",
            code: `<form>\n  <input type=\"text\" placeholder=\"Your name\" />\n  <button type=\"submit\">Submit</button>\n</form>`
          },
          {
            title: "Semantic Tags",
            detail: "Semantic tags like <header>, <footer>, <article>, <section>, <nav>, <aside>, <main> give meaning to your page structure and help with SEO and accessibility.",
            code: `<header>Site Header</header>\n<nav>Navigation</nav>\n<main>Main Content</main>\n<aside>Sidebar</aside>\n<footer>Footer Info</footer>`
          },
          {
            title: "Embedding Media",
            detail: "Use <video> and <audio> to embed media files. <iframe> can embed other web pages or YouTube videos.",
            code: `<video controls width=\"250\">\n  <source src=\"movie.mp4\" type=\"video/mp4\" />\n  Sorry, your browser doesn't support embedded videos.\n</video>\n<iframe width=\"300\" height=\"200\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" title=\"YouTube video\"></iframe>`
          },
          {
            title: "Meta Tags",
            detail: "Meta tags go inside the <head> and provide metadata about the page, like description, keywords, and viewport settings.",
            code: `<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"description\" content=\"A sample page\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>`
          },
          {
            title: "Document Structure",
            detail: "A complete HTML document includes <!DOCTYPE html>, <html>, <head>, and <body> tags.",
            code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <!-- Content here -->\n</body>\n</html>`
          },
          {
            title: "Table Caption & Column Groups",
            detail: "<caption> adds a title to a table. <colgroup> and <col> allow you to style columns.",
            code: `<table>\n  <caption>Student Grades</caption>\n  <colgroup>\n    <col span=\"2\" style=\"background: #eee\">\n  </colgroup>\n  <tr><th>Name</th><th>Grade</th></tr>\n  <tr><td>Alice</td><td>A</td></tr>\n</table>`
          },
          {
            title: "Fieldset & Legend",
            detail: "<fieldset> groups related form elements, <legend> provides a caption for the group.",
            code: `<fieldset>\n  <legend>Personal Info</legend>\n  <input type=\"text\" placeholder=\"Name\" />\n</fieldset>`
          },
          {
            title: "Datalist, Output, Progress, Meter",
            detail: "<datalist> provides autocomplete options for <input>. <output> displays calculation results. <progress> and <meter> show progress and measurement.",
            code: `<input list=\"browsers\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n</datalist>\n<output>42</output>\n<progress value=\"70\" max=\"100\"></progress>\n<meter value=\"0.6\">60%</meter>`
          },
          {
            title: "Details & Summary",
            detail: "<details> creates a disclosure widget. <summary> is the visible heading.",
            code: `<details>\n  <summary>More Info</summary>\n  <p>Hidden content here.</p>\n</details>`
          },
          {
            title: "BDI, BDO, Samp, Time, Var, WBR",
            detail: "<bdi> isolates text for bidirectional text. <bdo dir=\"rtl\"> overrides text direction. <samp> is for sample output. <time> for dates/times. <var> for variables. <wbr> is a word break opportunity.",
            code: `<bdi>مرحبا</bdi>\n<bdo dir=\"rtl\">Right to left</bdo>\n<samp>Output</samp>\n<time datetime=\"2023-01-01\">Jan 1, 2023</time>\n<var>x</var> = 5\nSuper<wbr>califragilistic` 
          }
        ],
        resources: [
          { label: "MDN HTML Tables", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" },
          { label: "MDN HTML Forms", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" },
          { label: "HTML Semantic Elements", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element#sectioning_content" }
        ]
      },
      {
        name: "CSS Basics",
        description: "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and positioning.",
        subtopics: [
          {
            title: "Selectors",
            detail: "Selectors target HTML elements to apply styles. For example, p { color: red; } targets all paragraphs. You can use class selectors (.class), id selectors (#id), and more.",
            code: `p {\n  color: red;\n}\n.my-class {\n  font-weight: bold;\n}`
          },
          {
            title: "Colors & Fonts",
            detail: "You can set text color, background color, and font family.",
            code: `body {\n  background: #f0f0f0;\n  color: #333;\n  font-family: Arial, sans-serif;\n}`
          },
          {
            title: "Box Model",
            detail: "Every element is a box. The box model includes margin, border, padding, and content.",
            code: `.box {\n  margin: 10px;\n  padding: 20px;\n  border: 1px solid #ccc;\n}`
          },
          {
            title: "Text Alignment",
            detail: "Align text using text-align property.",
            code: `h1 {\n  text-align: center;\n}`
          },
          {
            title: "Comments",
            detail: "CSS comments are written between /* and */ and are ignored by the browser.",
            code: `/* This is a CSS comment */\np { color: blue; }`
          },
          {
            title: "Units",
            detail: "CSS supports various units like px (pixels), em, rem, %, vw, vh, etc.",
            code: `div {\n  width: 50%;\n  padding: 2em;\n}`
          },
          {
            title: "Z-Index & Stacking",
            detail: "z-index controls the stacking order of positioned elements.",
            code: `.modal {\n  position: absolute;\n  z-index: 1000;\n}`
          },
          {
            title: "Overflow",
            detail: "The overflow property controls what happens when content overflows its box.",
            code: `.box {\n  overflow: auto;\n}`
          },
          {
            title: "Position",
            detail: "The position property (static, relative, absolute, fixed, sticky) controls how an element is positioned in the document.",
            code: `.fixed-header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}`
          },
          {
            title: "Float & Clear",
            detail: "float moves elements to the left or right. clear prevents elements from wrapping around floated elements.",
            code: `.left-img {\n  float: left;\n}\n.clearfix {\n  clear: both;\n}`
          },
          {
            title: "Object-fit & Filter",
            detail: "object-fit controls how images/videos fit their container. filter applies visual effects.",
            code: `img {\n  object-fit: cover;\n  filter: grayscale(100%);\n}`
          },
          {
            title: "Transitions",
            detail: "Transitions animate changes to CSS properties.",
            code: `.btn {\n  transition: background 0.3s;\n}\n.btn:hover {\n  background: orange;\n}`
          }
        ],
        resources: [
          { label: "MDN CSS Basics", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics" },
          { label: "CSS Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" }
        ]
      },
      {
        name: "CSS Advanced",
        description: "Advanced CSS covers layouts, responsive design, animations, pseudo-classes, pseudo-elements, and more powerful selectors.",
        subtopics: [
          {
            title: "Flexbox",
            detail: "Flexbox is a layout model for arranging items in a row or column. It makes it easy to align and distribute space among items.",
            code: `.container {\n  display: flex;\n  gap: 10px;\n}\n.container > div {\n  flex: 1;\n}`
          },
          {
            title: "Grid",
            detail: "CSS Grid is a two-dimensional layout system for complex designs. It allows you to create rows and columns easily.",
            code: `.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}`
          },
          {
            title: "Media Queries",
            detail: "Media queries make your site responsive to different screen sizes. You can apply styles only when certain conditions are met.",
            code: `@media (max-width: 600px) {\n  body {\n    background: lightblue;\n  }\n}`
          },
          {
            title: "Animations",
            detail: "CSS animations bring elements to life. Use @keyframes to define the animation and the animation property to apply it.",
            code: `@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n.fade-in {\n  animation: fadeIn 2s;\n}`
          },
          {
            title: "Pseudo-classes",
            detail: "Pseudo-classes like :hover, :active, :focus allow you to style elements based on their state.",
            code: `a:hover {\n  color: orange;\n}`
          },
          {
            title: "Pseudo-elements",
            detail: "Pseudo-elements like ::before and ::after let you insert content before or after an element's content.",
            code: `p::before {\n  content: 'Note: ';\n  color: red;\n}`
          }
        ],
        resources: [
          { label: "MDN CSS Layout", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout" },
          { label: "CSS Tricks Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
          { label: "CSS Pseudo-classes", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" },
          { label: "CSS Pseudo-elements", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" }
        ]
      },
      {
        name: "JavaScript Basics",
        description: "JavaScript is the programming language of the web. It allows you to make web pages interactive and dynamic. In this step, you'll learn the fundamentals of JavaScript syntax, variables, data types, functions, conditionals, loops, and more.",
        subtopics: [
          {
            title: "Variables (let, const, var)",
            detail: "Variables are containers for storing data values. In modern JavaScript, let and const are preferred because they provide block scope, which helps prevent bugs. Use let when you need to reassign a variable, and const for values that shouldn't change. The older var keyword is function-scoped and can lead to confusing behavior, so it's generally avoided. Understanding how and when to use each variable declaration is fundamental to writing safe and predictable JavaScript code.",
            code: `let name = 'Alice';\nconst PI = 3.14;\nvar oldVar = 42;`
          },
          {
            title: "Data Types",
            detail: "JavaScript supports several data types, including string, number, boolean, null, undefined, array, and object. Strings are sequences of characters, numbers represent numeric values, booleans are true/false, null is an intentional absence of value, undefined means a variable has been declared but not assigned, arrays are ordered lists, and objects are collections of key-value pairs. Mastering these types is crucial for working with data and performing operations in your programs.",
            code: `let str = 'Hello';\nlet num = 42;\nlet isActive = true;\nlet arr = [1, 2, 3];\nlet obj = { key: 'value' };`
          },
          {
            title: "Operators",
            detail: "Operators are used to perform operations on variables and values. Arithmetic operators (+, -, *, /) let you do math, assignment operators (=, +=, etc.) assign values, comparison operators (==, ===, !=, !==, >, <) compare values, and logical operators (&&, ||, !) combine or invert boolean values. Understanding how operators work is essential for writing expressions and controlling program logic.",
            code: `let sum = 5 + 3;\nlet isEqual = (a === b);\nlet isTrue = (x > 0 && y < 10);`
          },
          {
            title: "Functions",
            detail: "Functions are reusable blocks of code that perform a specific task. You can declare them using the function keyword or as arrow functions. Functions can take parameters and return values. They help organize code, avoid repetition, and make your programs modular and maintainable.",
            code: `function greet(name) {\n  return 'Hello, ' + name;\n}\nconst add = (a, b) => a + b;`
          },
          {
            title: "Conditionals",
            detail: "Conditional statements allow you to execute different code based on certain conditions. Use if, else if, else, and switch to control the flow of your program. This enables your code to make decisions and respond to different situations dynamically.",
            code: `if (score > 50) {\n  console.log('Pass');\n} else {\n  console.log('Fail');\n}`
          },
          {
            title: "Loops",
            detail: "Loops let you repeat code multiple times. The for loop is commonly used for a known number of iterations, while the while loop continues as long as a condition is true. for...of and for...in are used for iterating over arrays and objects. Loops are essential for processing lists of data and automating repetitive tasks.",
            code: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}\nlet arr = [1,2,3];\nfor (const val of arr) {\n  console.log(val);\n}`
          },
          {
            title: "Template Literals",
            detail: "Template literals use backticks (`) and allow you to embed expressions inside strings using ${}. They make it easier to create complex strings and include variables or expressions directly. This feature improves readability and reduces errors when building dynamic strings.",
            code: 'let name = "Alice";\nconsole.log(`Hello, ${name}!`);'
          },
          {
            title: "Comments",
            detail: "Comments are used to explain code and make it more readable. Single-line comments start with //, and multi-line comments are wrapped in /* ... */. Comments are ignored by the JavaScript engine and are invaluable for documenting your code and collaborating with others.",
            code: `// This is a comment\n/*\n  Multi-line\n  comment\n*/`
          },
          {
            title: "Arrays",
            detail: "Arrays are ordered collections of values. You can store multiple items in a single variable, access them by index, and use array methods like push, pop, shift, unshift, and splice. Arrays are fundamental for managing lists of data and performing batch operations.",
            code: `let fruits = ['apple', 'banana', 'cherry'];\nfruits.push('date');\nconsole.log(fruits[1]); // banana`
          },
          {
            title: "Objects",
            detail: "Objects are collections of key-value pairs. They are used to represent real-world entities and store related data and functions (methods). Objects are the backbone of JavaScript and are used everywhere, from simple data structures to complex application state.",
            code: `let person = {\n  name: 'Alice',\n  age: 25,\n  greet: function() {\n    console.log('Hi!');\n  }\n};\nperson.greet();`
          }
        ],
        resources: [
          { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
          { label: "JavaScript.info", url: "https://javascript.info/" }
        ]
      },
      {
        name: "JavaScript Advanced",
        description: "Advanced JavaScript covers concepts like closures, promises, async/await, ES6+ features, destructuring, spread/rest, classes, modules, and more.",
        subtopics: [
          {
            title: "Closures",
            detail: "A closure is a function that remembers its outer variables even after the outer function has finished.",
            code: `function outer() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2`
          },
          {
            title: "Promises",
            detail: "Promises represent the eventual completion (or failure) of an asynchronous operation.",
            code: `const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Done!'), 1000);\n});\npromise.then(result => console.log(result));`
          },
          {
            title: "Async/Await",
            detail: "Async/await makes asynchronous code look synchronous and is built on top of promises.",
            code: `async function fetchData() {\n  const response = await fetch('https://api.example.com');\n  const data = await response.json();\n  return data;\n}`
          },
          {
            title: "Destructuring & Spread/Rest",
            detail: "Destructuring extracts values from arrays/objects. Spread/rest (...) expands or collects elements.",
            code: `const [a, b] = [1, 2];\nconst {x, y} = {x: 10, y: 20};\nconst arr = [1, 2, ...[3, 4]];\nfunction sum(...nums) { return nums.reduce((a, b) => a + b, 0); }`
          },
          {
            title: "Classes & Inheritance",
            detail: "Classes are blueprints for objects. Use extends for inheritance.",
            code: `class Animal {\n  speak() { console.log('Sound'); }\n}\nclass Dog extends Animal {\n  speak() { console.log('Woof'); }\n}`
          },
          {
            title: "Modules (import/export)",
            detail: "Modules let you split code into files. Use export/import to share code.",
            code: `// math.js\nexport function add(a, b) { return a + b; }\n// main.js\nimport { add } from './math.js';`
          },
          {
            title: "Map, Set, forEach, filter, map, reduce",
            detail: "Modern JavaScript has powerful built-in objects and array methods.",
            code: `const set = new Set([1,2,3]);\nconst map = new Map([[1, 'a']]);\n[1,2,3].forEach(x => console.log(x));\nconst evens = [1,2,3,4].filter(x => x%2===0);\nconst squares = [1,2,3].map(x => x*x);\nconst sum = [1,2,3].reduce((a,b) => a+b, 0);`
          }
        ],
        resources: [
          { label: "MDN JavaScript Advanced", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
          { label: "JavaScript.info Advanced", url: "https://javascript.info/" }
        ]
      },
      {
        name: "React Basics",
        description: "React is a popular JavaScript library for building user interfaces. In this step, you'll learn about components, props, state, JSX, and basic event handling.",
        subtopics: [
          {
            title: "JSX Syntax",
            detail: "JSX is a syntax extension for JavaScript that looks like HTML and is used to describe UI in React.",
            code: `const element = <h1>Hello, world!</h1>;`
          },
          {
            title: "Components",
            detail: "Components are reusable pieces of UI. You can write them as functions or classes.",
            code: `function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}`
          },
          {
            title: "Props",
            detail: "Props are inputs to components. They are passed as attributes and are read-only.",
            code: `<Welcome name=\"Alice\" />`
          },
          {
            title: "State",
            detail: "State is data managed by a component. Use useState in function components.",
            code: `const [count, setCount] = useState(0);`
          },
          {
            title: "Event Handling",
            detail: "React uses camelCase for event handlers and passes functions as props.",
            code: `<button onClick={() => alert('Clicked!')}>Click Me</button>`
          }
        ],
        resources: [
          { label: "React Official Docs", url: "https://react.dev/learn" },
          { label: "React Tutorial", url: "https://reactjs.org/tutorial/tutorial.html" }
        ]
      },
      {
        name: "React Advanced",
        description: "Advanced React covers hooks (useEffect, useContext, useReducer), context, refs, custom hooks, performance optimization, and more.",
        subtopics: [
          {
            title: "useEffect Hook",
            detail: "useEffect lets you perform side effects in function components (like data fetching, subscriptions).",
            code: `useEffect(() => {\n  document.title = 'New Title';\n}, []);`
          },
          {
            title: "useContext Hook",
            detail: "useContext provides a way to pass data through the component tree without passing props manually at every level.",
            code: `const value = useContext(MyContext);`
          },
          {
            title: "useReducer Hook",
            detail: "useReducer is an alternative to useState for complex state logic.",
            code: `const [state, dispatch] = useReducer(reducer, initialState);`
          },
          {
            title: "Refs",
            detail: "Refs provide a way to access DOM nodes or React elements directly.",
            code: `const inputRef = useRef(null);\n<input ref={inputRef} />`
          },
          {
            title: "Custom Hooks",
            detail: "Custom hooks let you extract and reuse logic across components.",
            code: `function useCounter() {\n  const [count, setCount] = useState(0);\n  return { count, increment: () => setCount(c => c + 1) };\n}`
          }
        ],
        resources: [
          { label: "React Hooks Docs", url: "https://react.dev/reference/react" },
          { label: "React Patterns", url: "https://reactpatterns.com/" }
        ]
      },
      {
        name: "Next.js Basics",
        description: "Next.js is a React framework for server-side rendering and static site generation. Learn about pages, routing, and basic data fetching.",
        subtopics: [
          {
            title: "Pages & Routing",
            detail: "Each file in the pages directory becomes a route. Use Link for navigation.",
            code: `// pages/about.js\nexport default function About() {\n  return <div>About</div>;\n}\n// Navigation\nimport Link from 'next/link';\n<Link href=\"/about\">About</Link>`
          },
          {
            title: "Static Generation",
            detail: "getStaticProps lets you fetch data at build time.",
            code: `export async function getStaticProps() {\n  return { props: { data: 'Hello' } };\n}`
          },
          {
            title: "Server-side Rendering",
            detail: "getServerSideProps lets you fetch data on each request.",
            code: `export async function getServerSideProps() {\n  return { props: { data: 'Hello' } };\n}`
          },
          {
            title: "API Routes",
            detail: "You can create API endpoints in the pages/api directory.",
            code: `// pages/api/hello.js\nexport default function handler(req, res) {\n  res.status(200).json({ message: 'Hello' });\n}`
          }
        ],
        resources: [
          { label: "Next.js Docs", url: "https://nextjs.org/docs" },
          { label: "Next.js Learn", url: "https://nextjs.org/learn" }
        ]
      },
      {
        name: "Next.js Advanced",
        description: "Advanced Next.js covers dynamic routing, API integration, middleware, image optimization, and deployment.",
        subtopics: [
          {
            title: "Dynamic Routing",
            detail: "Use brackets in the pages directory to create dynamic routes.",
            code: `// pages/posts/[id].js\nimport { useRouter } from 'next/router';\nexport default function Post() {\n  const router = useRouter();\n  return <div>Post: {router.query.id}</div>;\n}`
          },
          {
            title: "API Integration",
            detail: "Fetch data from external APIs using fetch or axios.",
            code: `import useSWR from 'swr';\nconst fetcher = url => fetch(url).then(res => res.json());\nfunction Profile() {\n  const { data, error } = useSWR('/api/user', fetcher);\n  if (!data) return 'Loading...';\n  return <div>{data.name}</div>;\n}`
          },
          {
            title: "Middleware",
            detail: "Middleware lets you run code before a request is completed. Use it for authentication, redirects, etc.",
            code: `// middleware.js\nexport function middleware(req) {\n  // custom logic\n}`
          },
          {
            title: "Image Optimization",
            detail: "Use the next/image component for optimized images.",
            code: `import Image from 'next/image';\n<Image src=\"/logo.png\" width={200} height={100} alt=\"Logo\" />`
          },
          {
            title: "Deployment",
            detail: "Deploy your Next.js app to Vercel or other platforms.",
            code: `// Just push to GitHub and connect to Vercel!`
          }
        ],
        resources: [
          { label: "Next.js Advanced Docs", url: "https://nextjs.org/docs" },
          { label: "Next.js Examples", url: "https://github.com/vercel/next.js/tree/canary/examples" }
        ]
      },
      {
        name: "Node.js Basics",
        description: "Node.js is a JavaScript runtime that lets you run JavaScript on the server. It is used to build scalable, high-performance network applications. In this step, you'll learn about the Node.js environment, modules, npm, and basic server creation.",
        subtopics: [
          {
            title: "What is Node.js?",
            detail: "Node.js is a runtime environment that allows you to execute JavaScript code outside the browser. It is built on Chrome's V8 engine and is widely used for building backend services, APIs, and real-time applications.",
            code: `// Simple Node.js server\nconst http = require('http');\nhttp.createServer((req, res) => {\n  res.end('Hello from Node.js!');\n}).listen(3000);`
          },
          {
            title: "Modules & require()",
            detail: "Node.js uses modules to organize code. The require() function is used to import built-in or custom modules, making your code modular and reusable.",
            code: `const fs = require('fs');\nconst data = fs.readFileSync('file.txt', 'utf8');`
          },
          {
            title: "npm (Node Package Manager)",
            detail: "npm is the default package manager for Node.js. It allows you to install, update, and manage third-party libraries and tools for your projects.",
            code: `// Install a package\nnpm install express\n// Use it in your code\nconst express = require('express');`
          },
          {
            title: "Process & Environment Variables",
            detail: "The process object provides information about the current Node.js process. Environment variables are used to store configuration outside your code.",
            code: `console.log(process.env.NODE_ENV);`
          },
          {
            title: "File System (fs module)",
            detail: "The fs module allows you to interact with the file system, such as reading, writing, and deleting files.",
            code: `const fs = require('fs');\nfs.writeFileSync('hello.txt', 'Hello, Node!');`
          }
        ],
        resources: [
          { label: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
          { label: "Node.js Handbook", url: "https://www.freecodecamp.org/news/the-definitive-node-js-handbook-6912378afc6e/" }
        ]
      },
      {
        name: "Node.js Advanced",
        description: "Advanced Node.js covers asynchronous programming, event-driven architecture, streams, clustering, and performance optimization. These concepts help you build scalable and efficient backend applications.",
        subtopics: [
          {
            title: "Asynchronous Programming (Callbacks, Promises, Async/Await)",
            detail: "Node.js is designed for asynchronous, non-blocking operations. You can use callbacks, promises, or async/await to handle tasks like file I/O, network requests, and database queries without blocking the event loop.",
            code: `// Callback\nfs.readFile('file.txt', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n// Promise\nfs.promises.readFile('file.txt').then(data => console.log(data));\n// Async/Await\nasync function read() {\n  const data = await fs.promises.readFile('file.txt');\n  console.log(data);\n}`
          },
          {
            title: "EventEmitter & Events",
            detail: "Node.js uses an event-driven architecture. The EventEmitter class allows you to create, listen for, and emit custom events, enabling decoupled and scalable code.",
            code: `const EventEmitter = require('events');\nconst emitter = new EventEmitter();\nemitter.on('greet', name => console.log('Hello', name));\nemitter.emit('greet', 'Alice');`
          },
          {
            title: "Streams",
            detail: "Streams are used to read or write data piece by piece, making it possible to process large files or data sources efficiently. Streams are essential for building scalable applications that handle lots of data.",
            code: `const fs = require('fs');\nconst stream = fs.createReadStream('largefile.txt');\nstream.on('data', chunk => console.log(chunk));`
          },
          {
            title: "Clustering & Child Processes",
            detail: "Clustering allows you to run multiple Node.js processes to take advantage of multi-core systems. Child processes let you spawn new processes for heavy tasks.",
            code: `const cluster = require('cluster');\nif (cluster.isMaster) {\n  cluster.fork();\n} else {\n  // Worker code\n}`
          },
          {
            title: "Performance & Debugging",
            detail: "Node.js provides tools for profiling, debugging, and optimizing performance. Use the built-in inspector, --inspect flag, and external tools like PM2 for monitoring.",
            code: `// Start Node.js with inspector\nnode --inspect app.js\n// Use PM2 for process management\npm install pm2 -g\npm start pm2 app.js`
          }
        ],
        resources: [
          { label: "Node.js Advanced Docs", url: "https://nodejs.org/en/docs/guides/" },
          { label: "Node.js Streams", url: "https://nodejs.org/api/stream.html" }
        ]
      },
      {
        name: "Express Basics",
        description: "Express is a minimal and flexible Node.js web application framework. It provides a robust set of features for building web and mobile applications. In this step, you'll learn about routing, middleware, and basic server setup.",
        subtopics: [
          {
            title: "What is Express?",
            detail: "Express is a popular framework for building web applications and APIs with Node.js. It simplifies server creation, routing, and handling HTTP requests and responses.",
            code: `const express = require('express');\nconst app = express();\napp.listen(3000, () => console.log('Server running'));`
          },
          {
            title: "Routing",
            detail: "Routing refers to how an application responds to client requests for specific endpoints. Express makes it easy to define routes for different HTTP methods and paths.",
            code: `app.get('/', (req, res) => {\n  res.send('Home Page');\n});\napp.post('/submit', (req, res) => {\n  res.send('Form submitted');\n});`
          },
          {
            title: "Middleware",
            detail: "Middleware functions are functions that have access to the request and response objects. They can modify requests, responses, or end the request-response cycle. Middleware is used for logging, authentication, error handling, and more.",
            code: `app.use((req, res, next) => {\n  console.log(req.method, req.url);\n  next();\n});`
          },
          {
            title: "Serving Static Files",
            detail: "Express can serve static files such as images, CSS, and JavaScript using the express.static middleware.",
            code: `app.use(express.static('public'));`
          },
          {
            title: "Request & Response Objects",
            detail: "The req and res objects represent the HTTP request and response. You use them to read data from the client and send data back.",
            code: `app.get('/user', (req, res) => {\n  res.json({ name: 'Alice' });\n});`
          }
        ],
        resources: [
          { label: "Express Docs", url: "https://expressjs.com/" },
          { label: "Express Tutorial", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" }
        ]
      },
      {
        name: "Express.js Advanced",
        description: "Advanced Express.js covers authentication, error handling, security best practices, advanced routing, and performance optimization. These topics help you build robust and secure web applications.",
        subtopics: [
          {
            title: "Authentication & Authorization",
            detail: "Implementing authentication (login, signup) and authorization (role-based access) is crucial for protecting your app. Use libraries like Passport.js or JWT for secure authentication.",
            code: `const passport = require('passport');\napp.post('/login', passport.authenticate('local'), (req, res) => {\n  res.send('Logged in');\n});`
          },
          {
            title: "Error Handling",
            detail: "Express lets you define error-handling middleware to catch and respond to errors in a centralized way. This improves reliability and user experience.",
            code: `app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});`
          },
          {
            title: "Security Best Practices",
            detail: "Protect your Express app from common vulnerabilities by using helmet, rate limiting, input validation, and HTTPS. Always sanitize user input and handle sensitive data securely.",
            code: `const helmet = require('helmet');\napp.use(helmet());`
          },
          {
            title: "Advanced Routing & Routers",
            detail: "Express Routers let you organize routes into separate modules. You can use route parameters, nested routes, and middleware for complex applications.",
            code: `const router = express.Router();\nrouter.get('/users/:id', ...);\napp.use('/api', router);`
          },
          {
            title: "Performance Optimization",
            detail: "Optimize your Express app by enabling gzip compression, caching, and using efficient middleware. Monitor performance and scale horizontally if needed.",
            code: `const compression = require('compression');\napp.use(compression());`
          }
        ],
        resources: [
          { label: "Express.js Advanced Docs", url: "https://expressjs.com/en/advanced/best-practice-performance.html" },
          { label: "Express Security", url: "https://expressjs.com/en/advanced/best-practice-security.html" }
        ]
      },
      {
        name: "API Development",
        description: "APIs (Application Programming Interfaces) allow different software systems to communicate. In web development, REST and GraphQL are popular API styles. This step covers RESTful API design, CRUD operations, and using tools like Postman.",
        subtopics: [
          {
            title: "What is an API?",
            detail: "An API is a set of rules that allows different software applications to communicate. In web development, APIs are used to connect the frontend and backend, or to integrate with third-party services.",
            code: `// Example API endpoint\napp.get('/api/data', (req, res) => {\n  res.json({ message: 'Hello API' });\n});`
          },
          {
            title: "RESTful API Design",
            detail: "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources.",
            code: `// RESTful routes\napp.get('/items', ...); // Read\napp.post('/items', ...); // Create\napp.put('/items/:id', ...); // Update\napp.delete('/items/:id', ...); // Delete`
          },
          {
            title: "CRUD Operations",
            detail: "CRUD stands for Create, Read, Update, Delete. These are the four basic operations for managing data in an application.",
            code: `// Create\napp.post('/users', ...);\n// Read\napp.get('/users', ...);\n// Update\napp.put('/users/:id', ...);\n// Delete\napp.delete('/users/:id', ...);`
          },
          {
            title: "Using Postman",
            detail: "Postman is a popular tool for testing APIs. It allows you to send HTTP requests, inspect responses, and automate API testing.",
            code: `// No code, but use Postman to test endpoints like:\nGET http://localhost:3000/api/data`
          },
          {
            title: "GraphQL Basics",
            detail: "GraphQL is a query language for APIs that allows clients to request exactly the data they need. It provides a more flexible alternative to REST.",
            code: `// Example GraphQL query\n{\n  user(id: 1) {\n    name\n    email\n  }\n}`
          }
        ],
        resources: [
          { label: "RESTful API Tutorial", url: "https://restfulapi.net/" },
          { label: "GraphQL Docs", url: "https://graphql.org/learn/" }
        ]
      },
      {
        name: "API Development Advanced",
        description: "Advanced API development covers authentication, rate limiting, versioning, documentation, and GraphQL advanced features. These practices help you build secure, scalable, and maintainable APIs.",
        subtopics: [
          {
            title: "API Authentication (JWT, OAuth)",
            detail: "Secure your APIs using authentication methods like JWT (JSON Web Tokens) or OAuth. This ensures only authorized users can access protected endpoints.",
            code: `// JWT example\nconst jwt = require('jsonwebtoken');\nconst token = jwt.sign({ userId: 1 }, 'secret');\n// Verify\njwt.verify(token, 'secret');`
          },
          {
            title: "Rate Limiting",
            detail: "Rate limiting prevents abuse by limiting the number of requests a client can make in a given time. Use middleware like express-rate-limit to protect your API.",
            code: `const rateLimit = require('express-rate-limit');\napp.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));`
          },
          {
            title: "API Versioning",
            detail: "Versioning your API (e.g., /v1/, /v2/) allows you to make changes without breaking existing clients. This is important for long-term maintenance.",
            code: `app.use('/api/v1', v1Router);\napp.use('/api/v2', v2Router);`
          },
          {
            title: "API Documentation (Swagger)",
            detail: "Good documentation helps developers use your API. Tools like Swagger/OpenAPI let you generate interactive docs from your code.",
            code: `const swaggerUi = require('swagger-ui-express');\napp.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));`
          },
          {
            title: "GraphQL Advanced (Resolvers, Mutations)",
            detail: "Advanced GraphQL features include custom resolvers, mutations, and subscriptions for real-time data. This allows for flexible and powerful APIs.",
            code: `const resolvers = {\n  Query: { user: () => ... },\n  Mutation: { addUser: () => ... }\n};`
          }
        ],
        resources: [
          { label: "API Security Best Practices", url: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" },
          { label: "Swagger Docs", url: "https://swagger.io/docs/" }
        ]
      },
      {
        name: "Deployment",
        description: "Deployment is the process of making your application available to users. This step covers deploying to platforms like Netlify, Vercel, Heroku, using Docker, and setting up CI/CD pipelines. Mastering deployment ensures your app is accessible, reliable, and scalable.",
        subtopics: [
          {
            title: "What is Deployment?",
            detail: "Deployment is the process of publishing your application to a server or cloud platform so users can access it. It involves building, uploading, and configuring your app for production. Understanding deployment is essential for turning your code into a live, usable product.",
            code: `// Example: Deploy to Vercel\n// 1. Push code to GitHub\n// 2. Connect repo to Vercel\n// 3. Vercel builds and deploys automatically`
          },
          {
            title: "Netlify & Vercel",
            detail: "Netlify and Vercel are popular platforms for deploying static sites and serverless functions. They offer free hosting, custom domains, and continuous deployment from Git. These platforms make it easy to get your site online with minimal configuration.",
            code: `// Deploy static site\n// 1. Push to GitHub\n// 2. Connect to Netlify/Vercel\n// 3. Done!`
          },
          {
            title: "Heroku",
            detail: "Heroku is a cloud platform for deploying web apps and APIs. It supports Node.js, Python, and more. You can deploy directly from Git and scale with a single click. Heroku is great for quick prototypes and small-to-medium projects.",
            code: `// Deploy to Heroku\nheroku create\ngit push heroku main`
          },
          {
            title: "Docker",
            detail: "Docker lets you package your app and its dependencies into containers. This ensures your app runs the same everywhere, making deployment and scaling easier. Docker is widely used in modern DevOps workflows.",
            code: `// Dockerfile example\nFROM node:18\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD [\"npm\", \"start\"]`
          },
          {
            title: "CI/CD Pipelines",
            detail: "Continuous Integration and Continuous Deployment (CI/CD) automate the process of testing and deploying your code. Tools like GitHub Actions, GitLab CI, and CircleCI help you catch bugs early and deploy faster, improving code quality and reliability.",
            code: `// Example GitHub Actions workflow\nname: CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: Install\n        run: npm install\n      - name: Test\n        run: npm test`
          }
        ],
        resources: [
          { label: "Netlify Docs", url: "https://docs.netlify.com/" },
          { label: "Vercel Docs", url: "https://vercel.com/docs" },
          { label: "Heroku Docs", url: "https://devcenter.heroku.com/" },
          { label: "Docker Docs", url: "https://docs.docker.com/" },
          { label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" }
        ]
      },
      {
        name: "Database Management",
        description: "Databases store and organize your application's data. This step covers SQL and NoSQL databases, CRUD operations, and using ORMs like Mongoose and Sequelize.",
        subtopics: [
          {
            title: "What is a Database?",
            detail: "A database is a system for storing, organizing, and retrieving data. Databases are essential for most web applications, enabling persistent storage of user information, content, and more.",
            code: `// Example: SQL database\nCREATE TABLE users (id INT, name VARCHAR(100));`
          },
          {
            title: "SQL vs NoSQL",
            detail: "SQL databases (like MySQL, PostgreSQL) use structured tables and support complex queries. NoSQL databases (like MongoDB) store data in flexible formats like JSON and are great for unstructured data.",
            code: `// SQL\nSELECT * FROM users;\n// NoSQL (MongoDB)\ndb.users.find({})`
          },
          {
            title: "CRUD Operations",
            detail: "CRUD stands for Create, Read, Update, Delete. These are the basic operations for managing data in any database.",
            code: `// SQL\nINSERT INTO users (name) VALUES ('Alice');\nSELECT * FROM users;\nUPDATE users SET name='Bob' WHERE id=1;\nDELETE FROM users WHERE id=1;`
          },
          {
            title: "Mongoose (MongoDB ODM)",
            detail: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model your application data.",
            code: `const mongoose = require('mongoose');\nconst User = mongoose.model('User', { name: String });\nUser.create({ name: 'Alice' });`
          },
          {
            title: "Sequelize (SQL ORM)",
            detail: "Sequelize is a promise-based ORM for Node.js and SQL databases. It helps you define models, run queries, and manage relationships in your database.",
            code: `const { Sequelize, DataTypes } = require('sequelize');\nconst sequelize = new Sequelize('sqlite::memory:');\nconst User = sequelize.define('User', { name: DataTypes.STRING });\nUser.create({ name: 'Alice' });`
          }
        ],
        resources: [
          { label: "MongoDB Docs", url: "https://docs.mongodb.com/" },
          { label: "Mongoose Docs", url: "https://mongoosejs.com/docs/" },
          { label: "Sequelize Docs", url: "https://sequelize.org/docs/" },
          { label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" }
        ]
      },
      {
        name: "Database Management Advanced",
        description: "Advanced database management covers indexing, transactions, relationships, migrations, backups, and performance tuning. These skills are essential for building reliable and scalable applications.",
        subtopics: [
          {
            title: "Indexes & Performance",
            detail: "Indexes speed up data retrieval in databases. Understanding how to create and use indexes is key to optimizing query performance.",
            code: `-- SQL\nCREATE INDEX idx_name ON users(name);\n// MongoDB\ndb.users.createIndex({ name: 1 });`
          },
          {
            title: "Transactions",
            detail: "Transactions ensure a series of database operations are completed successfully as a group. They are essential for maintaining data integrity.",
            code: `-- SQL\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id=1;\nUPDATE accounts SET balance = balance + 100 WHERE id=2;\nCOMMIT;`
          },
          {
            title: "Relationships (One-to-Many, Many-to-Many)",
            detail: "Databases often need to represent relationships between tables or collections. Understanding one-to-many and many-to-many relationships is crucial for data modeling.",
            code: `-- SQL\nCREATE TABLE orders (id INT, user_id INT);\n-- MongoDB (referencing)\norder = { userId: ObjectId('...') }`
          },
          {
            title: "Migrations",
            detail: "Migrations are scripts that update your database schema over time. They help you manage changes and keep your database in sync with your application.",
            code: `// Sequelize migration\nmodule.exports = {\n  up: (queryInterface, Sequelize) => {\n    return queryInterface.createTable('users', { id: Sequelize.INTEGER });\n  }\n};`
          },
          {
            title: "Backups & Recovery",
            detail: "Regular backups protect your data from loss. Learn how to back up and restore your database using built-in tools or third-party services.",
            code: `// MongoDB backup\nmongodump --db mydb\n// PostgreSQL backup\npg_dump mydb > backup.sql`
          }
        ],
        resources: [
          { label: "PostgreSQL Advanced", url: "https://www.postgresql.org/docs/current/" },
          { label: "MongoDB Indexes", url: "https://docs.mongodb.com/manual/indexes/" },
          { label: "Sequelize Migrations", url: "https://sequelize.org/master/manual/migrations.html" }
        ]
      }
    ],
    duration: "6-12 months",
    difficulty: "Beginner to Advanced"
  },
  {
    id: 6,
    title: "UI/UX Design Roadmap",
    description: "A step-by-step guide for aspiring UI/UX designers, from design fundamentals to prototyping, accessibility, and building a professional portfolio.",
    steps: [
      {
        name: "Design Fundamentals (Color, Typography, Layout, Spacing)",
        description: "Start with the basics of visual design: color theory, typography, layout, and spacing. These are the building blocks of all great interfaces.",
        subtopics: [
          {
            title: "Color Theory",
            detail: "Learn about color wheels, harmony, contrast, and how to use color to create mood and hierarchy.",
            code: `# Use color palettes from coolors.co or Adobe Color.`
          },
          {
            title: "Typography",
            detail: "Understand font families, weights, line height, and how to create readable, attractive text.",
            code: `font-family: 'Inter', sans-serif;\nfont-size: 16px;\nline-height: 1.5;`
          },
          {
            title: "Layout & Grids",
            detail: "Use grids, alignment, and spacing to create balanced, organized designs.",
            code: `# 8pt grid system\ndisplay: grid;\ngrid-template-columns: repeat(12, 1fr);`
          },
          {
            title: "Visual Hierarchy",
            detail: "Guide users' attention using size, color, contrast, and spacing.",
            code: `# Use larger, bolder text for headings.`
          },
          {
            title: "White Space & Balance",
            detail: "Use white space to reduce clutter and improve readability. Balance elements for a harmonious layout.",
            code: `# Add padding and margins to separate elements.`
          }
        ],
        resources: [
          { label: "Refactoring UI Book", url: "https://refactoringui.com/book/" },
          { label: "Color Theory Guide", url: "https://www.toptal.com/designers/color/color-theory" }
        ]
      },
      {
        name: "UX Principles (User-Centered Design, Accessibility, Heuristics)",
        description: "Learn the core principles of user experience: user-centered design, accessibility, and usability heuristics.",
        subtopics: [
          {
            title: "User-Centered Design",
            detail: "Design with the user's needs, goals, and context in mind. Involve users throughout the process.",
            code: `# Create personas and user scenarios.`
          },
          {
            title: "Usability Heuristics",
            detail: "Apply Jakob Nielsen's 10 usability heuristics to evaluate and improve designs.",
            code: `# Visibility of system status, error prevention, consistency, etc.`
          },
          {
            title: "Accessibility Basics",
            detail: "Design for all users, including those with disabilities. Use sufficient color contrast, alt text, and keyboard navigation.",
            code: `# Test with screen readers and color contrast tools.`
          },
          {
            title: "Emotional Design",
            detail: "Consider users' emotions and create delightful, engaging experiences.",
            code: `# Use micro-interactions and positive feedback.`
          }
        ],
        resources: [
          { label: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/ten-usability-heuristics/" },
          { label: "A11y Project", url: "https://www.a11yproject.com/" }
        ]
      },
      {
        name: "User Research & Empathy Mapping",
        description: "Understand your users through research, interviews, and empathy mapping. This step is crucial for designing products that truly solve user problems.",
        subtopics: [
          {
            title: "User Interviews",
            detail: "Conduct interviews to gather qualitative insights about user needs, pain points, and behaviors.",
            code: `# Prepare open-ended questions and record sessions.`
          },
          {
            title: "Surveys & Questionnaires",
            detail: "Use surveys to collect quantitative data from a larger audience.",
            code: `# Use Google Forms or Typeform for surveys.`
          },
          {
            title: "Empathy Mapping",
            detail: "Create empathy maps to visualize what users think, feel, say, and do.",
            code: `# Use Miro or FigJam for empathy mapping.`
          },
          {
            title: "Personas & Journey Mapping",
            detail: "Develop personas and user journey maps to guide design decisions.",
            code: `# Map user steps, touchpoints, and emotions.`
          }
        ],
        resources: [
          { label: "NNG User Research", url: "https://www.nngroup.com/topic/user-research/" },
          { label: "Empathy Map Guide", url: "https://www.nngroup.com/articles/empathy-mapping/" }
        ]
      },
      {
        name: "Wireframing (Low-Fidelity Sketches & Layouts)",
        description: "Wireframing is the process of creating low-fidelity sketches and layouts to plan the structure of your designs before adding details.",
        subtopics: [
          {
            title: "Paper Sketching",
            detail: "Start with quick paper sketches to explore ideas and layouts.",
            code: `# Use pen and paper or whiteboards for brainstorming.`
          },
          {
            title: "Digital Wireframing",
            detail: "Use tools like Figma, Balsamiq, or Adobe XD to create digital wireframes.",
            code: `# Use rectangles and lines to represent UI elements.`
          },
          {
            title: "Layout Patterns",
            detail: "Apply common layout patterns like cards, grids, and navigation bars.",
            code: `# Use UI pattern libraries for inspiration.`
          },
          {
            title: "Iterative Refinement",
            detail: "Refine wireframes based on feedback and usability testing.",
            code: `# Share wireframes with users and stakeholders.`
          }
        ],
        resources: [
          { label: "Figma Wireframing Guide", url: "https://www.figma.com/blog/wireframing-in-figma/" },
          { label: "Balsamiq Wireframing", url: "https://balsamiq.com/learn/resources/articles/wireframes/" }
        ]
      },
      {
        name: "UI Design Tools (Figma, Adobe XD, Sketch)",
        description: "Master modern UI design tools for creating high-fidelity designs, prototypes, and developer handoff.",
        subtopics: [
          {
            title: "Figma Essentials",
            detail: "Learn Figma's interface, layers, components, and prototyping features.",
            code: `# Use Figma's auto-layout and variants for responsive design.`
          },
          {
            title: "Adobe XD & Sketch",
            detail: "Explore Adobe XD and Sketch for UI design, prototyping, and collaboration.",
            code: `# Use artboards, symbols, and shared libraries.`
          },
          {
            title: "Design Handoff",
            detail: "Prepare designs for developer handoff with specs, assets, and style guides.",
            code: `# Use Figma Inspect or Zeplin for handoff.`
          },
          {
            title: "Plugins & Extensions",
            detail: "Enhance your workflow with plugins for icons, illustrations, and automation.",
            code: `# Try Iconify, Unsplash, or Content Reel plugins.`
          }
        ],
        resources: [
          { label: "Figma Learn", url: "https://www.figma.com/resources/learn-design/" },
          { label: "Adobe XD Tutorials", url: "https://helpx.adobe.com/xd/tutorials.html" }
        ]
      },
      {
        name: "Prototyping (Clickable Prototypes, Flows)",
        description: "Prototyping brings your designs to life. Create interactive, clickable prototypes to test flows and gather feedback.",
        subtopics: [
          {
            title: "Clickable Prototypes",
            detail: "Link screens and add interactions to simulate real user flows.",
            code: `# Use Figma or Adobe XD prototyping features.`
          },
          {
            title: "User Flows & Scenarios",
            detail: "Map out user flows and scenarios to ensure smooth navigation and task completion.",
            code: `# Create flow diagrams for key tasks.`
          },
          {
            title: "Animation & Transitions",
            detail: "Add micro-interactions, transitions, and animations to enhance usability and delight.",
            code: `# Use Smart Animate in Figma for smooth transitions.`
          },
          {
            title: "Remote Prototyping & Testing",
            detail: "Share prototypes remotely and gather feedback from users and stakeholders.",
            code: `# Use Figma share links or Maze for remote testing.`
          }
        ],
        resources: [
          { label: "Prototyping in Figma", url: "https://help.figma.com/hc/en-us/articles/360040451373-Create-prototypes-in-Figma" },
          { label: "UXPin Prototyping", url: "https://www.uxpin.com/studio/blog/prototyping-tools/" }
        ]
      },
      {
        name: "Usability Testing & Feedback Analysis",
        description: "Test your designs with real users to identify issues and improve usability. Analyze feedback and iterate on your designs.",
        subtopics: [
          {
            title: "Usability Testing Methods",
            detail: "Conduct moderated, unmoderated, remote, or in-person usability tests.",
            code: `# Use tools like Lookback, UserTesting, or Google Meet.`
          },
          {
            title: "Feedback Collection",
            detail: "Gather feedback through surveys, interviews, and analytics.",
            code: `# Use Google Forms, Hotjar, or direct interviews.`
          },
          {
            title: "A/B Testing",
            detail: "Test design variations to see which performs better with users.",
            code: `# Use Google Optimize or Optimizely for A/B tests.`
          },
          {
            title: "Iterative Design",
            detail: "Refine your designs based on feedback and testing results.",
            code: `# Update wireframes and prototypes after each test round.`
          }
        ],
        resources: [
          { label: "NNG Usability Testing", url: "https://www.nngroup.com/topic/usability-testing/" },
          { label: "A/B Testing Guide", url: "https://vwo.com/ab-testing/" }
        ]
      },
      {
        name: "Design Systems & Style Guides",
        description: "Design systems ensure consistency and scalability. Learn to create and maintain style guides, component libraries, and design tokens.",
        subtopics: [
          {
            title: "Style Guides",
            detail: "Document colors, typography, spacing, and UI elements for consistent design.",
            code: `# Use Figma or Zeroheight for style guides.`
          },
          {
            title: "Component Libraries",
            detail: "Build reusable UI components for faster, more consistent design and development.",
            code: `# Use Figma components and variants.`
          },
          {
            title: "Design Tokens",
            detail: "Use design tokens to store and manage design decisions like colors, spacing, and typography in code.",
            code: `# Export tokens to CSS variables or JSON.`
          },
          {
            title: "Governance & Maintenance",
            detail: "Establish processes for updating and maintaining your design system.",
            code: `# Schedule regular audits and updates.`
          }
        ],
        resources: [
          { label: "Design Systems Repo", url: "https://github.com/alexpate/awesome-design-systems" },
          { label: "Zeroheight", url: "https://zeroheight.com/" }
        ]
      },
      {
        name: "Mobile & Responsive Design Principles",
        description: "Design for all devices and screen sizes. Learn about responsive grids, breakpoints, and mobile-first design.",
        subtopics: [
          {
            title: "Responsive Grids & Breakpoints",
            detail: "Use grids and breakpoints to adapt layouts to different screen sizes.",
            code: `@media (max-width: 600px) { .container { flex-direction: column; } }`
          },
          {
            title: "Touch Targets & Gestures",
            detail: "Design large, accessible touch targets and support common gestures for mobile users.",
            code: `# Minimum touch target: 48x48px`
          },
          {
            title: "Mobile Navigation Patterns",
            detail: "Use navigation patterns like tab bars, drawers, and bottom sheets for mobile apps.",
            code: `# Use hamburger menus or tab bars for navigation.`
          },
          {
            title: "Performance Optimization",
            detail: "Optimize images, fonts, and assets for fast loading and smooth interactions on mobile devices.",
            code: `# Use SVGs and responsive images.`
          }
        ],
        resources: [
          { label: "Google Responsive Design", url: "https://web.dev/responsive-web-design-basics/" },
          { label: "UX Collective Mobile", url: "https://uxdesign.cc/tagged/mobile-design" }
        ]
      },
      {
        name: "Web Design Basics (HTML, CSS – optional but useful)",
        description: "Understanding HTML and CSS helps you communicate with developers and design for the web. Learn the basics of structure, styling, and layout.",
        subtopics: [
          {
            title: "HTML Structure",
            detail: "Learn about semantic HTML elements and how to structure web pages for accessibility and SEO.",
            code: `<header> <nav> <main> <footer>`
          },
          {
            title: "CSS Styling",
            detail: "Use CSS to style text, layout, and UI components. Learn about selectors, specificity, and the box model.",
            code: `body { font-family: Arial; margin: 0; }`
          },
          {
            title: "Flexbox & Grid",
            detail: "Modern layout techniques like Flexbox and CSS Grid make responsive design easier.",
            code: `.container { display: flex; }`
          },
          {
            title: "Developer Handoff",
            detail: "Prepare assets, specs, and code snippets for smooth collaboration with developers.",
            code: `# Use Figma Inspect or Zeplin for handoff.`
          }
        ],
        resources: [
          { label: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          { label: "CSS Tricks", url: "https://css-tricks.com/" }
        ]
      },
      {
        name: "Micro-Interactions & Animation Design",
        description: "Micro-interactions and animations add delight and feedback to your designs. Learn to design and prototype engaging interactions.",
        subtopics: [
          {
            title: "Micro-Interactions",
            detail: "Design small, purposeful interactions for feedback, status, and guidance.",
            code: `# Button hover, loading spinners, toggles.`
          },
          {
            title: "Animation Principles",
            detail: "Apply animation principles like easing, timing, and anticipation for smooth, natural motion.",
            code: `# Use cubic-bezier for custom easing.`
          },
          {
            title: "Prototyping Animations",
            detail: "Use Figma, Principle, or After Effects to prototype and test animations.",
            code: `# Use Figma Smart Animate or Lottie for animations.`
          },
          {
            title: "Performance & Accessibility",
            detail: "Ensure animations are performant and don't hinder accessibility. Provide reduced motion options.",
            code: `@media (prefers-reduced-motion: reduce) { animation: none; }`
          }
        ],
        resources: [
          { label: "Microinteractions Book", url: "https://microinteractions.com/" },
          { label: "LottieFiles", url: "https://lottiefiles.com/" }
        ]
      },
      {
        name: "Collaboration Tools (Zeplin, FigJam, Dev Handoff)",
        description: "Collaboration is key in design. Use tools for feedback, handoff, and teamwork with developers and stakeholders.",
        subtopics: [
          {
            title: "Design Handoff",
            detail: "Share specs, assets, and code snippets with developers for smooth implementation.",
            code: `# Use Zeplin, Figma Inspect, or Avocode.`
          },
          {
            title: "Real-Time Collaboration",
            detail: "Work together in real time using FigJam, Figma, or Miro for brainstorming and feedback.",
            code: `# Use sticky notes, comments, and live cursors.`
          },
          {
            title: "Version Control for Design",
            detail: "Track changes, manage versions, and collaborate on design files.",
            code: `# Use Figma branching or Abstract for Sketch.`
          },
          {
            title: "Design Documentation",
            detail: "Document design decisions, guidelines, and rationale for future reference.",
            code: `# Maintain a design wiki or documentation site.`
          }
        ],
        resources: [
          { label: "Zeplin Docs", url: "https://support.zeplin.io/en/" },
          { label: "FigJam Guide", url: "https://help.figma.com/hc/en-us/articles/4402222223383-Get-started-with-FigJam" }
        ]
      },
      {
        name: "Accessibility (WCAG, ARIA Roles, Inclusive Design)",
        description: "Design for everyone by following accessibility standards (WCAG), using ARIA roles, and practicing inclusive design.",
        subtopics: [
          {
            title: "WCAG Guidelines",
            detail: "Follow the Web Content Accessibility Guidelines (WCAG) for color contrast, text size, and navigation.",
            code: `# Use tools like axe or Lighthouse for audits.`
          },
          {
            title: "ARIA Roles & Landmarks",
            detail: "Use ARIA roles and landmarks to improve navigation for screen readers.",
            code: `<nav role="navigation"> <main role="main">`
          },
          {
            title: "Keyboard & Screen Reader Support",
            detail: "Ensure all functionality is accessible via keyboard and works with screen readers.",
            code: `# Test with Tab key and VoiceOver/NVDA.`
          },
          {
            title: "Inclusive Design Principles",
            detail: "Design for a diverse range of users, abilities, and contexts.",
            code: `# Provide alternatives for images, captions for video.`
          }
        ],
        resources: [
          { label: "WebAIM Accessibility", url: "https://webaim.org/" },
          { label: "W3C WAI", url: "https://www.w3.org/WAI/" }
        ]
      },
      {
        name: "Portfolio Building (Case Studies, Behance/Dribbble)",
        description: "Showcase your work with a strong portfolio. Create case studies, share on Behance/Dribbble, and document your design process.",
        subtopics: [
          {
            title: "Case Study Writing",
            detail: "Tell the story of your projects, including problem, process, solution, and results.",
            code: `# Use before/after visuals and user feedback.`
          },
          {
            title: "Portfolio Website",
            detail: "Build a personal website to display your work, resume, and contact info.",
            code: `# Use Webflow, Wix, or custom HTML/CSS.`
          },
          {
            title: "Showcasing on Platforms",
            detail: "Share your work on Behance, Dribbble, and LinkedIn to reach a wider audience.",
            code: `# Create project thumbnails and write engaging descriptions.`
          },
          {
            title: "Continuous Improvement",
            detail: "Regularly update your portfolio with new work and reflect on your growth as a designer.",
            code: `# Add new case studies and remove outdated work.`
          }
        ],
        resources: [
          { label: "Behance Portfolio Guide", url: "https://www.behance.net/galleries/graphic-design/portfolio" },
          { label: "Dribbble Playbook", url: "https://dribbble.com/resources/playbook" }
        ]
      },
      {
        name: "Freelancing / Job Preparation (Interviews, Challenges)",
        description: "Prepare for a career in UI/UX by building your resume, practicing interviews, and tackling design challenges. Learn about freelancing platforms and job search strategies.",
        subtopics: [
          {
            title: "Resume & Cover Letter Writing",
            detail: "Craft a compelling resume and cover letter tailored to design roles.",
            code: `# Highlight projects, skills, and impact.`
          },
          {
            title: "Interview Preparation",
            detail: "Practice common design interview questions, whiteboard challenges, and portfolio walkthroughs.",
            code: `# Prepare stories using the STAR method.`
          },
          {
            title: "Freelancing Platforms",
            detail: "Explore platforms like Upwork, Fiverr, and Toptal for freelance opportunities.",
            code: `# Create a strong profile and proposal template.`
          },
          {
            title: "Design Challenges & Take-Home Assignments",
            detail: "Practice with real-world design challenges and take-home assignments to build confidence and skills.",
            code: `# Use sites like UX Challenge, Briefbox, or Dribbble Weekly Warm-Up.`
          }
        ],
        resources: [
          { label: "UX Interview Guide", url: "https://www.springboard.com/blog/design/ux-interview-questions/" },
          { label: "Freelance Platforms", url: "https://www.upwork.com/" }
        ]
      }
    ],
    duration: "6-12 months",
    difficulty: "Beginner to Advanced"
  },
  {
    id: 3,
    title: "Medical Student Roadmap",
    description: "A step-by-step guide for aspiring doctors, from pre-medical studies to specialization and beyond. Covers exams, clinical training, research, and career options.",
    steps: [
      {
        name: "Pre-Medical (FSc / A-Levels with Biology)",
        description: "The journey to becoming a doctor starts with pre-medical education. This includes FSc (Pre-Medical) or A-Levels with Biology, Chemistry, and Physics. A strong foundation in these subjects is essential for success in medical entrance exams and future studies.",
        subtopics: [
          {
            title: "Subject Mastery",
            detail: "Focus on understanding core concepts in Biology, Chemistry, and Physics. Build problem-solving skills and develop a habit of regular revision.",
            code: `# Example: Biology concept\n# DNA replication\nDNA -> RNA -> Protein`
          },
          {
            title: "Exam Preparation",
            detail: "Practice with past papers, MCQs, and mock exams. Time management and exam strategies are crucial for scoring well.",
            code: `# Practice MCQs\n# Review past papers\n# Simulate timed tests`
          },
          {
            title: "Extracurricular Activities",
            detail: "Participate in science fairs, Olympiads, and volunteer work to strengthen your application and develop soft skills.",
            code: `# Join science clubs\n# Volunteer at local clinics or hospitals`
          }
        ],
        resources: [
          { label: "FSc Biology Notes", url: "https://www.pakprep.com/notes/biology" },
          { label: "A-Level Biology Resources", url: "https://www.physicsandmathstutor.com/biology-revision/a-level-aqa/" }
        ]
      },
      {
        name: "Medical College Admission (e.g., MDCAT / NUMS / SAT)",
        description: "Admission to medical college requires passing entrance exams like MDCAT, NUMS, or SAT (for international students). Preparation involves mastering the syllabus, practicing MCQs, and developing test-taking strategies.",
        subtopics: [
          {
            title: "Understanding Exam Format",
            detail: "Familiarize yourself with the structure, marking scheme, and time limits of your target exam.",
            code: `# MDCAT: 210 MCQs, 3.5 hours\n# NUMS: 180 MCQs, 3 hours`
          },
          {
            title: "Syllabus Coverage",
            detail: "Cover all topics in Biology, Chemistry, Physics, and English. Focus on high-yield areas and weak points.",
            code: `# Make a checklist of topics\n# Prioritize difficult subjects`
          },
          {
            title: "Practice & Mock Tests",
            detail: "Take regular mock tests to build speed and accuracy. Analyze mistakes and adjust your study plan accordingly.",
            code: `# Use online MCQ banks\n# Review incorrect answers`
          }
        ],
        resources: [
          { label: "PMC MDCAT Syllabus", url: "https://www.pmc.gov.pk/Examinations/MDCAT/Syllabus" },
          { label: "NUMS Entry Test Guide", url: "https://numspak.edu.pk/" }
        ]
      },
      {
        name: "MBBS / BDS Program (5 Years)",
        description: "The MBBS/BDS program is a rigorous five-year journey covering basic sciences, clinical subjects, and hands-on training. Success requires discipline, time management, and a passion for learning.",
        subtopics: [
          {
            title: "Basic Sciences (Years 1-2)",
            detail: "Study Anatomy, Physiology, Biochemistry, and related subjects. Build a strong foundation for clinical years.",
            code: `# Anatomy: Human body structure\n# Physiology: Body functions\n# Biochemistry: Chemical processes`
          },
          {
            title: "Clinical Sciences (Years 3-5)",
            detail: "Learn about Medicine, Surgery, Pediatrics, Gynecology, and more. Attend clinical rotations and interact with patients.",
            code: `# Medicine: Diagnosis & treatment\n# Surgery: Procedures & skills`
          },
          {
            title: "Professional Exams",
            detail: "Pass professional exams at the end of each year to progress. Prepare with textbooks, notes, and group study.",
            code: `# Review past papers\n# Join study groups`
          }
        ],
        resources: [
          { label: "MBBS Curriculum", url: "https://www.pmdc.org.pk/" },
          { label: "BDS Program Guide", url: "https://www.pmdc.org.pk/" }
        ]
      },
      {
        name: "Clinical Rotations & House Job (1 Year)",
        description: "After graduation, complete a one-year house job (internship) in various hospital departments. This is essential for hands-on experience and professional growth.",
        subtopics: [
          {
            title: "Department Rotations",
            detail: "Rotate through Medicine, Surgery, Pediatrics, Gynecology, and other specialties. Learn practical skills and patient care.",
            code: `# Medicine: Ward rounds\n# Surgery: Assisting in OT`
          },
          {
            title: "Skill Development",
            detail: "Develop clinical skills like history taking, examination, and basic procedures (IV, suturing, etc.).",
            code: `# Practice clinical skills\n# Seek feedback from seniors`
          },
          {
            title: "Professionalism & Ethics",
            detail: "Maintain professionalism, empathy, and ethical standards in all interactions.",
            code: `# Respect patient confidentiality\n# Communicate clearly`
          }
        ],
        resources: [
          { label: "House Job Guide", url: "https://www.pakmed.net/" },
          { label: "Clinical Skills Videos", url: "https://geekymedics.com/" }
        ]
      },
      {
        name: "Medical Licensing Exam (e.g., PMC NLE / USMLE / PLAB)",
        description: "To practice medicine, pass a licensing exam such as PMC NLE (Pakistan), USMLE (USA), or PLAB (UK). Each exam has its own format and requirements.",
        subtopics: [
          {
            title: "Exam Registration & Eligibility",
            detail: "Check eligibility criteria, gather documents, and register for your chosen exam.",
            code: `# Register online\n# Submit required documents`
          },
          {
            title: "Exam Preparation",
            detail: "Use official resources, question banks, and study groups. Focus on clinical scenarios and high-yield topics.",
            code: `# USMLE: UWorld, First Aid\n# PLAB: PLABable, Pastest`
          },
          {
            title: "Test Day & Results",
            detail: "Arrive early, follow instructions, and stay calm. Review results and plan next steps.",
            code: `# Bring ID and documents\n# Review score report`
          }
        ],
        resources: [
          { label: "USMLE Official Site", url: "https://www.usmle.org/" },
          { label: "PLAB Guide", url: "https://www.gmc-uk.org/registration-and-licensing/join-the-register/plab" }
        ]
      },
      {
        name: "Postgraduate Specialization (FCPS / MD / MS / MRCP / US Residency)",
        description: "After licensing, pursue specialization in your chosen field. Options include FCPS, MD, MS, MRCP, or US residency. This involves entrance exams, interviews, and years of training.",
        subtopics: [
          {
            title: "Choosing a Specialty",
            detail: "Research different specialties, consider your interests, and seek mentorship from experienced doctors.",
            code: `# Attend specialty workshops\n# Talk to residents and consultants`
          },
          {
            title: "Entrance Exams & Interviews",
            detail: "Prepare for entrance exams and interviews. Practice clinical scenarios and review specialty-specific knowledge.",
            code: `# FCPS: IMM, Part 1\n# US Residency: Match process`
          },
          {
            title: "Residency Training",
            detail: "Complete years of supervised training, research, and exams to become a specialist.",
            code: `# Log procedures\n# Participate in research projects`
          }
        ],
        resources: [
          { label: "FCPS Guide", url: "https://www.cpsp.edu.pk/" },
          { label: "US Residency Info", url: "https://www.nrmp.org/" }
        ]
      },
      {
        name: "Research & Publications",
        description: "Research is vital for advancing medical knowledge and career growth. Learn how to conduct research, write papers, and publish in journals.",
        subtopics: [
          {
            title: "Research Methodology",
            detail: "Understand study design, data collection, and analysis. Learn about ethics and approvals.",
            code: `# Types: RCT, cohort, case-control\n# IRB approval process`
          },
          {
            title: "Writing & Publishing Papers",
            detail: "Write clear, concise manuscripts. Follow journal guidelines and submit for peer review.",
            code: `# Use reference managers\n# Revise based on feedback`
          },
          {
            title: "Presenting at Conferences",
            detail: "Share your research at local and international conferences. Network with peers and experts.",
            code: `# Prepare posters and slides\n# Practice your presentation`
          }
        ],
        resources: [
          { label: "BMJ Research Guide", url: "https://www.bmj.com/about-bmj/resources-authors" },
          { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/" }
        ]
      },
      {
        name: "Continuous Medical Education (CME)",
        description: "CME is essential for staying updated with medical advances. Attend workshops, conferences, and online courses to maintain your license and improve patient care.",
        subtopics: [
          {
            title: "Attending CME Events",
            detail: "Participate in workshops, seminars, and online courses. Choose topics relevant to your practice.",
            code: `# Register for CME credits\n# Join webinars and workshops`
          },
          {
            title: "Self-Study & Online Learning",
            detail: "Use online platforms, journals, and guidelines to keep learning throughout your career.",
            code: `# Read latest guidelines\n# Take online CME quizzes`
          }
        ],
        resources: [
          { label: "Medscape CME", url: "https://www.medscape.org/cme" },
          { label: "BMJ Learning", url: "https://new-learning.bmj.com/" }
        ]
      },
      {
        name: "Medical Practice or Teaching Career",
        description: "After specialization, choose between clinical practice, teaching, or a combination. Both paths offer opportunities for growth and impact.",
        subtopics: [
          {
            title: "Starting Medical Practice",
            detail: "Set up your clinic, join a hospital, or work in public health. Focus on patient care, ethics, and communication.",
            code: `# Register with local medical council\n# Build patient trust`
          },
          {
            title: "Teaching & Academia",
            detail: "Teach medical students, supervise research, and contribute to curriculum development.",
            code: `# Apply for faculty positions\n# Mentor students`
          }
        ],
        resources: [
          { label: "PMDC Practice Guide", url: "https://www.pmdc.org.pk/" },
          { label: "Medical Teaching Resources", url: "https://www.mededportal.org/" }
        ]
      },
      {
        name: "Fellowship or Super-Specialization (Optional)",
        description: "For further expertise, pursue a fellowship or super-specialization in your field. This involves advanced training, research, and exams.",
        subtopics: [
          {
            title: "Choosing a Fellowship",
            detail: "Explore available fellowships locally and abroad. Consider your interests, career goals, and mentorship opportunities.",
            code: `# Cardiology, Oncology, Surgery, etc.\n# Research fellowship options`
          },
          {
            title: "Application & Training",
            detail: "Apply to programs, prepare for interviews, and complete advanced clinical and research training.",
            code: `# Prepare CV and personal statement\n# Complete fellowship requirements`
          }
        ],
        resources: [
          { label: "Fellowship Info", url: "https://www.cpsp.edu.pk/" },
          { label: "US Fellowships", url: "https://www.aamc.org/cim/explore-options/specialty-profiles" }
        ]
      }
    ],
    duration: "8-12 years",
    difficulty: "Advanced"
  },
  {
    id: 4,
    title: "Robotics & Embedded Systems Roadmap",
    description: "A step-by-step guide for aspiring robotics and embedded systems engineers, from electronics fundamentals to AI, IoT, and real-world projects.",
    steps: [
      {
        name: "Basic Electronics & Electrical Engineering",
        description: "Start with the fundamentals of voltage, current, resistance, Ohm's law, and circuit analysis. Understanding these basics is crucial for all hardware work.",
        subtopics: [
          {
            title: "Ohm's Law & Circuits",
            detail: "Learn the relationship between voltage, current, and resistance. Practice analyzing simple series and parallel circuits.",
            code: `# Ohm's Law: V = I * R\n# Series circuit: R_total = R1 + R2 + ...\n# Parallel circuit: 1/R_total = 1/R1 + 1/R2 + ...`
          },
          {
            title: "Electronic Components",
            detail: "Get familiar with resistors, capacitors, diodes, transistors, and their roles in circuits.",
            code: `# Example: LED circuit\n# Use a resistor to limit current to an LED.`
          },
          {
            title: "Breadboarding & Soldering",
            detail: "Practice building circuits on a breadboard and learn basic soldering for permanent connections.",
            code: `# Build a blinking LED circuit on a breadboard.`
          }
        ],
        resources: [
          { label: "All About Circuits", url: "https://www.allaboutcircuits.com/" },
          { label: "SparkFun Tutorials", url: "https://learn.sparkfun.com/tutorials" }
        ]
      },
      {
        name: "C / C++ Programming",
        description: "C and C++ are the primary languages for embedded systems. Learn syntax, data types, control flow, functions, and memory management.",
        subtopics: [
          {
            title: "C Syntax & Data Types",
            detail: "Understand variables, data types, operators, and basic syntax in C.",
            code: `int a = 5;\nfloat b = 2.5;\nchar c = 'A';`
          },
          {
            title: "Control Flow & Functions",
            detail: "Use if, else, switch, for, while, and functions to control program logic.",
            code: `for(int i=0; i<10; i++) { printf("%d", i); }`
          },
          {
            title: "Pointers & Memory Management",
            detail: "Pointers are essential for direct memory access and efficient programming in embedded systems.",
            code: `int x = 10;\nint *p = &x;\nprintf("%d", *p);`
          }
        ],
        resources: [
          { label: "Learn-C.org", url: "https://www.learn-c.org/" },
          { label: "C++ Reference", url: "https://en.cppreference.com/w/" }
        ]
      },
      {
        name: "Microcontrollers (e.g., Arduino, AVR, STM32)",
        description: "Microcontrollers are the brains of embedded systems. Learn about different families, programming, and interfacing with hardware.",
        subtopics: [
          {
            title: "Arduino Basics",
            detail: "Start with Arduino for easy prototyping. Learn about digital/analog I/O, PWM, and basic sketches.",
            code: `void setup() { pinMode(13, OUTPUT); }\nvoid loop() { digitalWrite(13, HIGH); delay(1000); digitalWrite(13, LOW); delay(1000); }`
          },
          {
            title: "AVR & STM32",
            detail: "Explore AVR (Atmel) and STM32 (ARM Cortex) microcontrollers for more advanced projects.",
            code: `// AVR: Use Atmel Studio\n// STM32: Use STM32CubeIDE`
          },
          {
            title: "Programming & Debugging",
            detail: "Learn to upload code, use debuggers, and troubleshoot hardware issues.",
            code: `# Use serial monitor for debugging\n# Blink LED to test code upload`
          },
          {
            title: "Interrupts & Timers",
            detail: "Use hardware interrupts and timers for precise timing and event-driven programming. This is essential for real-time control and power efficiency.",
            code: `// Arduino: attachInterrupt(digitalPinToInterrupt(pin), ISR, mode);\n// STM32: HAL_TIM_Base_Start_IT(&htim2);`
          },
          {
            title: "Low Power Modes",
            detail: "Optimize battery life by using sleep and low-power modes. Learn to wake up microcontrollers on events.",
            code: `// AVR: set_sleep_mode(SLEEP_MODE_PWR_DOWN);\nsleep_enable();`
          },
          {
            title: "Bootloaders & Firmware Updates",
            detail: "Understand how bootloaders work and how to perform firmware updates over serial, USB, or OTA (Over-the-Air).",
            code: `# Use avrdude for AVR bootloader\n# STM32: DFU mode for USB updates`
          }
        ],
        resources: [
          { label: "Arduino Docs", url: "https://www.arduino.cc/en/Guide/HomePage" },
          { label: "STM32 Resources", url: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html" }
        ]
      },
      {
        name: "Digital Logic Design",
        description: "Digital logic is the basis of all computing hardware. Learn about logic gates, flip-flops, counters, and finite state machines.",
        subtopics: [
          {
            title: "Logic Gates & Truth Tables",
            detail: "Understand AND, OR, NOT, NAND, NOR, XOR, XNOR gates and how to build truth tables.",
            code: `# Example: AND gate\nA B | Q\n0 0 | 0\n0 1 | 0\n1 0 | 0\n1 1 | 1`
          },
          {
            title: "Flip-Flops & Registers",
            detail: "Flip-flops store binary data. Registers are collections of flip-flops used for temporary storage.",
            code: `# D Flip-Flop: Q(next) = D (on clock edge)`
          },
          {
            title: "Counters & FSMs",
            detail: "Counters count pulses; finite state machines (FSMs) control sequences in digital systems.",
            code: `# 4-bit counter: 0000 -> 0001 -> ... -> 1111 -> 0000`
          }
        ],
        resources: [
          { label: "Digital Logic Design", url: "https://www.tutorialspoint.com/digital_circuits/index.htm" },
          { label: "All About Circuits Digital", url: "https://www.allaboutcircuits.com/textbook/digital/" }
        ]
      },
      {
        name: "Embedded C / RTOS Fundamentals",
        description: "Embedded C is used for low-level programming. Real-Time Operating Systems (RTOS) manage tasks and timing in complex embedded applications.",
        subtopics: [
          {
            title: "Embedded C Basics",
            detail: "Learn about bitwise operations, interrupts, and memory-mapped I/O.",
            code: `PORTB |= (1 << PB0); // Set PB0 high`
          },
          {
            title: "RTOS Concepts",
            detail: "Understand tasks, scheduling, semaphores, and inter-task communication.",
            code: `// FreeRTOS example\nxTaskCreate(...);\nvTaskStartScheduler();`
          }
        ],
        resources: [
          { label: "FreeRTOS Docs", url: "https://www.freertos.org/" },
          { label: "Embedded C Tutorial", url: "https://www.tutorialspoint.com/embedded_systems/index.htm" }
        ]
      },
      {
        name: "Sensors & Actuators",
        description: "Sensors collect data from the environment; actuators perform actions. Learn about interfacing, calibration, and control.",
        subtopics: [
          {
            title: "Sensor Types",
            detail: "Explore temperature, light, distance, motion, and other common sensors.",
            code: `# Read temperature from sensor\nvalue = analogRead(A0)`
          },
          {
            title: "Actuator Control",
            detail: "Control motors, servos, relays, and other actuators using microcontroller outputs.",
            code: `# Servo control example\nservo.write(90)`
          },
          {
            title: "Calibration & Signal Conditioning",
            detail: "Calibrate sensors and use filters/amplifiers to improve signal quality.",
            code: `# Use moving average filter for noisy data`
          }
        ],
        resources: [
          { label: "Adafruit Sensor Guides", url: "https://learn.adafruit.com/category/sensors" },
          { label: "SparkFun Actuator Tutorials", url: "https://learn.sparkfun.com/tutorials" }
        ]
      },
      {
        name: "PCB Design (e.g., Proteus, KiCAD, Altium)",
        description: "Printed Circuit Board (PCB) design is essential for professional hardware projects. Learn schematic capture, layout, and manufacturing.",
        subtopics: [
          {
            title: "Schematic Capture",
            detail: "Draw circuit diagrams using PCB design software.",
            code: `# Use KiCAD or Proteus to draw schematics.`
          },
          {
            title: "PCB Layout & Routing",
            detail: "Place components and route traces to connect them. Follow design rules for manufacturability.",
            code: `# Route power and ground planes first.`
          },
          {
            title: "Gerber Files & Manufacturing",
            detail: "Export Gerber files for PCB fabrication and order boards from manufacturers.",
            code: `# Export Gerber files from your PCB tool.`
          }
        ],
        resources: [
          { label: "KiCAD Docs", url: "https://docs.kicad.org/" },
          { label: "Altium Designer", url: "https://www.altium.com/" }
        ]
      },
      {
        name: "Serial Communication Protocols (UART, SPI, I2C)",
        description: "Serial protocols allow microcontrollers and peripherals to communicate. Learn about UART, SPI, and I2C, their wiring, and code examples.",
        subtopics: [
          {
            title: "UART (Universal Asynchronous Receiver/Transmitter)",
            detail: "UART is a simple, two-wire protocol for serial communication. Used for debugging and device communication.",
            code: `Serial.begin(9600);\nSerial.println("Hello");`
          },
          {
            title: "SPI (Serial Peripheral Interface)",
            detail: "SPI is a fast, synchronous protocol for connecting sensors, displays, and memory chips.",
            code: `# Connect MOSI, MISO, SCK, SS\n# Use SPI library in Arduino`
          },
          {
            title: "I2C (Inter-Integrated Circuit)",
            detail: "I2C is a two-wire protocol for connecting multiple devices with unique addresses.",
            code: `# Connect SDA, SCL\n# Use Wire library in Arduino`
          }
        ],
        resources: [
          { label: "SparkFun Serial Communication", url: "https://learn.sparkfun.com/tutorials/serial-communication/all" },
          { label: "I2C Tutorial", url: "https://www.arduino.cc/en/Tutorial/I2C" }
        ]
      },
      {
        name: "Embedded Linux / Raspberry Pi",
        description: "Learn to use Linux-based systems like Raspberry Pi for advanced robotics and IoT projects. Explore GPIO, networking, and Linux tools.",
        subtopics: [
          {
            title: "Raspberry Pi Setup",
            detail: "Install Raspbian OS, configure Wi-Fi, and update your Pi. Learn basic Linux commands.",
            code: `sudo apt update\nsudo apt install python3`
          },
          {
            title: "GPIO Programming",
            detail: "Control hardware using the Pi's GPIO pins with Python or C.",
            code: `import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BCM)\nGPIO.setup(18, GPIO.OUT)\nGPIO.output(18, True)`
          },
          {
            title: "Networking & SSH",
            detail: "Connect your Pi to a network, use SSH for remote access, and transfer files.",
            code: `ssh pi@raspberrypi.local\nscp file.txt pi@raspberrypi.local:/home/pi/`
          }
        ],
        resources: [
          { label: "Raspberry Pi Docs", url: "https://www.raspberrypi.org/documentation/" },
          { label: "Linux Command Guide", url: "https://linuxcommand.org/" }
        ]
      },
      {
        name: "Control Systems & Kinematics",
        description: "Control systems are used to make robots move accurately. Kinematics is the study of motion. Learn about PID controllers, feedback, and robot arm kinematics.",
        subtopics: [
          {
            title: "PID Control",
            detail: "Proportional-Integral-Derivative (PID) controllers are used for precise control of motors and systems.",
            code: `# PID formula: output = Kp*e + Ki*sum(e) + Kd*de/dt`
          },
          {
            title: "Forward & Inverse Kinematics",
            detail: "Kinematics equations relate joint angles to end-effector position. Used in robot arms and manipulators.",
            code: `# Use trigonometry to solve for positions.`
          },
          {
            title: "Feedback & Sensors",
            detail: "Use encoders, gyros, and other sensors for feedback in control loops.",
            code: `# Read encoder value for position feedback.`
          }
        ],
        resources: [
          { label: "Control Tutorials", url: "https://ctms.engin.umich.edu/CTMS/index.php?example=Introduction&section=ControlTheory" },
          { label: "Kinematics Guide", url: "https://www.mecademic.com/en/resources/robot-kinematics" }
        ]
      },
      {
        name: "Robotics Frameworks (e.g., ROS)",
        description: "Robotics frameworks like ROS (Robot Operating System) provide tools and libraries for building complex robots. Learn about nodes, topics, services, and simulation.",
        subtopics: [
          {
            title: "ROS Basics",
            detail: "Install ROS, understand nodes, topics, and messages. Write simple publisher/subscriber nodes in Python or C++.",
            code: `# ROS node in Python\nimport rospy\nrospy.init_node('my_node')`
          },
          {
            title: "Simulation with Gazebo",
            detail: "Use Gazebo to simulate robots and environments before deploying to real hardware.",
            code: `# Launch Gazebo simulation\nroslaunch my_robot world.launch`
          },
          {
            title: "Custom Packages & Services",
            detail: "Create custom ROS packages, define services, and use launch files for complex projects.",
            code: `# catkin_create_pkg my_package std_msgs rospy roscpp`
          }
        ],
        resources: [
          { label: "ROS Tutorials", url: "http://wiki.ros.org/ROS/Tutorials" },
          { label: "Gazebo Docs", url: "http://gazebosim.org/tutorials" }
        ]
      },
      {
        name: "Computer Vision & OpenCV",
        description: "Computer vision enables robots to see and interpret the world. Learn about image processing, object detection, and using OpenCV.",
        subtopics: [
          {
            title: "Image Processing Basics",
            detail: "Read, display, and process images using OpenCV. Learn about color spaces, filters, and edge detection.",
            code: `import cv2\nimg = cv2.imread('image.jpg')\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)`
          },
          {
            title: "Object Detection",
            detail: "Detect objects using Haar cascades, HOG, or deep learning models.",
            code: `# Use cv2.CascadeClassifier for face detection.`
          },
          {
            title: "Camera Calibration",
            detail: "Calibrate cameras to correct distortion and improve measurement accuracy.",
            code: `# Use cv2.calibrateCamera with chessboard images.`
          }
        ],
        resources: [
          { label: "OpenCV Docs", url: "https://docs.opencv.org/" },
          { label: "PyImageSearch", url: "https://www.pyimagesearch.com/" }
        ]
      },
      {
        name: "Wireless Communication (Bluetooth, Wi-Fi, LoRa, Zigbee)",
        description: "Wireless protocols connect robots and devices. Learn about Bluetooth, Wi-Fi, LoRa, Zigbee, and their applications in robotics and IoT.",
        subtopics: [
          {
            title: "Bluetooth Communication",
            detail: "Use Bluetooth modules (e.g., HC-05) for short-range wireless communication.",
            code: `# Pair HC-05 with Arduino\n# Use Serial for data transfer.`
          },
          {
            title: "Wi-Fi Networking",
            detail: "Connect devices to Wi-Fi networks for remote control and data transfer.",
            code: `# ESP8266/ESP32 Wi-Fi example\nWiFi.begin(ssid, password);`
          },
          {
            title: "LoRa & Zigbee",
            detail: "LoRa and Zigbee are used for long-range, low-power communication in IoT and sensor networks.",
            code: `# Use LoRa library for Arduino\n# Zigbee: XBee modules for mesh networks.`
          }
        ],
        resources: [
          { label: "Bluetooth Arduino Guide", url: "https://www.arduino.cc/en/Reference/Bluetooth" },
          { label: "LoRa Tutorial", url: "https://randomnerdtutorials.com/getting-started-with-lora/" }
        ]
      },
      {
        name: "IoT Integration & Cloud",
        description: "Integrate robots and devices with the Internet of Things (IoT) and cloud platforms for remote monitoring, control, and data analytics.",
        subtopics: [
          {
            title: "MQTT Protocol",
            detail: "MQTT is a lightweight messaging protocol for IoT. Use it to send data between devices and the cloud.",
            code: `# Use paho-mqtt in Python\nimport paho.mqtt.client as mqtt`
          },
          {
            title: "Cloud Platforms",
            detail: "Connect to cloud services like AWS IoT, Azure IoT, or Google Cloud IoT for device management and analytics.",
            code: `# AWS IoT example\n# Register device, publish/subscribe to topics.`
          },
          {
            title: "Remote Monitoring & Dashboards",
            detail: "Build dashboards to visualize sensor data and control devices remotely.",
            code: `# Use Node-RED or Grafana for dashboards.`
          }
        ],
        resources: [
          { label: "MQTT Docs", url: "https://mqtt.org/documentation" },
          { label: "AWS IoT", url: "https://aws.amazon.com/iot/" }
        ]
      },
      {
        name: "Mathematics for Robotics (Linear Algebra, Calculus)",
        description: "Mathematics is the backbone of robotics. Learn about vectors, matrices, transformations, and calculus for motion planning and control.",
        subtopics: [
          {
            title: "Vectors & Matrices",
            detail: "Use vectors and matrices to represent positions, velocities, and transformations in space.",
            code: `import numpy as np\nA = np.array([1, 2, 3])\nB = np.array([[1, 0], [0, 1]])`
          },
          {
            title: "Transformations & Homogeneous Coordinates",
            detail: "Transformations (rotation, translation) are used to move robots in space. Homogeneous coordinates simplify these calculations.",
            code: `# 2D rotation matrix\nimport numpy as np\ntheta = np.pi/4\nR = np.array([[np.cos(theta), -np.sin(theta)], [np.sin(theta), np.cos(theta)]])`
          },
          {
            title: "Differential Calculus",
            detail: "Calculus is used for motion planning, velocity, and acceleration calculations.",
            code: `# Derivative of position gives velocity.`
          }
        ],
        resources: [
          { label: "Robotics Math Guide", url: "https://www.coursera.org/learn/robotics-foundations-i" },
          { label: "Khan Academy Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra" }
        ]
      },
      {
        name: "Simulation Tools (Gazebo, MATLAB Simulink)",
        description: "Simulation tools let you test robots and algorithms in virtual environments before deploying to hardware.",
        subtopics: [
          {
            title: "Gazebo Simulation",
            detail: "Gazebo is a popular open-source robotics simulator. Use it to test robot models, sensors, and control algorithms.",
            code: `# Launch Gazebo with a robot model\nroslaunch my_robot world.launch`
          },
          {
            title: "MATLAB & Simulink",
            detail: "MATLAB and Simulink are used for modeling, simulation, and control system design.",
            code: `# Simulate a PID controller in Simulink.`
          }
        ],
        resources: [
          { label: "Gazebo Docs", url: "http://gazebosim.org/tutorials" },
          { label: "MATLAB Simulink", url: "https://www.mathworks.com/products/simulink.html" }
        ]
      },
      {
        name: "AI in Robotics (Path Planning, ML, SLAM)",
        description: "Artificial Intelligence enables robots to perceive, plan, and act intelligently. Learn about path planning, machine learning, and Simultaneous Localization and Mapping (SLAM).",
        subtopics: [
          {
            title: "Path Planning Algorithms",
            detail: "Algorithms like A*, Dijkstra, and RRT are used for robot navigation and obstacle avoidance.",
            code: `# Implement A* algorithm for grid navigation.`
          },
          {
            title: "Machine Learning for Robotics",
            detail: "Use ML models for perception, control, and decision-making in robots.",
            code: `# Train a classifier to recognize objects.`
          },
          {
            title: "SLAM (Simultaneous Localization and Mapping)",
            detail: "SLAM algorithms allow robots to build a map of an unknown environment while tracking their own location.",
            code: `# Use gmapping or Cartographer in ROS for SLAM.`
          }
        ],
        resources: [
          { label: "Path Planning Guide", url: "https://www.coursera.org/learn/robotics-ai" },
          { label: "SLAM Tutorial", url: "https://www.robotis.us/slam/" }
        ]
      },
      {
        name: "Projects & Prototyping",
        description: "Build real-world projects to apply your knowledge. Start with simple robots and progress to complex, autonomous systems.",
        subtopics: [
          {
            title: "Beginner Projects",
            detail: "Start with line-following robots, obstacle avoiders, or remote-controlled cars.",
            code: `# Use Arduino and basic sensors for a line follower.`
          },
          {
            title: "Advanced Prototyping",
            detail: "Design and build multi-sensor, multi-motor robots with advanced features.",
            code: `# Integrate computer vision and wireless control.`
          }
        ],
        resources: [
          { label: "Instructables Robotics", url: "https://www.instructables.com/circuits/robots/" },
          { label: "Hackster.io Projects", url: "https://www.hackster.io/" }
        ]
      },
      {
        name: "Git & Version Control",
        description: "Version control is essential for managing code and collaborating on projects. Learn Git basics, branching, merging, and using GitHub or GitLab.",
        subtopics: [
          {
            title: "Git Basics",
            detail: "Initialize repositories, commit changes, and track project history.",
            code: `git init\ngit add .\ngit commit -m "Initial commit"`
          },
          {
            title: "Branching & Merging",
            detail: "Work on new features or bug fixes in branches, then merge them into the main codebase.",
            code: `git checkout -b new-feature\ngit merge new-feature`
          },
          {
            title: "Remote Repositories",
            detail: "Push code to GitHub or GitLab for backup and collaboration.",
            code: `git remote add origin <repo-url>\ngit push -u origin main`
          }
        ],
        resources: [
          { label: "Git Docs", url: "https://git-scm.com/doc" },
          { label: "GitHub Guides", url: "https://guides.github.com/" }
        ]
      },
      {
        name: "Publish Projects & Build Portfolio",
        description: "Showcase your work to employers and the community. Build a portfolio website, write blog posts, and share your code and designs.",
        subtopics: [
          {
            title: "Portfolio Website",
            detail: "Create a personal website to display your projects, resume, and technical blog posts.",
            code: `# Use static site generators or React-based frameworks.`
          },
          {
            title: "Open Source & Community",
            detail: "Contribute to open source, join forums, and participate in hackathons to grow your network and skills.",
            code: `# Share your code on GitHub\n# Join robotics communities online.`
          }
        ],
        resources: [
          { label: "GitHub Pages", url: "https://pages.github.com/" },
          { label: "Dev.to Blogging", url: "https://dev.to/" }
        ]
      }
    ],
    duration: "8-15 months",
    difficulty: "Intermediate to Advanced"
  },
  {
    id: 5,
    title: "Cybersecurity Roadmap",
    description: "A step-by-step guide for aspiring cybersecurity professionals, from computer fundamentals to advanced security, forensics, and real-world practice.",
    steps: [
      {
        name: "Computer Fundamentals (OS, Networks, File Systems)",
        description: "Start with the basics of how computers work, including operating systems, file systems, and basic networking. This foundation is essential for understanding security concepts.",
        subtopics: [
          {
            title: "Operating Systems (OS)",
            detail: "Learn about Windows, Linux, and MacOS. Understand processes, memory management, and user permissions.",
            code: `# List running processes\nps aux  # Linux\ntasklist  # Windows`
          },
          {
            title: "File Systems",
            detail: "Understand how files are stored, accessed, and managed. Learn about NTFS, FAT32, ext4, and file permissions.",
            code: `# Check file permissions\nls -l  # Linux\n# Windows: Right-click > Properties > Security`
          },
          {
            title: "Basic Networking",
            detail: "Learn about IP addresses, subnets, and how devices communicate on a network.",
            code: `# Check IP address\nifconfig  # Linux\nipconfig  # Windows`
          }
        ],
        resources: [
          { label: "How Computers Work", url: "https://www.khanacademy.org/computing/computer-science/how-computers-work" },
          { label: "Linux Journey", url: "https://linuxjourney.com/" }
        ]
      },
      {
        name: "Linux & Windows Basics",
        description: "Get comfortable with both Linux and Windows environments. Learn command-line basics, file management, and system administration tasks.",
        subtopics: [
          {
            title: "Linux Command Line",
            detail: "Master basic commands for navigation, file manipulation, and system monitoring.",
            code: `ls, cd, cp, mv, rm, top, grep, chmod, chown`
          },
          {
            title: "Windows Administration",
            detail: "Learn about Windows command prompt, PowerShell, and system tools.",
            code: `dir, copy, del, netstat, Get-Process, Set-ExecutionPolicy`
          },
          {
            title: "User & Permission Management",
            detail: "Manage users, groups, and permissions to secure systems.",
            code: `# Linux\nsudo adduser alice\nsudo usermod -aG sudo alice\n# Windows\nnet user alice /add`
          }
        ],
        resources: [
          { label: "OverTheWire Bandit", url: "https://overthewire.org/wargames/bandit/" },
          { label: "Windows Command Line", url: "https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands" }
        ]
      },
      {
        name: "Networking Concepts (TCP/IP, DNS, Firewalls, Ports)",
        description: "Networking is at the heart of cybersecurity. Learn about TCP/IP, DNS, ports, firewalls, and how data moves across networks.",
        subtopics: [
          {
            title: "TCP/IP Model",
            detail: "Understand the layers of the TCP/IP model and how data is transmitted over networks.",
            code: `# OSI vs TCP/IP layers\n# Application, Transport, Internet, Network Access`
          },
          {
            title: "DNS & Ports",
            detail: "Learn how DNS resolves domain names to IP addresses and how ports are used for different services.",
            code: `# Check DNS resolution\ndig example.com\n# Common ports: 80 (HTTP), 443 (HTTPS), 22 (SSH)`
          },
          {
            title: "Firewalls & NAT",
            detail: "Firewalls control traffic flow; NAT translates private to public IPs. Both are key for network security.",
            code: `# List firewall rules\nsudo ufw status  # Linux\nnetsh advfirewall show allprofiles  # Windows`
          },
          {
            title: "Packet Analysis & Sniffing",
            detail: "Analyze network packets to detect suspicious activity, troubleshoot issues, and understand protocols. Tools like Wireshark and tcpdump are essential for this.",
            code: `# Capture packets\ntcpdump -i eth0 port 80`
          },
          {
            title: "VPNs & Secure Tunneling",
            detail: "Virtual Private Networks (VPNs) encrypt traffic and provide secure remote access. Learn about OpenVPN, IPSec, and SSH tunneling.",
            code: `# Start OpenVPN\nsudo openvpn --config client.ovpn`
          },
          {
            title: "Network Scanning & Mapping",
            detail: "Map networks, discover hosts, and identify vulnerabilities using tools like Nmap, Netcat, and traceroute.",
            code: `nmap -sS 192.168.1.0/24\ntraceroute google.com`
          }
        ],
        resources: [
          { label: "Cisco Networking Basics", url: "https://www.netacad.com/courses/networking/networking-essentials" },
          { label: "TCP/IP Guide", url: "http://www.tcpipguide.com/free/index.htm" }
        ]
      },
      {
        name: "Programming (Python or Bash)",
        description: "Programming is essential for automating tasks, writing scripts, and building security tools. Python and Bash are the most common languages in cybersecurity.",
        subtopics: [
          {
            title: "Python Scripting",
            detail: "Write scripts to automate tasks, parse logs, and interact with APIs.",
            code: `import os\nprint(os.listdir('/var/log'))`
          },
          {
            title: "Bash Scripting",
            detail: "Automate system tasks and chain commands together in Linux environments.",
            code: `#!/bin/bash\nfor file in *.log; do grep 'error' $file; done`
          },
          {
            title: "Regular Expressions",
            detail: "Use regex to search, match, and extract patterns from text and logs.",
            code: `import re\nre.findall(r'\d+\.\d+\.\d+\.\d+', 'IP: 192.168.1.1')`
          }
        ],
        resources: [
          { label: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/" },
          { label: "RegexOne", url: "https://regexone.com/" }
        ]
      },
      {
        name: "Web Technologies (HTML, JS, HTTP, APIs)",
        description: "Web technologies are a major attack surface. Learn about HTML, JavaScript, HTTP, and how APIs work.",
        subtopics: [
          {
            title: "HTML & JavaScript Basics",
            detail: "Understand how web pages are built and how JavaScript adds interactivity.",
            code: `<html>\n  <body>\n    <script>alert('Hello!');</script>\n  </body>\n</html>`
          },
          {
            title: "HTTP Protocol",
            detail: "Learn about HTTP methods (GET, POST, etc.), headers, cookies, and sessions.",
            code: `# HTTP GET request\ncurl -X GET https://example.com/api/data`
          },
          {
            title: "APIs & REST",
            detail: "Understand how RESTful APIs work and how to interact with them securely.",
            code: `import requests\nresp = requests.get('https://api.example.com/data')`
          }
        ],
        resources: [
          { label: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web" },
          { label: "Postman API Guide", url: "https://learning.postman.com/" }
        ]
      },
      {
        name: "Cybersecurity Basics (CIA Triad, Threat Types)",
        description: "Learn the core principles of cybersecurity: Confidentiality, Integrity, and Availability (CIA Triad). Understand common threat types and attack vectors.",
        subtopics: [
          {
            title: "CIA Triad",
            detail: "Confidentiality, Integrity, and Availability are the pillars of security. Every security measure aims to protect one or more of these.",
            code: `# Example: Encryption for confidentiality, checksums for integrity, backups for availability.`
          },
          {
            title: "Threat Types",
            detail: "Understand malware, phishing, social engineering, DDoS, and insider threats.",
            code: `# Malware: viruses, worms, trojans\n# Phishing: fake emails\n# DDoS: traffic floods`
          },
          {
            title: "Attack Vectors",
            detail: "Learn how attackers exploit vulnerabilities via email, web, USB, and network services.",
            code: `# Example: USB drop attack, SQL injection, XSS.`
          }
        ],
        resources: [
          { label: "Cybrary Security Basics", url: "https://www.cybrary.it/course/cyber-security/" },
          { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" }
        ]
      },
      {
        name: "Cryptography (Hashing, Encryption, SSL/TLS)",
        description: "Cryptography protects data in transit and at rest. Learn about hashing, symmetric/asymmetric encryption, and secure protocols like SSL/TLS.",
        subtopics: [
          {
            title: "Hash Functions",
            detail: "Hashing is used for data integrity and password storage. Learn about MD5, SHA-1, SHA-256, and their strengths/weaknesses.",
            code: `import hashlib\nhashlib.sha256(b'secret').hexdigest()`
          },
          {
            title: "Symmetric & Asymmetric Encryption",
            detail: "Symmetric encryption uses one key; asymmetric uses a public/private key pair. Both are used for secure communication.",
            code: `# Symmetric: AES\n# Asymmetric: RSA, ECC`
          },
          {
            title: "SSL/TLS & Certificates",
            detail: "SSL/TLS secures web traffic. Learn about certificates, handshakes, and HTTPS.",
            code: `# Check SSL cert\nopenssl s_client -connect example.com:443`
          }
        ],
        resources: [
          { label: "Crypto101", url: "https://crypto101.io/" },
          { label: "SSL Labs", url: "https://www.ssllabs.com/ssltest/" }
        ]
      },
      {
        name: "Vulnerability Assessment & Penetration Testing",
        description: "Identify and exploit vulnerabilities in systems and applications. Learn about scanning, enumeration, and ethical hacking methodologies.",
        subtopics: [
          {
            title: "Vulnerability Scanning",
            detail: "Use automated tools to scan for known vulnerabilities in systems and applications.",
            code: `# Use Nmap, Nessus, or OpenVAS for scanning.`
          },
          {
            title: "Enumeration & Exploitation",
            detail: "Gather information about targets and exploit weaknesses using ethical hacking techniques.",
            code: `# Use Metasploit for exploitation\n# Enum4linux for SMB enumeration.`
          },
          {
            title: "Reporting & Remediation",
            detail: "Document findings, report to stakeholders, and suggest fixes to improve security.",
            code: `# Write clear, actionable reports\n# Prioritize vulnerabilities by risk.`
          },
          {
            title: "Privilege Escalation",
            detail: "After gaining initial access, attempt to escalate privileges to gain deeper control. Learn about kernel exploits, misconfigurations, and password reuse.",
            code: `# Linux: searchsploit kernel\n# Windows: use winPEAS, PowerUp.`
          },
          {
            title: "Post-Exploitation & Persistence",
            detail: "Maintain access to compromised systems using backdoors, scheduled tasks, or registry changes. Always document actions for ethical testing.",
            code: `# Add SSH key to authorized_keys\n# Create scheduled task for persistence.`
          },
          {
            title: "Bypassing Security Controls",
            detail: "Learn techniques to bypass firewalls, antivirus, and application whitelisting during authorized tests.",
            code: `# Use obfuscated payloads\n# Tunneling with SSH or VPN.`
          }
        ],
        resources: [
          { label: "Hack The Box Academy", url: "https://academy.hackthebox.com/" },
          { label: "TryHackMe", url: "https://tryhackme.com/" }
        ]
      },
      {
        name: "Tools & Platforms (Wireshark, Nmap, Burp Suite, Metasploit)",
        description: "Master essential cybersecurity tools for network analysis, vulnerability scanning, web testing, and exploitation.",
        subtopics: [
          {
            title: "Wireshark",
            detail: "Analyze network traffic, capture packets, and troubleshoot network issues.",
            code: `# Start capture\nwireshark &`
          },
          {
            title: "Nmap",
            detail: "Scan networks, discover hosts, and identify open ports and services.",
            code: `nmap -A 192.168.1.1/24`
          },
          {
            title: "Burp Suite",
            detail: "Test web applications for vulnerabilities like XSS, SQLi, and CSRF.",
            code: `# Use Burp Proxy to intercept HTTP requests.`
          },
          {
            title: "Metasploit",
            detail: "Exploit vulnerabilities and test defenses using the Metasploit Framework.",
            code: `msfconsole\nuse exploit/windows/smb/ms17_010_eternalblue`
          }
        ],
        resources: [
          { label: "Wireshark Docs", url: "https://www.wireshark.org/docs/" },
          { label: "Nmap Guide", url: "https://nmap.org/book/" }
        ]
      },
      {
        name: "Web Application Security (OWASP Top 10)",
        description: "Web apps are a major attack vector. Learn about the OWASP Top 10 vulnerabilities and how to defend against them.",
        subtopics: [
          {
            title: "Injection Attacks (SQLi, XSS)",
            detail: "Learn how attackers inject malicious code and how to prevent it with input validation and parameterized queries.",
            code: `# Use prepared statements in SQL\n# Sanitize user input in forms.`
          },
          {
            title: "Authentication & Session Management",
            detail: "Implement secure login, password storage, and session handling.",
            code: `# Use bcrypt for password hashing\n# Set secure, HttpOnly cookies.`
          },
          {
            title: "Security Misconfiguration",
            detail: "Avoid default credentials, unnecessary services, and improper permissions.",
            code: `# Disable directory listing\n# Remove sample files from production.`
          }
        ],
        resources: [
          { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
          { label: "PortSwigger Web Security", url: "https://portswigger.net/web-security" }
        ]
      },
      {
        name: "System & Network Security",
        description: "Secure operating systems, networks, and endpoints. Learn about hardening, patching, monitoring, and incident response.",
        subtopics: [
          {
            title: "System Hardening",
            detail: "Reduce attack surface by disabling unnecessary services, applying patches, and enforcing strong policies.",
            code: `# Disable unused ports\n# Apply security updates regularly.`
          },
          {
            title: "Network Segmentation",
            detail: "Divide networks into segments to contain breaches and limit attacker movement.",
            code: `# Use VLANs and firewalls for segmentation.`
          },
          {
            title: "Endpoint Protection",
            detail: "Deploy antivirus, EDR, and monitoring tools to protect endpoints from malware and attacks.",
            code: `# Install and update endpoint security software.`
          }
        ],
        resources: [
          { label: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks/" },
          { label: "Microsoft Security Docs", url: "https://docs.microsoft.com/en-us/security/" }
        ]
      },
      {
        name: "Malware Analysis & Reverse Engineering",
        description: "Analyze malware to understand its behavior and develop defenses. Learn about static and dynamic analysis, and reverse engineering tools.",
        subtopics: [
          {
            title: "Static Analysis",
            detail: "Examine malware binaries without executing them. Use tools like strings, hexdump, and disassemblers.",
            code: `strings malware.exe\nhexdump -C malware.exe`
          },
          {
            title: "Dynamic Analysis",
            detail: "Run malware in a controlled environment (sandbox) to observe its behavior.",
            code: `# Use Cuckoo Sandbox or a VM for dynamic analysis.`
          },
          {
            title: "Reverse Engineering",
            detail: "Disassemble and debug binaries to understand how malware works.",
            code: `# Use Ghidra, IDA Pro, or OllyDbg for reverse engineering.`
          }
        ],
        resources: [
          { label: "Practical Malware Analysis", url: "https://www.nostarch.com/malware" },
          { label: "Ghidra Docs", url: "https://ghidra-sre.org/" }
        ]
      },
      {
        name: "Digital Forensics & Incident Response",
        description: "Investigate security incidents, collect evidence, and respond to breaches. Learn about forensic imaging, log analysis, and reporting.",
        subtopics: [
          {
            title: "Forensic Imaging",
            detail: "Create exact copies of disks and memory for analysis. Use write blockers to preserve evidence.",
            code: `# Use dd or FTK Imager for disk imaging.`
          },
          {
            title: "Log Analysis",
            detail: "Analyze system, application, and network logs to detect suspicious activity.",
            code: `# Use grep, awk, or Splunk for log analysis.`
          },
          {
            title: "Incident Response Process",
            detail: "Follow a structured process: preparation, detection, containment, eradication, recovery, and lessons learned.",
            code: `# Document every step and preserve evidence integrity.`
          }
        ],
        resources: [
          { label: "DFIR Guide", url: "https://www.sans.org/white-papers/incident-handlers-handbook/" },
          { label: "Forensics Wiki", url: "https://forensicswiki.xyz/" }
        ]
      },
      {
        name: "Cloud Security (AWS, Azure, GCP)",
        description: "Secure cloud environments by understanding shared responsibility, IAM, encryption, and monitoring. Learn about AWS, Azure, and GCP security features.",
        subtopics: [
          {
            title: "Cloud IAM (Identity & Access Management)",
            detail: "Control access to cloud resources using IAM roles, policies, and least privilege.",
            code: `# AWS IAM policy example\n{
  "Version": "2012-10-17",
  "Statement": [{ "Effect": "Allow", "Action": "s3:*", "Resource": "*" }]
}`
          },
          {
            title: "Encryption & Key Management",
            detail: "Encrypt data at rest and in transit. Manage keys securely using cloud KMS services.",
            code: `# AWS KMS example\naws kms encrypt --key-id ... --plaintext ...`
          },
          {
            title: "Cloud Monitoring & Logging",
            detail: "Monitor cloud resources and set up alerts for suspicious activity.",
            code: `# AWS CloudWatch, Azure Monitor, GCP Stackdriver.`
          }
        ],
        resources: [
          { label: "AWS Security Docs", url: "https://docs.aws.amazon.com/security/" },
          { label: "Azure Security Center", url: "https://docs.microsoft.com/en-us/azure/security-center/" }
        ]
      },
      {
        name: "SIEM & SOC Operations (Splunk, ELK Stack)",
        description: "Security Information and Event Management (SIEM) and Security Operations Centers (SOC) are critical for monitoring, detection, and response.",
        subtopics: [
          {
            title: "SIEM Fundamentals",
            detail: "Collect, normalize, and analyze security events from multiple sources.",
            code: `# Use Splunk or ELK Stack for log aggregation and analysis.`
          },
          {
            title: "SOC Roles & Playbooks",
            detail: "Understand SOC roles (analyst, responder, manager) and use playbooks for incident response.",
            code: `# Create incident response playbooks for common threats.`
          },
          {
            title: "Alerting & Automation",
            detail: "Set up alerts and automate responses to common security events.",
            code: `# Use Splunk alerts or ELK Watcher for automation.`
          }
        ],
        resources: [
          { label: "Splunk Docs", url: "https://docs.splunk.com/" },
          { label: "ELK Stack Guide", url: "https://www.elastic.co/guide/en/siem/guide/current/index.html" }
        ]
      },
      {
        name: "Security Certifications (CompTIA Security+, CEH, OSCP)",
        description: "Certifications validate your skills and boost your career. Learn about popular certs, exam formats, and preparation tips.",
        subtopics: [
          {
            title: "CompTIA Security+",
            detail: "Covers foundational security concepts, risk management, and best practices. Great for beginners.",
            code: `# Study domains: threats, architecture, risk, cryptography, etc.`
          },
          {
            title: "Certified Ethical Hacker (CEH)",
            detail: "Focuses on penetration testing, tools, and methodologies. Includes hands-on labs and real-world scenarios.",
            code: `# Practice with Metasploit, Nmap, Burp Suite.`
          },
          {
            title: "Offensive Security Certified Professional (OSCP)",
            detail: "Advanced certification with a practical exam. Requires strong skills in exploitation, scripting, and reporting.",
            code: `# Complete the PWK course and labs.`
          }
        ],
        resources: [
          { label: "Security+ Guide", url: "https://www.comptia.org/certifications/security" },
          { label: "OSCP Info", url: "https://www.offensive-security.com/oscp/" }
        ]
      },
      {
        name: "Bug Bounty & CTF Practice (Hack The Box, TryHackMe)",
        description: "Practice your skills in real-world environments. Participate in bug bounty programs and Capture The Flag (CTF) competitions.",
        subtopics: [
          {
            title: "Bug Bounty Platforms",
            detail: "Find and report vulnerabilities on platforms like HackerOne and Bugcrowd.",
            code: `# Submit reports, follow disclosure policies.`
          },
          {
            title: "CTF Competitions",
            detail: "Solve security challenges in CTFs to improve your skills and learn new techniques.",
            code: `# Join Hack The Box, TryHackMe, or CTFtime events.`
          }
        ],
        resources: [
          { label: "HackerOne", url: "https://www.hackerone.com/" },
          { label: "CTFtime", url: "https://ctftime.org/" }
        ]
      },
      {
        name: "Policy & Compliance (GDPR, ISO 27001, NIST)",
        description: "Understand security policies, compliance standards, and frameworks. Learn about GDPR, ISO 27001, NIST, and their impact on organizations.",
        subtopics: [
          {
            title: "GDPR & Data Privacy",
            detail: "General Data Protection Regulation (GDPR) governs data privacy in the EU. Learn about consent, data rights, and compliance.",
            code: `# Implement privacy policies, data subject requests.`
          },
          {
            title: "ISO 27001 & NIST",
            detail: "ISO 27001 and NIST provide frameworks for information security management and risk assessment.",
            code: `# Conduct risk assessments, implement controls.`
          }
        ],
        resources: [
          { label: "GDPR Guide", url: "https://gdpr.eu/" },
          { label: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" }
        ]
      },
      {
        name: "Cyber Law & Ethics",
        description: "Learn about the legal and ethical aspects of cybersecurity. Understand laws, regulations, and responsible disclosure.",
        subtopics: [
          {
            title: "Cyber Laws & Regulations",
            detail: "Familiarize yourself with laws like the Computer Fraud and Abuse Act (CFAA), GDPR, and local regulations.",
            code: `# Research laws in your country and industry.`
          },
          {
            title: "Ethical Hacking & Disclosure",
            detail: "Follow ethical guidelines for penetration testing and responsible disclosure of vulnerabilities.",
            code: `# Always get written permission before testing.`
          }
        ],
        resources: [
          { label: "Cyber Law Guide", url: "https://www.cyberlaw.stanford.edu/" },
          { label: "Ethical Hacking Guide", url: "https://www.eccouncil.org/ethical-hacking/" }
        ]
      },
      {
        name: "Build Labs, Portfolio & Stay Updated",
        description: "Build your own labs, document your work, and stay current with the latest threats and technologies.",
        subtopics: [
          {
            title: "Home Lab Setup",
            detail: "Set up virtual machines, networks, and tools to practice skills safely.",
            code: `# Use VirtualBox, VMware, or cloud VMs.`
          },
          {
            title: "Portfolio & Blogging",
            detail: "Document your projects, write blog posts, and share your knowledge with the community.",
            code: `# Use GitHub Pages, Medium, or Dev.to.`
          },
          {
            title: "Staying Updated",
            detail: "Follow security news, blogs, and advisories to keep your skills sharp.",
            code: `# Subscribe to Krebs on Security, Threatpost, etc.`
          }
        ],
        resources: [
          { label: "Awesome Security Blogs", url: "https://github.com/wearearima/awesome-security-blogs" },
          { label: "Krebs on Security", url: "https://krebsonsecurity.com/" }
        ]
      }
    ],
    duration: "8-15 months",
    difficulty: "Intermediate to Advanced"
  },
  {
    id: 7,
    title: "Blockchain & Web3 Roadmap",
    description: "A step-by-step guide for aspiring blockchain and Web3 developers, from blockchain fundamentals to smart contracts, DApps, DeFi, NFTs, and security best practices.",
    steps: [
      {
        name: "Learn Basics of Blockchain Technology",
        description: "Start with the fundamentals of blockchain: distributed ledgers, consensus, blocks, and decentralization. Understand why blockchain is secure and how it enables trustless systems.",
        subtopics: [
          {
            title: "What is a Blockchain?",
            detail: "A blockchain is a distributed, immutable ledger of transactions maintained by a network of nodes. Each block contains a list of transactions and a hash of the previous block, forming a secure chain.",
            code: `# Block structure (pseudo-code)\nblock = {\n  index: 1,\n  timestamp: '2023-01-01',\n  transactions: [...],\n  previous_hash: 'abc123',\n  hash: 'def456'\n}`
          },
          {
            title: "Consensus Mechanisms",
            detail: "Consensus algorithms like Proof of Work (PoW) and Proof of Stake (PoS) ensure agreement on the blockchain state without a central authority.",
            code: `# PoW: Miners solve puzzles\n# PoS: Validators stake tokens to propose blocks.`
          },
          {
            title: "Decentralization & Trustlessness",
            detail: "Decentralization means no single entity controls the network. Trustlessness means you don't need to trust any one party—rules are enforced by code.",
            code: `# Anyone can run a node and verify transactions.`
          }
        ],
        resources: [
          { label: "Blockchain Demo", url: "https://andersbrownworth.com/blockchain/" },
          { label: "Mastering Bitcoin (free)", url: "https://github.com/bitcoinbook/bitcoinbook" }
        ]
      },
      {
        name: "Understand Cryptography Fundamentals",
        description: "Cryptography is the backbone of blockchain security. Learn about hashing, public/private keys, digital signatures, and Merkle trees.",
        subtopics: [
          {
            title: "Hash Functions",
            detail: "Hash functions (SHA-256, Keccak) are used to secure data and link blocks. They are one-way and collision-resistant.",
            code: `import hashlib\nhashlib.sha256(b'hello').hexdigest()`
          },
          {
            title: "Public/Private Key Cryptography",
            detail: "Every blockchain user has a public/private key pair. Public keys are like addresses; private keys sign transactions.",
            code: `# Generate key pair with OpenSSL\nopenssl ecparam -genkey -name secp256k1 -out key.pem`
          },
          {
            title: "Digital Signatures",
            detail: "Digital signatures prove ownership and authorize transactions. Only the private key holder can sign, but anyone can verify with the public key.",
            code: `# ECDSA signature example\n# Used in Bitcoin, Ethereum`
          },
          {
            title: "Merkle Trees",
            detail: "Merkle trees efficiently summarize and verify large sets of data. Used for transaction verification in blocks.",
            code: `# Hash pairs of transactions up the tree to the Merkle root.`
          }
        ],
        resources: [
          { label: "CryptoZombies Cryptography", url: "https://cryptozombies.io/en/lesson/1/chapter/2" },
          { label: "Coursera Crypto", url: "https://www.coursera.org/learn/cryptography" }
        ]
      },
      {
        name: "Learn How Bitcoin & Ethereum Work",
        description: "Study the architecture, consensus, and transaction flow of Bitcoin and Ethereum. Understand how blocks are created, validated, and added to the chain.",
        subtopics: [
          {
            title: "Bitcoin Architecture",
            detail: "Bitcoin uses PoW, UTXO model, and a simple scripting language. Learn how transactions are created, signed, and mined.",
            code: `# UTXO: Unspent Transaction Output model\n# Each transaction spends previous outputs.`
          },
          {
            title: "Ethereum Architecture",
            detail: "Ethereum uses accounts, PoW/PoS, and a Turing-complete virtual machine (EVM). Supports smart contracts and DApps.",
            code: `# Ethereum: Account model\n# Smart contracts run on EVM.`
          },
          {
            title: "Transaction Lifecycle",
            detail: "Follow a transaction from creation to confirmation. Learn about mempools, mining, and block inclusion.",
            code: `# Transaction -> Mempool -> Block -> Chain`
          }
        ],
        resources: [
          { label: "Mastering Ethereum (free)", url: "https://github.com/ethereumbook/ethereumbook" },
          { label: "Bitcoin Whitepaper", url: "https://bitcoin.org/bitcoin.pdf" }
        ]
      },
      {
        name: "Explore Wallets, Transactions & Mining",
        description: "Learn how wallets store keys, how transactions are created and signed, and how mining secures the network.",
        subtopics: [
          {
            title: "Types of Wallets",
            detail: "Explore hot wallets (software, web), cold wallets (hardware, paper), and multisig wallets for security.",
            code: `# Use MetaMask, Ledger, or Trezor for wallets.`
          },
          {
            title: "Transaction Signing",
            detail: "Transactions are signed with private keys. Learn about nonces, gas, and transaction fees.",
            code: `# Sign transaction with private key before broadcasting.`
          },
          {
            title: "Mining & Staking",
            detail: "Mining (PoW) and staking (PoS) secure the network and validate transactions. Learn about block rewards and validator incentives.",
            code: `# Mining: Solve hash puzzles\n# Staking: Lock tokens to validate blocks.`
          }
        ],
        resources: [
          { label: "MetaMask Guide", url: "https://metamask.io/faqs/" },
          { label: "Ledger Academy", url: "https://www.ledger.com/academy" }
        ]
      },
      {
        name: "Learn Smart Contracts (Solidity + Ethereum)",
        description: "Smart contracts are self-executing programs on the blockchain. Learn Solidity, contract structure, and deployment on Ethereum.",
        subtopics: [
          {
            title: "Solidity Basics",
            detail: "Learn Solidity syntax, data types, functions, and contract structure.",
            code: `pragma solidity ^0.8.0;\ncontract Hello {\n  string public greet = 'Hello, Blockchain!';\n}`
          },
          {
            title: "Contract Deployment",
            detail: "Deploy contracts to Ethereum using Remix, Hardhat, or Truffle.",
            code: `# Use Remix IDE or Hardhat scripts for deployment.`
          },
          {
            title: "Events & Modifiers",
            detail: "Use events for logging and modifiers for access control and validation.",
            code: `event Sent(address from, address to, uint amount);\nmodifier onlyOwner { require(msg.sender == owner); _; }`
          },
          {
            title: "Inheritance & Libraries",
            detail: "Reuse code with contract inheritance and external libraries.",
            code: `import "@openzeppelin/contracts/access/Ownable.sol";`
          }
        ],
        resources: [
          { label: "Solidity Docs", url: "https://docs.soliditylang.org/" },
          { label: "Remix IDE", url: "https://remix.ethereum.org/" }
        ]
      },
      {
        name: "Understand Ethereum Virtual Machine (EVM)",
        description: "The EVM is the runtime for smart contracts. Learn about opcodes, gas, and how contracts are executed on Ethereum nodes.",
        subtopics: [
          {
            title: "EVM Architecture",
            detail: "Understand the stack-based architecture, opcodes, and how the EVM executes bytecode.",
            code: `# EVM executes contract bytecode\n# Stack, memory, storage, gas accounting.`
          },
          {
            title: "Gas & Execution Costs",
            detail: "Every operation in the EVM costs gas. Learn how to estimate and optimize gas usage.",
            code: `# Use Remix or Hardhat to estimate gas.`
          },
          {
            title: "EVM-Compatible Chains",
            detail: "Explore other blockchains compatible with the EVM (Polygon, BSC, Avalanche, etc.).",
            code: `# Deploy contracts to Polygon, BSC, etc. with minimal changes.`
          }
        ],
        resources: [
          { label: "EVM Illustrated", url: "https://evm.codes/" },
          { label: "Ethereum Yellow Paper", url: "https://ethereum.github.io/yellowpaper/paper.pdf" }
        ]
      },
      {
        name: "Master Web3.js or Ethers.js (Blockchain Interaction)",
        description: "Web3.js and Ethers.js are JavaScript libraries for interacting with Ethereum and other blockchains. Learn to connect wallets, send transactions, and call smart contracts.",
        subtopics: [
          {
            title: "Connecting to Ethereum",
            detail: "Connect to Ethereum nodes using Infura, Alchemy, or local nodes.",
            code: `const Web3 = require('web3');\nconst web3 = new Web3('https://mainnet.infura.io/v3/YOUR_KEY');`
          },
          {
            title: "Reading & Writing Data",
            detail: "Read blockchain data and send transactions using Web3.js or Ethers.js.",
            code: `web3.eth.getBalance(address);\nweb3.eth.sendTransaction({...});`
          },
          {
            title: "Interacting with Smart Contracts",
            detail: "Call contract functions, listen for events, and handle ABI encoding/decoding.",
            code: `const contract = new web3.eth.Contract(abi, address);\ncontract.methods.myMethod().call();`
          },
          {
            title: "Wallet Integration",
            detail: "Integrate MetaMask or WalletConnect for user authentication and transaction signing.",
            code: `# Use window.ethereum or WalletConnect SDK.`
          }
        ],
        resources: [
          { label: "Web3.js Docs", url: "https://web3js.readthedocs.io/" },
          { label: "Ethers.js Docs", url: "https://docs.ethers.io/" }
        ]
      },
      {
        name: "Build DApps (Decentralized Applications)",
        description: "DApps are applications that run on blockchains. Learn about architecture, front-end integration, and best practices for building secure, scalable DApps.",
        subtopics: [
          {
            title: "DApp Architecture",
            detail: "Understand the structure of DApps: smart contracts, front-end, and blockchain interaction.",
            code: `# DApp = Smart Contract + Web3 Frontend + Wallet Integration.`
          },
          {
            title: "Front-End Frameworks",
            detail: "Use React, Vue, or Angular to build user interfaces for DApps.",
            code: `# Use create-react-app or Next.js for DApp frontends.`
          },
          {
            title: "State Management & Caching",
            detail: "Manage on-chain and off-chain state, cache data for performance, and handle blockchain events.",
            code: `# Use Redux, Zustand, or Apollo Client for state management.`
          },
          {
            title: "Security Best Practices",
            detail: "Follow security best practices for DApps: input validation, error handling, and user education.",
            code: `# Never store private keys in the browser.`
          }
        ],
        resources: [
          { label: "DApp University", url: "https://www.dappuniversity.com/" },
          { label: "Buildspace", url: "https://buildspace.so/" }
        ]
      },
      {
        name: "Explore Blockchain Platforms (Polygon, Solana, BSC)",
        description: "Explore different blockchain platforms, their consensus mechanisms, and development environments.",
        subtopics: [
          {
            title: "Polygon (Matic)",
            detail: "Polygon is an EVM-compatible chain with low fees and fast transactions. Learn about bridging assets and deploying contracts.",
            code: `# Use Polygon Bridge to transfer assets.`
          },
          {
            title: "Solana",
            detail: "Solana is a high-performance blockchain with a unique consensus (Proof of History). Learn about Solana programs and Rust development.",
            code: `# Use Solana CLI and Anchor for development.`
          },
          {
            title: "Binance Smart Chain (BSC)",
            detail: "BSC is EVM-compatible and widely used for DeFi and NFT projects. Learn about BEP-20 tokens and PancakeSwap.",
            code: `# Deploy contracts to BSC using Remix or Hardhat.`
          }
        ],
        resources: [
          { label: "Polygon Docs", url: "https://docs.polygon.technology/" },
          { label: "Solana Docs", url: "https://docs.solana.com/" }
        ]
      },
      {
        name: "Use Development Tools (Remix, Hardhat, Truffle)",
        description: "Master blockchain development tools for writing, testing, and deploying smart contracts.",
        subtopics: [
          {
            title: "Remix IDE",
            detail: "Remix is a web-based IDE for Solidity development. Write, test, and deploy contracts directly from your browser.",
            code: `# Use Remix for quick prototyping and debugging.`
          },
          {
            title: "Hardhat",
            detail: "Hardhat is a powerful development environment for Ethereum. Supports testing, deployment, and scripting.",
            code: `# Use Hardhat for local blockchain and automated tests.`
          },
          {
            title: "Truffle Suite",
            detail: "Truffle provides a suite of tools for contract compilation, migration, and testing.",
            code: `# Use Truffle for project scaffolding and migrations.`
          },
          {
            title: "Testing & Debugging",
            detail: "Write unit tests for contracts, debug transactions, and use coverage tools.",
            code: `# Use Mocha, Chai, and Solidity coverage plugins.`
          }
        ],
        resources: [
          { label: "Remix Docs", url: "https://remix-ide.readthedocs.io/" },
          { label: "Hardhat Docs", url: "https://hardhat.org/getting-started/" }
        ]
      },
      {
        name: "Work with IPFS & Decentralized Storage",
        description: "IPFS and decentralized storage solutions enable censorship-resistant, distributed file storage for DApps and NFTs.",
        subtopics: [
          {
            title: "IPFS Basics",
            detail: "IPFS (InterPlanetary File System) is a peer-to-peer protocol for storing and sharing files. Files are addressed by their content hash.",
            code: `# Add file to IPFS\nipfs add myfile.txt`
          },
          {
            title: "Pinning & Persistence",
            detail: "Pin files to ensure they remain available on the network. Use pinning services for reliability.",
            code: `# Use Pinata or Infura for pinning.`
          },
          {
            title: "Decentralized Storage Networks",
            detail: "Explore Filecoin, Arweave, and Storj for decentralized, incentivized storage.",
            code: `# Store files on Filecoin or Arweave for long-term storage.`
          }
        ],
        resources: [
          { label: "IPFS Docs", url: "https://docs.ipfs.tech/" },
          { label: "Filecoin Docs", url: "https://docs.filecoin.io/" }
        ]
      },
      {
        name: "Understand Gas, Tokens (ERC-20, ERC-721, ERC-1155)",
        description: "Learn about gas fees, token standards, and how tokens power DeFi, NFTs, and DApps.",
        subtopics: [
          {
            title: "Gas & Fees",
            detail: "Every transaction and contract execution costs gas. Learn how to estimate, optimize, and pay for gas.",
            code: `# Use eth_gasPrice and estimateGas in Web3.js.`
          },
          {
            title: "ERC-20 Tokens",
            detail: "ERC-20 is the standard for fungible tokens on Ethereum. Learn about transfers, approvals, and events.",
            code: `# ERC-20 contract interface\nfunction transfer(address to, uint amount)`
          },
          {
            title: "ERC-721 & ERC-1155 Tokens",
            detail: "ERC-721 is for unique NFTs; ERC-1155 supports both fungible and non-fungible tokens in one contract.",
            code: `# ERC-721: function ownerOf(uint tokenId)\n# ERC-1155: function safeTransferFrom(...)`
          }
        ],
        resources: [
          { label: "Ethereum Gas Guide", url: "https://ethereum.org/en/developers/docs/gas/" },
          { label: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/contracts/4.x/" }
        ]
      },
      {
        name: "Learn Tokenomics & DeFi (Lending, Staking, DEXs)",
        description: "Tokenomics is the study of token supply, demand, and incentives. DeFi (Decentralized Finance) includes lending, staking, DEXs, and yield farming.",
        subtopics: [
          {
            title: "Token Supply & Distribution",
            detail: "Understand total supply, inflation, vesting, and distribution models for tokens.",
            code: `# Check tokenomics in project whitepapers.`
          },
          {
            title: "DeFi Lending & Staking",
            detail: "Lend, borrow, and stake tokens on DeFi platforms like Aave, Compound, and Uniswap.",
            code: `# Supply tokens to Aave, earn interest.`
          },
          {
            title: "Decentralized Exchanges (DEXs)",
            detail: "Trade tokens on DEXs like Uniswap, SushiSwap, and PancakeSwap. Learn about AMMs and liquidity pools.",
            code: `# Swap tokens on Uniswap using MetaMask.`
          },
          {
            title: "Yield Farming & Liquidity Mining",
            detail: "Earn rewards by providing liquidity to DeFi protocols. Understand risks and rewards.",
            code: `# Stake LP tokens to earn yield.`
          }
        ],
        resources: [
          { label: "DeFi Pulse", url: "https://defipulse.com/" },
          { label: "Aave Docs", url: "https://docs.aave.com/" }
        ]
      },
      {
        name: "Study DAOs & Governance Models",
        description: "DAOs (Decentralized Autonomous Organizations) are blockchain-based organizations governed by code and token holders. Learn about governance, voting, and proposals.",
        subtopics: [
          {
            title: "DAO Structure & Governance",
            detail: "Understand how DAOs are structured, how proposals are made, and how voting works.",
            code: `# Use Snapshot or Aragon for DAO voting.`
          },
          {
            title: "Treasury Management",
            detail: "DAOs manage treasuries for funding projects and operations. Learn about multi-sig wallets and on-chain proposals.",
            code: `# Use Gnosis Safe for DAO treasury management.`
          },
          {
            title: "Governance Tokens",
            detail: "Governance tokens give holders voting power in DAOs. Learn about token-weighted voting and delegation.",
            code: `# Vote on proposals using governance tokens.`
          }
        ],
        resources: [
          { label: "DAOstack Guide", url: "https://daostack.io/docs/" },
          { label: "Aragon Docs", url: "https://aragon.org/" }
        ]
      },
      {
        name: "Understand NFTs & Metadata Standards",
        description: "NFTs (Non-Fungible Tokens) represent unique digital assets. Learn about standards, metadata, and marketplaces.",
        subtopics: [
          {
            title: "NFT Standards (ERC-721, ERC-1155)",
            detail: "Understand the standards for NFTs and how they enable unique digital ownership.",
            code: `# ERC-721: function tokenURI(uint tokenId)`
          },
          {
            title: "Metadata & IPFS",
            detail: "NFT metadata describes the asset and is often stored on IPFS for permanence.",
            code: `# Store metadata JSON on IPFS.`
          },
          {
            title: "NFT Marketplaces",
            detail: "Explore platforms like OpenSea, Rarible, and Foundation for minting, buying, and selling NFTs.",
            code: `# List NFTs on OpenSea using their API.`
          }
        ],
        resources: [
          { label: "OpenSea Docs", url: "https://docs.opensea.io/" },
          { label: "NFT School", url: "https://nftschool.dev/" }
        ]
      },
      {
        name: "Get Familiar with Layer 2 Solutions (Optimism, zkRollups)",
        description: "Layer 2 solutions scale blockchains by processing transactions off-chain. Learn about Optimism, Arbitrum, zkRollups, and their benefits.",
        subtopics: [
          {
            title: "Optimistic Rollups",
            detail: "Optimistic rollups bundle transactions off-chain and submit proofs to the main chain. Fast and cost-effective.",
            code: `# Use Optimism or Arbitrum for low-fee DApps.`
          },
          {
            title: "zkRollups",
            detail: "zkRollups use zero-knowledge proofs for secure, scalable transactions. Learn about SNARKs and STARKs.",
            code: `# Deploy contracts to zkSync or StarkNet.`
          },
          {
            title: "Bridges & Interoperability",
            detail: "Move assets between Layer 1 and Layer 2 using bridges. Understand cross-chain communication.",
            code: `# Use Hop Protocol or Polygon Bridge.`
          }
        ],
        resources: [
          { label: "Optimism Docs", url: "https://community.optimism.io/docs/" },
          { label: "zkSync Docs", url: "https://docs.zksync.io/" }
        ]
      },
      {
        name: "Security in Smart Contracts (Reentrancy, Overflows, Audits)",
        description: "Security is critical in blockchain. Learn about common vulnerabilities, secure coding, and auditing smart contracts.",
        subtopics: [
          {
            title: "Reentrancy & Overflows",
            detail: "Reentrancy attacks and integer overflows are common vulnerabilities. Use checks-effects-interactions and SafeMath libraries.",
            code: `# Use require() and SafeMath in Solidity.`
          },
          {
            title: "Access Control & Upgradability",
            detail: "Implement role-based access control and understand proxy patterns for upgradable contracts.",
            code: `# Use OpenZeppelin's AccessControl and Proxy contracts.`
          },
          {
            title: "Auditing & Bug Bounties",
            detail: "Audit contracts with tools like MythX, Slither, and participate in bug bounty programs.",
            code: `# Run static analysis and fuzzing tools.`
          }
        ],
        resources: [
          { label: "Smart Contract Best Practices", url: "https://consensys.github.io/smart-contract-best-practices/" },
          { label: "OpenZeppelin Security", url: "https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies" }
        ]
      },
      {
        name: "Deploy Projects on Testnets & Mainnets",
        description: "Deploy your smart contracts and DApps to Ethereum testnets (Goerli, Sepolia) and mainnets. Learn about faucets, explorers, and deployment scripts.",
        subtopics: [
          {
            title: "Testnet Deployment",
            detail: "Deploy contracts to testnets for safe testing. Use faucets to get test ETH and verify contracts on explorers.",
            code: `# Use Hardhat or Truffle for testnet deployment.`
          },
          {
            title: "Mainnet Deployment",
            detail: "Deploy to mainnet when ready. Double-check code, audit, and use multisig for admin controls.",
            code: `# Use Etherscan to verify and monitor contracts.`
          },
          {
            title: "Deployment Automation",
            detail: "Automate deployments with scripts and CI/CD pipelines for reliability and repeatability.",
            code: `# Use GitHub Actions or GitLab CI for deployment automation.`
          }
        ],
        resources: [
          { label: "Ethereum Testnets", url: "https://ethereum.org/en/developers/docs/networks/" },
          { label: "Etherscan Docs", url: "https://docs.etherscan.io/" }
        ]
      },
      {
        name: "Build a Web3 Portfolio (Showcase on GitHub + Live DApps)",
        description: "Showcase your blockchain projects on GitHub and deploy live DApps. Build a portfolio website and write case studies.",
        subtopics: [
          {
            title: "GitHub Repositories",
            detail: "Host your smart contracts, DApps, and documentation on GitHub for visibility and collaboration.",
            code: `# Use README files and project boards.`
          },
          {
            title: "Live DApp Deployment",
            detail: "Deploy your DApps to live networks and share links with employers and the community.",
            code: `# Use Vercel, Netlify, or Fleek for hosting.`
          },
          {
            title: "Case Studies & Blog Posts",
            detail: "Write about your projects, challenges, and solutions to demonstrate expertise.",
            code: `# Publish on Medium, Dev.to, or your own site.`
          }
        ],
        resources: [
          { label: "Web3 Portfolio Guide", url: "https://www.useweb3.xyz/learn/portfolio" },
          { label: "Fleek Hosting", url: "https://fleek.co/" }
        ]
      },
      {
        name: "Stay Updated with Web3 Trends & Communities",
        description: "Web3 is fast-moving. Stay updated with news, join communities, and participate in hackathons and forums.",
        subtopics: [
          {
            title: "News & Newsletters",
            detail: "Follow top Web3 news sites, newsletters, and podcasts to keep up with trends.",
            code: `# Subscribe to The Defiant, Bankless, Week in Ethereum.`
          },
          {
            title: "Communities & Forums",
            detail: "Join Discord, Telegram, and online forums to network and learn from others.",
            code: `# Join developer channels and hackathons.`
          },
          {
            title: "Contributing to Open Source",
            detail: "Contribute to open source blockchain projects to gain experience and recognition.",
            code: `# Find issues on GitHub and submit pull requests.`
          }
        ],
        resources: [
          { label: "Week in Ethereum", url: "https://weekinethereumnews.com/" },
          { label: "Bankless", url: "https://banklesshq.com/" }
        ]
      }
    ],
    duration: "8-15 months",
    difficulty: "Intermediate to Advanced"
  },
  {
    id: 8,
    title: "Digital Marketing & SEO Roadmap",
    description: "A comprehensive roadmap for aspiring digital marketers and SEO specialists, covering fundamentals, content, SEO, SEM, social, analytics, automation, and career growth.",
    steps: [
      {
        name: "Understand Digital Marketing Fundamentals",
        description: "Learn the basics of digital marketing, including channels, strategies, and the digital marketing funnel.",
        subtopics: [
          {
            title: "What is Digital Marketing?",
            detail: "Digital marketing is the use of online channels to promote products, services, or brands. It includes SEO, SEM, content, social media, email, and more.",
            code: `# Digital marketing channels: SEO, SEM, Social, Email, Content, Affiliate, Mobile.`
          },
          {
            title: "Digital Marketing Funnel",
            detail: "Understand the stages: Awareness, Interest, Consideration, Conversion, Loyalty, Advocacy.",
            code: `# Funnel: Awareness > Interest > Consideration > Conversion > Loyalty > Advocacy.`
          },
          {
            title: "Key Metrics",
            detail: "Learn about KPIs: impressions, clicks, CTR, conversions, CAC, LTV, ROI.",
            code: `# Example: CTR = (Clicks / Impressions) * 100%`
          }
        ],
        resources: [
          { label: "HubSpot Digital Marketing Guide", url: "https://blog.hubspot.com/marketing/digital-marketing" },
          { label: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage" }
        ]
      },
      {
        name: "Learn Content Marketing & Copywriting",
        description: "Content marketing attracts and retains audiences. Copywriting persuades users to take action. Learn both for effective campaigns.",
        subtopics: [
          {
            title: "Content Strategy",
            detail: "Plan, create, and distribute valuable content to attract and engage your audience.",
            code: `# Content types: blogs, videos, infographics, ebooks, podcasts.`
          },
          {
            title: "Copywriting Techniques",
            detail: "Use persuasive writing, storytelling, and calls-to-action (CTAs) to drive conversions.",
            code: `# AIDA: Attention, Interest, Desire, Action.`
          },
          {
            title: "Content Calendar",
            detail: "Organize and schedule content for consistency and impact.",
            code: `# Use Google Sheets or Trello for content planning.`
          }
        ],
        resources: [
          { label: "Copyblogger", url: "https://copyblogger.com/" },
          { label: "Content Marketing Institute", url: "https://contentmarketinginstitute.com/" }
        ]
      },
      {
        name: "Master Search Engine Optimization (SEO)",
        description: "SEO improves website visibility in search engines. Learn on-page, off-page, and technical SEO.",
        subtopics: [
          {
            title: "On-Page SEO",
            detail: "Optimize titles, meta descriptions, headings, and content for target keywords.",
            code: `<title>Best SEO Tips 2024</title>\n<meta name='description' content='Learn top SEO strategies.' />`
          },
          {
            title: "Off-Page SEO",
            detail: "Build backlinks, manage online reputation, and leverage social signals.",
            code: `# Guest posting, outreach, and PR for backlinks.`
          },
          {
            title: "Technical SEO",
            detail: "Improve site speed, mobile-friendliness, crawlability, and structured data.",
            code: `<script type='application/ld+json'>{...}</script>`
          },
          {
            title: "Keyword Research",
            detail: "Find and analyze keywords using tools like Ahrefs, SEMrush, or Google Keyword Planner.",
            code: `# Use long-tail keywords for better targeting.`
          }
        ],
        resources: [
          { label: "Moz Beginner's Guide to SEO", url: "https://moz.com/beginners-guide-to-seo" },
          { label: "Google Search Central", url: "https://developers.google.com/search" }
        ]
      },
      {
        name: "Learn Search Engine Marketing (Google Ads / PPC)",
        description: "SEM uses paid ads to drive traffic. Learn Google Ads, keyword bidding, ad copy, and campaign optimization.",
        subtopics: [
          {
            title: "Google Ads Basics",
            detail: "Set up campaigns, ad groups, and ads. Choose keywords and set budgets.",
            code: `# Campaign > Ad Group > Ads > Keywords.`
          },
          {
            title: "PPC Bidding Strategies",
            detail: "Manual vs. automated bidding, CPC, CPM, CPA models.",
            code: `# Maximize conversions with smart bidding.`
          },
          {
            title: "Ad Copywriting",
            detail: "Write compelling headlines and descriptions to improve Quality Score and CTR.",
            code: `# Use keywords in ad copy and strong CTAs.`
          },
          {
            title: "Campaign Optimization",
            detail: "Monitor performance, adjust bids, and use negative keywords to improve ROI.",
            code: `# A/B test ads and landing pages.`
          }
        ],
        resources: [
          { label: "Google Ads Help", url: "https://support.google.com/google-ads/" },
          { label: "WordStream PPC Guide", url: "https://www.wordstream.com/ppc" }
        ]
      },
      {
        name: "Social Media Marketing (FB, IG, LinkedIn, X)",
        description: "Leverage social platforms for brand awareness, engagement, and conversions. Learn organic and paid strategies.",
        subtopics: [
          {
            title: "Platform Selection",
            detail: "Choose the right platforms (Facebook, Instagram, LinkedIn, X/Twitter) for your audience and goals.",
            code: `# B2B: LinkedIn | B2C: Instagram, Facebook, X.`
          },
          {
            title: "Content Planning & Scheduling",
            detail: "Create a content calendar and use scheduling tools (Buffer, Hootsuite).",
            code: `# Schedule posts for optimal engagement times.`
          },
          {
            title: "Paid Social Advertising",
            detail: "Run targeted ad campaigns, set budgets, and analyze results.",
            code: `# Use Facebook Ads Manager for campaign setup.`
          },
          {
            title: "Community Management",
            detail: "Engage with followers, respond to comments, and manage brand reputation.",
            code: `# Use social listening tools for monitoring.`
          }
        ],
        resources: [
          { label: "Hootsuite Social Marketing", url: "https://blog.hootsuite.com/social-media-marketing-strategy/" },
          { label: "Buffer Blog", url: "https://buffer.com/resources/" }
        ]
      },
      {
        name: "Email Marketing (Tools, Campaigns, Funnels)",
        description: "Email marketing is a high-ROI channel. Learn about tools, list building, segmentation, and automation.",
        subtopics: [
          {
            title: "Email Service Providers (ESPs)",
            detail: "Use tools like Mailchimp, ConvertKit, or HubSpot for campaign management.",
            code: `# Set up lists, templates, and automations.`
          },
          {
            title: "Segmentation & Personalization",
            detail: "Segment lists by behavior, demographics, or interests. Personalize content for higher engagement.",
            code: `# Use merge tags for dynamic content.`
          },
          {
            title: "Campaign Types",
            detail: "Newsletters, drip campaigns, product launches, and re-engagement emails.",
            code: `# Automate welcome and nurture sequences.`
          },
          {
            title: "A/B Testing & Analytics",
            detail: "Test subject lines, content, and CTAs. Analyze open, click, and conversion rates.",
            code: `# Use ESP analytics dashboards.`
          }
        ],
        resources: [
          { label: "Mailchimp Email Marketing", url: "https://mailchimp.com/email-marketing/" },
          { label: "HubSpot Email Marketing", url: "https://blog.hubspot.com/marketing/email-marketing" }
        ]
      },
      {
        name: "Learn Affiliate Marketing Basics",
        description: "Affiliate marketing earns commissions by promoting products/services. Learn how to join programs, create content, and track results.",
        subtopics: [
          {
            title: "Affiliate Networks & Programs",
            detail: "Join networks like Amazon Associates, ShareASale, or CJ Affiliate.",
            code: `# Sign up, get links, and start promoting.`
          },
          {
            title: "Content for Affiliate Marketing",
            detail: "Create reviews, comparisons, and tutorials to drive affiliate sales.",
            code: `# Use SEO and social media to drive traffic.`
          },
          {
            title: "Tracking & Compliance",
            detail: "Use tracking links, disclose partnerships, and comply with FTC guidelines.",
            code: `# Add disclosure statements to posts.`
          }
        ],
        resources: [
          { label: "Neil Patel Affiliate Guide", url: "https://neilpatel.com/what-is-affiliate-marketing/" },
          { label: "ShareASale", url: "https://www.shareasale.com/" }
        ]
      },
      {
        name: "Understand Analytics (Google Analytics, GA4, Hotjar)",
        description: "Analytics tools help measure and optimize marketing performance. Learn Google Analytics, GA4, Hotjar, and more.",
        subtopics: [
          {
            title: "Google Analytics & GA4",
            detail: "Set up tracking, analyze user behavior, and create custom reports.",
            code: `# Add GA4 tag to your site for event tracking.`
          },
          {
            title: "Heatmaps & Session Recording",
            detail: "Use Hotjar or Crazy Egg to visualize user interactions and identify UX issues.",
            code: `# Analyze heatmaps to improve conversions.`
          },
          {
            title: "UTM Parameters & Attribution",
            detail: "Track campaign performance with UTM tags and understand attribution models.",
            code: `# utm_source, utm_medium, utm_campaign in URLs.`
          }
        ],
        resources: [
          { label: "Google Analytics Academy", url: "https://analytics.google.com/analytics/academy/" },
          { label: "Hotjar Guides", url: "https://www.hotjar.com/blog/" }
        ]
      },
      {
        name: "Conversion Rate Optimization (CRO)",
        description: "CRO increases the percentage of visitors who take desired actions. Learn A/B testing, UX, and persuasive design.",
        subtopics: [
          {
            title: "A/B & Multivariate Testing",
            detail: "Test different versions of pages or elements to find what works best.",
            code: `# Use Google Optimize or VWO for experiments.`
          },
          {
            title: "UX & Persuasive Design",
            detail: "Improve usability, reduce friction, and use persuasive elements (social proof, scarcity).",
            code: `# Add testimonials and clear CTAs.`
          },
          {
            title: "Funnel Analysis",
            detail: "Analyze user journeys and identify drop-off points.",
            code: `# Use Google Analytics funnel reports.`
          }
        ],
        resources: [
          { label: "CXL Institute CRO", url: "https://cxl.com/institute/courses/conversion-optimization/" },
          { label: "VWO Blog", url: "https://vwo.com/blog/" }
        ]
      },
      {
        name: "Understand Customer Journey & Funnels",
        description: "Map the customer journey from awareness to advocacy. Design funnels to guide users toward conversion.",
        subtopics: [
          {
            title: "Customer Journey Mapping",
            detail: "Visualize each touchpoint and stage in the customer experience.",
            code: `# Awareness > Consideration > Purchase > Retention > Advocacy.`
          },
          {
            title: "Funnel Design",
            detail: "Create lead magnets, landing pages, and nurture sequences to move users through the funnel.",
            code: `# Use lead magnets to capture emails.`
          },
          {
            title: "Lifecycle Marketing",
            detail: "Engage users at every stage with targeted content and offers.",
            code: `# Use email and retargeting for retention.`
          }
        ],
        resources: [
          { label: "HubSpot Customer Journey", url: "https://blog.hubspot.com/service/customer-journey-map" },
          { label: "Mailchimp Funnels", url: "https://mailchimp.com/resources/marketing-funnels/" }
        ]
      },
      {
        name: "Influencer & Video Marketing (YouTube, Reels)",
        description: "Leverage influencers and video content for reach and engagement. Learn about platforms, collaboration, and video SEO.",
        subtopics: [
          {
            title: "Influencer Marketing",
            detail: "Partner with influencers to reach new audiences and build trust.",
            code: `# Use platforms like Upfluence or AspireIQ.`
          },
          {
            title: "Video Content Creation",
            detail: "Create engaging videos for YouTube, Instagram Reels, TikTok, and more.",
            code: `# Use Canva or Adobe Premiere for editing.`
          },
          {
            title: "Video SEO",
            detail: "Optimize titles, descriptions, and tags for video search visibility.",
            code: `# Add keywords and timestamps to YouTube videos.`
          }
        ],
        resources: [
          { label: "YouTube Creator Academy", url: "https://creatoracademy.youtube.com/" },
          { label: "Influencer Marketing Hub", url: "https://influencermarketinghub.com/" }
        ]
      },
      {
        name: "Mobile Marketing & App Store Optimization (ASO)",
        description: "Promote apps and mobile experiences. Learn ASO, push notifications, and mobile ad networks.",
        subtopics: [
          {
            title: "App Store Optimization (ASO)",
            detail: "Optimize app titles, descriptions, icons, and screenshots for better rankings.",
            code: `# Use relevant keywords in app metadata.`
          },
          {
            title: "Push Notifications",
            detail: "Engage users with timely, personalized push notifications.",
            code: `# Use OneSignal or Firebase Cloud Messaging.`
          },
          {
            title: "Mobile Ad Networks",
            detail: "Advertise on mobile platforms using AdMob, Facebook Audience Network, etc.",
            code: `# Set up campaigns for iOS and Android.`
          }
        ],
        resources: [
          { label: "App Annie ASO Guide", url: "https://www.data.ai/en/insights/mobile-marketing/app-store-optimization-aso-guide/" },
          { label: "OneSignal Docs", url: "https://documentation.onesignal.com/docs" }
        ]
      },
      {
        name: "Learn Marketing Automation Tools (HubSpot, Mailchimp)",
        description: "Automation tools streamline marketing tasks. Learn to set up workflows, lead scoring, and automated campaigns.",
        subtopics: [
          {
            title: "Workflow Automation",
            detail: "Automate repetitive tasks like email sequences, lead nurturing, and follow-ups.",
            code: `# Use HubSpot workflows or Mailchimp automations.`
          },
          {
            title: "Lead Scoring",
            detail: "Score leads based on behavior and engagement to prioritize sales efforts.",
            code: `# Assign points for email opens, clicks, and site visits.`
          },
          {
            title: "CRM Integration",
            detail: "Integrate marketing automation with CRM systems for seamless data flow.",
            code: `# Sync contacts between HubSpot and Salesforce.`
          }
        ],
        resources: [
          { label: "HubSpot Automation", url: "https://blog.hubspot.com/marketing/marketing-automation-examples" },
          { label: "Mailchimp Automations", url: "https://mailchimp.com/features/marketing-automation/" }
        ]
      },
      {
        name: "Local SEO & Google My Business",
        description: "Local SEO helps businesses appear in local search results. Learn to optimize Google My Business and local citations.",
        subtopics: [
          {
            title: "Google My Business (GMB)",
            detail: "Claim and optimize your GMB listing with accurate info, photos, and reviews.",
            code: `# Add business hours, address, and respond to reviews.`
          },
          {
            title: "Local Citations",
            detail: "List your business on directories like Yelp, TripAdvisor, and Yellow Pages.",
            code: `# Ensure NAP (Name, Address, Phone) consistency.`
          },
          {
            title: "Local Link Building",
            detail: "Earn backlinks from local websites, news outlets, and partners.",
            code: `# Sponsor local events or collaborate with local bloggers.`
          }
        ],
        resources: [
          { label: "Moz Local SEO Guide", url: "https://moz.com/learn/seo/local" },
          { label: "Google My Business Help", url: "https://support.google.com/business/" }
        ]
      },
      {
        name: "E-commerce Marketing (Shopify, WooCommerce SEO)",
        description: "Promote online stores using SEO, paid ads, email, and conversion optimization. Learn Shopify and WooCommerce best practices.",
        subtopics: [
          {
            title: "E-commerce SEO",
            detail: "Optimize product pages, categories, and site structure for search engines.",
            code: `# Use schema markup for products and reviews.`
          },
          {
            title: "Shopify & WooCommerce",
            detail: "Set up and optimize stores, manage products, and integrate marketing tools.",
            code: `# Use Shopify apps and WooCommerce plugins for marketing.`
          },
          {
            title: "Cart Abandonment Recovery",
            detail: "Use email and retargeting to recover lost sales.",
            code: `# Send automated cart recovery emails.`
          }
        ],
        resources: [
          { label: "Shopify Marketing", url: "https://www.shopify.com/blog/topics/marketing" },
          { label: "WooCommerce SEO Guide", url: "https://woocommerce.com/posts/woocommerce-seo-guide/" }
        ]
      },
      {
        name: "SEO Tools Mastery (Ahrefs, SEMrush, Moz, Ubersuggest)",
        description: "Master top SEO tools for keyword research, site audits, and competitor analysis.",
        subtopics: [
          {
            title: "Keyword Research Tools",
            detail: "Use Ahrefs, SEMrush, Moz, or Ubersuggest to find high-value keywords.",
            code: `# Analyze keyword difficulty and search volume.`
          },
          {
            title: "Site Audit & Health",
            detail: "Run site audits to find and fix SEO issues (broken links, duplicate content, etc.).",
            code: `# Use SEMrush or Ahrefs Site Audit tools.`
          },
          {
            title: "Competitor Analysis",
            detail: "Analyze competitors' keywords, backlinks, and content strategies.",
            code: `# Benchmark against top competitors.`
          }
        ],
        resources: [
          { label: "Ahrefs Blog", url: "https://ahrefs.com/blog/" },
          { label: "SEMrush Academy", url: "https://www.semrush.com/academy/" }
        ]
      },
      {
        name: "Create Case Studies & Marketing Campaigns",
        description: "Showcase your skills by creating case studies and running real or simulated marketing campaigns.",
        subtopics: [
          {
            title: "Case Study Structure",
            detail: "Document objectives, strategies, execution, results, and lessons learned.",
            code: `# Use before/after metrics to show impact.`
          },
          {
            title: "Campaign Planning",
            detail: "Set goals, define target audience, choose channels, and set KPIs.",
            code: `# Use SMART goals for campaigns.`
          },
          {
            title: "Reporting & Analysis",
            detail: "Present results with data visualizations and actionable insights.",
            code: `# Use Google Data Studio for reporting.`
          }
        ],
        resources: [
          { label: "HubSpot Case Study Guide", url: "https://blog.hubspot.com/marketing/case-study-examples" },
          { label: "Google Data Studio", url: "https://datastudio.google.com/" }
        ]
      },
      {
        name: "Build Personal Brand & Portfolio (LinkedIn, Blog, Projects)",
        description: "Establish your online presence and showcase your work. Build a portfolio website, LinkedIn profile, and share projects.",
        subtopics: [
          {
            title: "LinkedIn Optimization",
            detail: "Optimize your profile, add skills, endorsements, and recommendations.",
            code: `# Add portfolio links and featured posts.`
          },
          {
            title: "Portfolio Website",
            detail: "Create a personal website to showcase projects, case studies, and testimonials.",
            code: `# Use WordPress, Wix, or custom HTML/CSS.`
          },
          {
            title: "Blogging & Thought Leadership",
            detail: "Share insights, tutorials, and industry news to build authority.",
            code: `# Publish on Medium, LinkedIn, or your own blog.`
          }
        ],
        resources: [
          { label: "LinkedIn Tips", url: "https://www.linkedin.com/pulse/ultimate-linkedin-profile-optimization-checklist-2022-melonie-dodaro/" },
          { label: "WordPress Portfolio Guide", url: "https://wordpress.com/go/website-building/portfolio-website/" }
        ]
      },
      {
        name: "Freelancing or Agency Work (Fiverr, Upwork, Client Pitching)",
        description: "Start a freelance career or join an agency. Learn about platforms, client acquisition, and project management.",
        subtopics: [
          {
            title: "Freelance Platforms",
            detail: "Sign up on Fiverr, Upwork, or Freelancer to find clients and projects.",
            code: `# Create a compelling profile and portfolio.`
          },
          {
            title: "Client Pitching & Proposals",
            detail: "Write effective proposals, set rates, and negotiate contracts.",
            code: `# Personalize pitches and highlight results.`
          },
          {
            title: "Project Management",
            detail: "Use tools like Trello, Asana, or ClickUp to manage tasks and deadlines.",
            code: `# Track deliverables and communicate clearly.`
          }
        ],
        resources: [
          { label: "Upwork Academy", url: "https://www.upwork.com/resources/academy" },
          { label: "Fiverr Learn", url: "https://www.fiverr.com/learn" }
        ]
      },
      {
        name: "Stay Updated with Trends (AI in Marketing, Voice SEO, Algorithm Updates)",
        description: "Digital marketing evolves rapidly. Stay updated with trends like AI, voice search, and algorithm changes.",
        subtopics: [
          {
            title: "AI & Automation in Marketing",
            detail: "Leverage AI tools for content creation, personalization, and analytics.",
            code: `# Use ChatGPT, Jasper, or SurferSEO for content.`
          },
          {
            title: "Voice Search & SEO",
            detail: "Optimize for voice queries and featured snippets.",
            code: `# Use conversational keywords and FAQ schema.`
          },
          {
            title: "Algorithm Updates",
            detail: "Monitor Google and social platform algorithm changes to adapt strategies.",
            code: `# Follow Search Engine Journal and Moz for updates.`
          }
        ],
        resources: [
          { label: "Search Engine Journal", url: "https://www.searchenginejournal.com/" },
          { label: "Moz Blog", url: "https://moz.com/blog" }
        ]
      }
    ],
    duration: "6-12 months",
    difficulty: "Beginner to Advanced"
  },
  {
    id: 9,
    title: "Game Development & AR/VR Roadmap",
    description: "A comprehensive roadmap for aspiring game developers and AR/VR creators, covering programming, engines, design, 2D/3D, graphics, physics, audio, UI/UX, multiplayer, AR/VR, optimization, publishing, and community.",
    steps: [
      {
        name: "Learn Programming (C# for Unity or C++ for Unreal Engine)",
        description: "Start with a programming language used in game development. C# is used for Unity, C++ for Unreal Engine.",
        subtopics: [
          {
            title: "C# Basics for Unity",
            detail: "Learn variables, data types, control flow, OOP, and Unity-specific scripting.",
            code: `public class Player : MonoBehaviour { void Update() { /* ... */ } }`
          },
          {
            title: "C++ Basics for Unreal Engine",
            detail: "Understand C++ syntax, pointers, classes, and Unreal's API.",
            code: `class AMyActor : public AActor { virtual void Tick(float DeltaTime) override; };`
          },
          {
            title: "Scripting Patterns",
            detail: "Learn common scripting patterns for game logic, events, and state machines.",
            code: `// State machine for player states`
          }
        ],
        resources: [
          { label: "Unity C# Scripting", url: "https://learn.unity.com/project/beginner-scripting" },
          { label: "Unreal C++ Docs", url: "https://docs.unrealengine.com/5.0/en-US/programming-and-scripting-in-unreal-engine/" }
        ]
      },
      {
        name: "Master Game Engines (Unity or Unreal Engine)",
        description: "Get hands-on with a game engine. Unity is popular for indie and mobile games; Unreal Engine excels in AAA and photorealistic games.",
        subtopics: [
          {
            title: "Unity Editor Basics",
            detail: "Learn the Unity interface, scene hierarchy, inspector, and asset management.",
            code: `// Drag and drop assets, set up scenes.`
          },
          {
            title: "Unreal Engine Editor",
            detail: "Explore Unreal's editor, Blueprints, and C++ integration.",
            code: `// Use Blueprints for visual scripting.`
          },
          {
            title: "Project Setup & Build",
            detail: "Set up new projects, manage assets, and build for different platforms.",
            code: `// Build settings for PC, mobile, or console.`
          }
        ],
        resources: [
          { label: "Unity Learn", url: "https://learn.unity.com/" },
          { label: "Unreal Online Learning", url: "https://www.unrealengine.com/en-US/onlinelearning-courses" }
        ]
      },
      {
        name: "Understand Game Design Principles",
        description: "Game design covers mechanics, dynamics, aesthetics, and player experience. Learn how to design engaging games.",
        subtopics: [
          {
            title: "Core Game Loops",
            detail: "Design the main activities players repeat (e.g., collect, upgrade, fight).",
            code: `// Example: Collect > Upgrade > Battle > Repeat.`
          },
          {
            title: "Balancing & Progression",
            detail: "Balance difficulty, rewards, and progression to keep players engaged.",
            code: `// Use spreadsheets to plan progression curves.`
          },
          {
            title: "Player Feedback & UX",
            detail: "Provide clear feedback (visual, audio, haptics) for player actions.",
            code: `// Flash, sound, or vibration on success/failure.`
          }
        ],
        resources: [
          { label: "Game Design Theory", url: "https://www.gamedesigntheory.com/" },
          { label: "Extra Credits (YouTube)", url: "https://www.youtube.com/user/ExtraCreditz" }
        ]
      },
      {
        name: "Learn 2D & 3D Game Development",
        description: "Understand the differences and workflows for 2D and 3D games, including sprites, models, cameras, and lighting.",
        subtopics: [
          {
            title: "2D Game Development",
            detail: "Work with sprites, tilemaps, 2D physics, and parallax backgrounds.",
            code: `// Unity: SpriteRenderer, Rigidbody2D, Tilemap.`
          },
          {
            title: "3D Game Development",
            detail: "Use 3D models, materials, lighting, and cameras. Learn about transforms and 3D physics.",
            code: `// Unity: MeshRenderer, Rigidbody, Camera.`
          },
          {
            title: "Camera & Lighting Techniques",
            detail: "Set up dynamic cameras and lighting for mood and gameplay.",
            code: `// Cinemachine for Unity, Lighting in Unreal.`
          }
        ],
        resources: [
          { label: "Unity 2D Game Kit", url: "https://learn.unity.com/project/2d-game-kit" },
          { label: "Unreal 3D Game Dev", url: "https://dev.epicgames.com/community/learning/courses/" }
        ]
      },
      {
        name: "Graphics & Animation Basics (Blender, Maya)",
        description: "Learn the basics of 2D/3D graphics, modeling, rigging, and animation using tools like Blender or Maya.",
        subtopics: [
          {
            title: "3D Modeling",
            detail: "Create and export 3D models for use in game engines.",
            code: `// Blender: Export as FBX or OBJ.`
          },
          {
            title: "Rigging & Animation",
            detail: "Rig characters and animate them for movement and actions.",
            code: `// Blender: Armature, keyframes, animation timeline.`
          },
          {
            title: "Importing Assets",
            detail: "Import models, textures, and animations into Unity or Unreal.",
            code: `// Drag FBX into Unity Assets folder.`
          }
        ],
        resources: [
          { label: "Blender Beginner", url: "https://www.blender.org/support/tutorials/" },
          { label: "Maya Learning", url: "https://area.autodesk.com/learning/" }
        ]
      },
      {
        name: "Physics & Math for Games (Vectors, Collisions, Transforms)",
        description: "Understand the math and physics behind movement, collisions, and game mechanics.",
        subtopics: [
          {
            title: "Vectors & Transforms",
            detail: "Use vectors for movement, direction, and positioning in 2D/3D space.",
            code: `Vector3 direction = target.position - player.position;`
          },
          {
            title: "Collisions & Triggers",
            detail: "Detect and respond to collisions and triggers in the game world.",
            code: `void OnCollisionEnter(Collision col) { /* ... */ }`
          },
          {
            title: "Physics Materials & Forces",
            detail: "Apply forces, gravity, and materials for realistic interactions.",
            code: `rigidbody.AddForce(Vector3.up * 10);`
          }
        ],
        resources: [
          { label: "Math for Game Dev", url: "https://www.gamedev.net/tutorials/programming/math-and-physics/" },
          { label: "Unity Physics", url: "https://docs.unity3d.com/Manual/PhysicsSection.html" }
        ]
      },
      {
        name: "Audio Design & Integration",
        description: "Add sound effects, music, and voiceovers to enhance immersion and feedback.",
        subtopics: [
          {
            title: "Audio Asset Creation",
            detail: "Create or source sound effects and music for your game.",
            code: `// Use Audacity or FL Studio for editing audio.`
          },
          {
            title: "Audio Integration",
            detail: "Import and trigger audio in Unity or Unreal using audio sources and cues.",
            code: `AudioSource.PlayClipAtPoint(clip, position);`
          },
          {
            title: "Adaptive & Spatial Audio",
            detail: "Implement 3D audio, reverb zones, and adaptive music.",
            code: `// Unity: AudioMixer, Unreal: Sound Cues.`
          }
        ],
        resources: [
          { label: "Unity Audio", url: "https://learn.unity.com/tutorial/audio" },
          { label: "Unreal Audio", url: "https://docs.unrealengine.com/5.0/en-US/audio-in-unreal-engine/" }
        ]
      },
      {
        name: "Scripting & Game Logic Implementation",
        description: "Write scripts to control gameplay, events, and interactions.",
        subtopics: [
          {
            title: "Game Loop & State Management",
            detail: "Implement the main game loop, manage states (menu, play, pause, game over).",
            code: `// Use enums and switch statements for states.`
          },
          {
            title: "Event Systems",
            detail: "Use events and delegates to trigger actions and communicate between objects.",
            code: `public event Action OnPlayerDeath;`
          },
          {
            title: "AI & Pathfinding",
            detail: "Implement basic AI behaviors and pathfinding (A*, NavMesh).",
            code: `// Unity: NavMeshAgent, Unreal: Behavior Trees.`
          }
        ],
        resources: [
          { label: "Unity Scripting", url: "https://docs.unity3d.com/Manual/CreatingAndUsingScripts.html" },
          { label: "Unreal Gameplay", url: "https://docs.unrealengine.com/5.0/en-US/gameplay-scripting-in-unreal-engine/" }
        ]
      },
      {
        name: "UI/UX in Games (Menus, HUDs, Controls)",
        description: "Design and implement user interfaces for menus, HUDs, and controls.",
        subtopics: [
          {
            title: "Menu Systems",
            detail: "Create main menus, pause screens, and settings panels.",
            code: `// Unity: Canvas, UI Buttons. Unreal: UMG Widgets.`
          },
          {
            title: "HUD & In-Game UI",
            detail: "Display health, score, inventory, and other game data.",
            code: `// Use sliders, text, and icons for feedback.`
          },
          {
            title: "Input & Controls",
            detail: "Implement keyboard, mouse, touch, and controller support.",
            code: `// Unity: Input System, Unreal: Input Mapping.`
          }
        ],
        resources: [
          { label: "Unity UI Toolkit", url: "https://docs.unity3d.com/Manual/UI.html" },
          { label: "Unreal UMG", url: "https://docs.unrealengine.com/5.0/en-US/unreal-motion-graphics-umg-ui-designer-in-unreal-engine/" }
        ]
      },
      {
        name: "Multiplayer & Networking Basics",
        description: "Add multiplayer features and networked gameplay using built-in or third-party solutions.",
        subtopics: [
          {
            title: "Networking Concepts",
            detail: "Understand client-server, peer-to-peer, and authoritative server models.",
            code: `// Use Photon, Mirror (Unity), or Unreal Networking.`
          },
          {
            title: "Syncing State & RPCs",
            detail: "Synchronize player state, positions, and actions across the network.",
            code: `// Use RPCs and network variables.`
          },
          {
            title: "Matchmaking & Lobbies",
            detail: "Implement matchmaking, lobbies, and player authentication.",
            code: `// Use PlayFab, Steamworks, or custom solutions.`
          }
        ],
        resources: [
          { label: "Unity Multiplayer", url: "https://docs-multiplayer.unity3d.com/" },
          { label: "Unreal Networking", url: "https://docs.unrealengine.com/5.0/en-US/networking-in-unreal-engine/" }
        ]
      },
      {
        name: "Mobile & Cross-Platform Development",
        description: "Build games for mobile, PC, console, and web. Learn about platform-specific requirements and optimizations.",
        subtopics: [
          {
            title: "Mobile Game Development",
            detail: "Optimize for touch controls, screen sizes, and mobile performance.",
            code: `// Unity: Mobile build settings, input handling.`
          },
          {
            title: "Cross-Platform Builds",
            detail: "Export games to multiple platforms (iOS, Android, PC, WebGL, consoles).",
            code: `// Use platform-specific APIs and conditional compilation.`
          },
          {
            title: "Platform Services Integration",
            detail: "Integrate leaderboards, achievements, and in-app purchases.",
            code: `// Google Play Services, Apple Game Center.`
          }
        ],
        resources: [
          { label: "Unity Mobile", url: "https://learn.unity.com/course/mobile-game-development" },
          { label: "Unreal Cross-Platform", url: "https://docs.unrealengine.com/5.0/en-US/platforms/" }
        ]
      },
      {
        name: "Version Control (Git, GitHub)",
        description: "Use version control to manage code, assets, and collaboration.",
        subtopics: [
          {
            title: "Git Basics",
            detail: "Learn git commands: clone, commit, push, pull, branch, merge.",
            code: `git init\ngit add .\ngit commit -m 'Initial commit'`
          },
          {
            title: "Collaboration & Branching",
            detail: "Work with teams using branches, pull requests, and code reviews.",
            code: `git checkout -b feature/awesome-feature`
          },
          {
            title: "Large File Storage (LFS)",
            detail: "Use Git LFS for managing large binary assets (models, audio, textures).",
            code: `git lfs track '*.psd'`
          }
        ],
        resources: [
          { label: "GitHub Docs", url: "https://docs.github.com/en/get-started/quickstart" },
          { label: "Git LFS", url: "https://git-lfs.github.com/" }
        ]
      },
      {
        name: "Intro to AR/VR Concepts & Devices (Oculus, HoloLens)",
        description: "Learn the basics of augmented and virtual reality, device types, and user experience considerations.",
        subtopics: [
          {
            title: "AR vs VR vs MR",
            detail: "Understand the differences between Augmented, Virtual, and Mixed Reality.",
            code: `// AR overlays digital on real world; VR is fully immersive.`
          },
          {
            title: "Popular Devices",
            detail: "Explore devices like Oculus Quest, HoloLens, HTC Vive, and Magic Leap.",
            code: `// Compare device specs and SDKs.`
          },
          {
            title: "User Experience in AR/VR",
            detail: "Design for comfort, accessibility, and immersion in AR/VR apps.",
            code: `// Avoid motion sickness, use intuitive controls.`
          }
        ],
        resources: [
          { label: "Unity XR", url: "https://docs.unity3d.com/Manual/XR.html" },
          { label: "Microsoft Mixed Reality", url: "https://docs.microsoft.com/en-us/windows/mixed-reality/" }
        ]
      },
      {
        name: "Build AR Apps (ARCore, ARKit, Vuforia)",
        description: "Create augmented reality apps using ARCore (Android), ARKit (iOS), or Vuforia (cross-platform).",
        subtopics: [
          {
            title: "ARCore & ARKit Basics",
            detail: "Set up AR projects, track planes, and place virtual objects in real space.",
            code: `// Unity: AR Foundation package.`
          },
          {
            title: "Image & Object Tracking",
            detail: "Detect and track images, objects, and surfaces for interactive AR experiences.",
            code: `// Vuforia: Image targets, object targets.`
          },
          {
            title: "AR UI & Interactions",
            detail: "Design intuitive AR interfaces and interactions.",
            code: `// Use gestures, voice, and gaze controls.`
          }
        ],
        resources: [
          { label: "AR Foundation", url: "https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.0/manual/index.html" },
          { label: "Vuforia Dev Portal", url: "https://developer.vuforia.com/" }
        ]
      },
      {
        name: "Build VR Apps (Unity XR, SteamVR, OpenXR)",
        description: "Develop virtual reality experiences using Unity XR, SteamVR, or OpenXR for various devices.",
        subtopics: [
          {
            title: "Unity XR & OpenXR",
            detail: "Set up VR projects, configure XR plugins, and deploy to headsets.",
            code: `// Unity: XR Interaction Toolkit, OpenXR plugin.`
          },
          {
            title: "VR Interactions & Locomotion",
            detail: "Implement hand tracking, teleportation, and interaction systems.",
            code: `// Use controllers, hand gestures, gaze.`
          },
          {
            title: "Performance & Comfort",
            detail: "Optimize VR apps for high frame rates and user comfort.",
            code: `// Reduce latency, optimize assets.`
          }
        ],
        resources: [
          { label: "Unity VR Dev", url: "https://learn.unity.com/course/vr-development" },
          { label: "OpenXR Docs", url: "https://www.khronos.org/openxr/" }
        ]
      },
      {
        name: "Performance Optimization & Debugging",
        description: "Optimize game performance and debug issues for smooth gameplay.",
        subtopics: [
          {
            title: "Profiling & Bottlenecks",
            detail: "Use profilers to identify and fix CPU, GPU, and memory bottlenecks.",
            code: `// Unity Profiler, Unreal Insights.`
          },
          {
            title: "Asset Optimization",
            detail: "Compress textures, reduce poly count, and optimize audio for faster loads.",
            code: `// Use texture atlases, LODs, and audio compression.`
          },
          {
            title: "Debugging Tools",
            detail: "Use breakpoints, logs, and in-engine debugging tools.",
            code: `Debug.Log("Player position: " + player.transform.position);`
          }
        ],
        resources: [
          { label: "Unity Optimization", url: "https://learn.unity.com/tutorial/optimizing-your-game" },
          { label: "Unreal Debugging", url: "https://docs.unrealengine.com/5.0/en-US/debugging-and-optimization-in-unreal-engine/" }
        ]
      },
      {
        name: "Monetization & Game Publishing (Steam, Play Store, App Store)",
        description: "Learn how to monetize and publish your games on various platforms.",
        subtopics: [
          {
            title: "Monetization Models",
            detail: "Explore premium, freemium, ads, and in-app purchase models.",
            code: `// Choose the right model for your game type.`
          },
          {
            title: "Publishing Process",
            detail: "Prepare builds, create store listings, and submit to Steam, Play Store, or App Store.",
            code: `// Follow platform guidelines for submission.`
          },
          {
            title: "Post-Launch Updates",
            detail: "Plan for bug fixes, content updates, and community feedback.",
            code: `// Use analytics to guide updates.`
          }
        ],
        resources: [
          { label: "Steamworks Docs", url: "https://partner.steamgames.com/doc" },
          { label: "Google Play Console", url: "https://play.google.com/console/about/" }
        ]
      },
      {
        name: "Game Marketing & Community Building",
        description: "Promote your game and build a loyal community of players.",
        subtopics: [
          {
            title: "Marketing Strategies",
            detail: "Use social media, influencers, trailers, and press releases to promote your game.",
            code: `// Create a marketing plan and timeline.`
          },
          {
            title: "Community Engagement",
            detail: "Engage with players on Discord, Reddit, and forums. Gather feedback and foster loyalty.",
            code: `// Host events, AMAs, and giveaways.`
          },
          {
            title: "Press Kits & Outreach",
            detail: "Prepare press kits and reach out to journalists and streamers.",
            code: `// Include screenshots, trailers, and key info.`
          }
        ],
        resources: [
          { label: "Indie Game Marketing", url: "https://www.gamasutra.com/blogs/ChrisZukowski/20210113/375210/Indie_Game_Marketing_2021.php" },
          { label: "Discord Game Dev", url: "https://discord.com/invite/gamedev" }
        ]
      },
      {
        name: "Create Portfolio & GitHub Projects",
        description: "Showcase your work with a portfolio site and open-source projects.",
        subtopics: [
          {
            title: "Portfolio Website",
            detail: "Build a site to display your games, AR/VR apps, and skills.",
            code: `// Use WordPress, Wix, or custom HTML/CSS.`
          },
          {
            title: "GitHub Repositories",
            detail: "Host code, assets, and documentation for your projects.",
            code: `// Use README files and project boards.`
          },
          {
            title: "Demo Videos & Playables",
            detail: "Record gameplay videos and provide downloadable builds.",
            code: `// Use OBS Studio for recording demos.`
          }
        ],
        resources: [
          { label: "Itch.io Portfolio", url: "https://itch.io/docs/creators/portfolio" },
          { label: "GitHub Pages", url: "https://pages.github.com/" }
        ]
      },
      {
        name: "Participate in Game Jams & Dev Communities",
        description: "Join game jams and communities to learn, network, and build your portfolio.",
        subtopics: [
          {
            title: "Game Jams",
            detail: "Participate in events like Global Game Jam, Ludum Dare, and itch.io jams.",
            code: `// Build a game in 48-72 hours with a theme.`
          },
          {
            title: "Online Communities",
            detail: "Join forums, Discord servers, and social groups for support and collaboration.",
            code: `// Share progress, ask questions, and get feedback.`
          },
          {
            title: "Showcasing & Feedback",
            detail: "Share your games, get feedback, and iterate for improvement.",
            code: `// Post on Reddit, Twitter, and game dev sites.`
          }
        ],
        resources: [
          { label: "Global Game Jam", url: "https://globalgamejam.org/" },
          { label: "Ludum Dare", url: "https://ldjam.com/" }
        ]
      }
    ],
    duration: "8-18 months",
    difficulty: "Intermediate to Advanced"
  }
];

export const RoadmapsPage = (): JSX.Element => {
  const [selectedStep, setSelectedStep] = React.useState<null | any>(null);
  const [expandedRoadmaps, setExpandedRoadmaps] = React.useState<{ [id: number]: boolean }>({});

  const toggleExpand = (id: number) => {
    setExpandedRoadmaps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-900/20 dark:via-gray-800 dark:to-indigo-900/20 transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/entertainment"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Workspace</span>
            </Link>
          </div>

          {/* Hero Header (formal, but original colors) */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl mb-8 border-4 border-white dark:border-gray-900 animate-fade-in">
              <Map className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white font-serif mb-4 leading-tight tracking-tight animate-fade-in-slow">
              Learning Roadmaps
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 animate-fade-in-delay">
              Structured, professional learning paths to guide your journey across technology, design, business, and more.
            </p>
            <div className="flex justify-center">
              <a href="#roadmaps-list" className="inline-block px-8 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200 text-lg animate-fade-in-delay2">
                Explore Roadmaps
              </a>
            </div>
          </div>

          {/* Roadmaps Grid */}
          <div id="roadmaps-list" className="grid gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {roadmaps.map((roadmap) => {
              const expanded = expandedRoadmaps[roadmap.id];
              const stepsToShow = expanded ? roadmap.steps : roadmap.steps.slice(0, 6);
              return (
                <div
                  key={roadmap.id}
                  className="relative bg-white dark:bg-gray-700 rounded-3xl p-10 shadow-2xl border border-gray-200 dark:border-gray-600 transition-all duration-300 group animate-fade-in-card cursor-pointer"
                  style={{ perspective: '1200px' }}
                >
                  {/* 3D Card Hover Effect */}
                  <div className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-3xl group-hover:rotate-x-3 group-hover:rotate-y-2" style={{ willChange: 'transform' }}>
                    {/* Featured badge for flagship roadmaps */}
                    {roadmap.id === 1 && (
                      <span className="absolute top-6 right-6 bg-indigo-600 text-white font-bold px-4 py-1 rounded-full shadow-md text-xs uppercase tracking-wider z-10">Featured</span>
                    )}
                    <div className="flex flex-col gap-6 h-full">
                  {/* Roadmap Info */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-serif mb-2 group-hover:underline transition">{roadmap.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">{roadmap.description}</p>
                    {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-4 py-2 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{roadmap.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-4 py-2 rounded-full">
                        <Star className="w-4 h-4" />
                        <span className="font-medium">{roadmap.difficulty}</span>
                      </div>
                    </div>
                  </div>
                      {/* Steps Timeline */}
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Learning Path</h4>
                        <ol className="relative border-l-4 border-blue-200 dark:border-blue-800 pl-6 space-y-6">
                          {stepsToShow.map((step, index) => (
                            <li key={index} className="group flex items-start gap-4 animate-fade-in-step">
                              {/* 3D Step Marker */}
                              <span
                                className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-lg border-4 border-white dark:border-gray-900 shadow-md mt-1"
                                style={{
                                  background: 'radial-gradient(circle at 30% 30%, #60a5fa 70%, #2563eb 100%)',
                                  boxShadow: '0 4px 16px 0 rgba(37,99,235,0.25), 0 1.5px 0 #fff inset',
                                  color: '#fff',
                                }}
                              >
                            {index + 1}
                              </span>
                              <button
                                className="text-left flex-1 text-blue-900 dark:text-blue-200 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                                onClick={() => setSelectedStep(step)}
                              >
                                {step.name}
                              </button>
                            </li>
                          ))}
                          {roadmap.steps.length > 6 && (
                            <li className="mt-2">
                              <button
                                className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold underline hover:text-indigo-800 dark:hover:text-indigo-200 transition"
                                onClick={() => toggleExpand(roadmap.id)}
                              >
                                {expanded ? 'Show less' : `Show all steps (${roadmap.steps.length})`}
                              </button>
                            </li>
                          )}
                        </ol>
                          </div>
                        </div>
                    </div>
                  </div>
              );
            })}
                </div>

          {/* Step Detail Modal */}
          {selectedStep && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in-modal">
              <div className="bg-white dark:bg-gray-900 w-full h-full max-w-2xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col items-stretch relative overflow-y-auto border-4 border-blue-200 dark:border-blue-800 animate-fade-in-modal-card"
                style={{
                  transform: 'perspective(1200px) scale(1) translateZ(0)',
                  animation: 'modalPop3D 0.4s cubic-bezier(0.23,1,0.32,1)',
                }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl z-10"
                  onClick={() => setSelectedStep(null)}
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="p-6 md:p-10 flex-1 flex flex-col overflow-y-auto w-full">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700 dark:text-blue-300 font-serif">{selectedStep.name}</h2>
                  {selectedStep.description && (
                    <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">{selectedStep.description}</p>
                  )}
                  {selectedStep.subtopics && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Key Subtopics</h3>
                      <ul className="space-y-6">
                        {selectedStep.subtopics.map((sub: any, i: number) => (
                          <li key={i} className="mb-2">
                            <div className="font-medium text-blue-700 dark:text-blue-300 mb-1">{sub.title}</div>
                            <div className="text-gray-700 dark:text-gray-200 mb-2">{sub.detail}</div>
                            {sub.code && (
                              <pre className="bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-xl p-4 text-base overflow-x-auto text-gray-800 dark:text-gray-100 border border-blue-200 dark:border-blue-700 shadow-inner mb-2"><code>{sub.code}</code></pre>
                            )}
                          </li>
                        ))}
                      </ul>
              </div>
                  )}
                  {selectedStep.code && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Reference Code Example</h4>
                      <pre className="bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-xl p-4 text-base overflow-x-auto text-gray-800 dark:text-gray-100 border border-blue-200 dark:border-blue-700 shadow-inner"><code>{selectedStep.code}</code></pre>
                    </div>
                  )}
                  {selectedStep.resources && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Further Reading</h4>
                      <ul className="space-y-1">
                        {selectedStep.resources.map((res: any, i: number) => (
                          <li key={i}>
                            <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200 font-medium">{res.label}</a>
                          </li>
                        ))}
                      </ul>
          </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-20 text-center animate-fade-in-cta">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-white shadow-2xl border-2 border-indigo-200 dark:border-indigo-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                Start Your Learning Journey Today!
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Choose a roadmap that aligns with your goals and begin your structured learning path.
              </p>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
};
