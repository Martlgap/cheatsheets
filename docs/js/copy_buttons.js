// adds a copy button to the integrated toolbar of prismjs
function putCopyButtons() {
  const copyButtonLabel = "Copy";

  // use a class selector if available
  let blocks = document.querySelectorAll(".toolbar");

  blocks.forEach((block) => {
    // only add a button if browser supports Clipboard API
    if (navigator.clipboard) {
      let button = document.createElement("button");
      button.innerText = copyButtonLabel;
      button.addEventListener("click", copyCode);
      block.appendChild(button);
    }
  });

  // copies the code from the <pre> element
  async function copyCode(event) {
    const button = event.srcElement;
    const pre = button.parentElement.previousSibling;
    let code = pre.querySelector("code");
    let text = code.innerText;
    await navigator.clipboard.writeText(text);
    button.innerText = "Copied";

    setTimeout(() => {
      button.innerText = copyButtonLabel;
    }, 1000);
  }
}
// waits for prismjs before insert buttons into html
document.addEventListener(
  "DOMContentLoaded",
  function () {
    putCopyButtons();
  },
  false
);
