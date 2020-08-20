class PageManager {
  constructor() {}

  createListElement(text = "", elementId = null, className = null) {
    let newElement = document.createElement("li");

    if (elementId !== null) {
      newElement.setAttribute("id", elementId);
    }

    if (className !== null) {
      newElement.classList.add(className);
    }

    if (text !== "") {
      let textNode = document.createTextNode(text);
      newElement.appendChild(textNode);
    }
    newElement.addEventListener("click", function (e) {
      e.target.remove(e.target);
    });

    return newElement;
  }

  getLastListItem(olList) {
    return olList.childNodes[olList.children.length - 1];
  }

  prependElement(element, parent) {
    parent.prepend(element);
  }

  appendElement(element, parent) {
    parent.appendChild(element);
  }

  deleteListElement(parent) {
    const i = document.getElementsByTagName("li");
    if (i.length > 0) parent.removeChild(i[i.length - 1]);
  }
}

export default PageManager;
