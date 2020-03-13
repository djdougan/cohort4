
class PageManager {

    constructor() {
    };

    createListElement(text = "", elementId = null, className = null) {
        let newElement = document.createElement('li');

        if (elementId !== null) {
            newElement.setAttribute('id', elementId);
        }

        if (className !== null) {
            newElement.classList.add(className);
        }

        if (text !== "") {
            let textNode = document.createTextNode(text);
            newElement.appendChild(textNode);
        }
        newElement.addEventListener('click', function (e) {
            e.target.remove(e.target);

        });
        newElement.dataset.uuid = createUUID();
        return newElement;


        // give list item a unique id;
        function createUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

    };

    getLastListItem(olList) {
        return olList.childNodes[olList.children.length - 1];

    }

    prependElement(element, parent) {
        parent.prepend(element);
    };

    appendElement(element, parent) {
        parent.appendChild(element);
    };


    deleteListElement(parent, uuid) {
        let i = parent.querySelector(`li[data-uuid='${uuid}']`)
        parent.removeChild(i);
    };

}

export default PageManager;