// Define a simple data model
const data = {
  counter: 0,
};

// Render function to generate Virtual DOM
function render() {
  return `
    <div>
      <h1>Counter: ${data.counter}</h1>
      <button onclick="increment()">Increment</button>
      <button onclick="reset()">Reset</button>
    </div>
  `;
}

// Update the data model and trigger re-rendering
function increment() {
  data.counter++;
  renderToDOM();
}

function reset() {
  data.counter = 0;
  renderToDOM();
}

// Render the Virtual DOM to the "app" element
function renderToDOM() {
  const appElement = document.getElementById('app');
  const currentVirtualDOM = render();
  appElement.innerHTML = currentVirtualDOM;
}

// Initial rending
renderToDOM();