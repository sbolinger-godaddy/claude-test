/**
 * A simple counter implementation with TypeScript
 */
export function setupCounter(element: HTMLElement, button: HTMLElement): void {
  let counter = 0;
  
  const setCounter = (count: number): void => {
    counter = count;
    element.innerHTML = `Count: ${counter}`;
  };
  
  // Initialize counter display
  setCounter(0);
  
  // Set up click handler
  button.addEventListener('click', () => setCounter(counter + 1));
}
