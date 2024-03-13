const form = document.getElementById("form");
const input = document.getElementById("text-input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const reversed = reverseText();
  const text = (document.createElement("p").textContent = reversed);

  form.after(text);
});

function reverseText() {
  const value = input.value;
  let newString = "";

  for (let i = value.length - 1; i >= 0; i -= 1) {
    newString += value[i];
  }

  return newString;
}
