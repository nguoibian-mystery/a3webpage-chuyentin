function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

async function loadJSON(url) {
    const response = await fetch(url);
    return response.json();
}

function createFolderButton(content, id) {
    const button = document.createElement('button');
    button.className = 'folder-btn';
    button.onclick = () => toggleVisibility(id);
    button.innerText = content;
    return button;
}

function createFileButton(content, url) {
    const button = document.createElement('button');
    button.className = 'file-btn';
    button.onclick = () => window.open(url, '_blank');
    button.innerText = content;
    return button;
}

function createListItem(content, isFolder = false, id = '', url = '') {
    const li = document.createElement('li');
    if (isFolder) {
        li.appendChild(createFolderButton(content, id));
        const ul = document.createElement('ul');
        ul.id = id;
        ul.className = 'folder-contents hidden';
        li.appendChild(ul);
    } else {
        li.appendChild(createFileButton(content, url));
    }
    return li;
}

function buildStructure(data, parentElement) {
    data.forEach(item => {
        if (item.files) {
            const folder = createListItem(item.name, true, item.id);
            buildStructure(item.files, folder.querySelector('ul'));
            parentElement.appendChild(folder);
        } else if (item.url) {
            const file = createListItem(item.name, false, '', item.url);
            parentElement.appendChild(file);
        }
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadJSON('/json/thuvientailieu.json');
    const tailieuElement = document.querySelector('#tailieu');
    const dethiElement = document.querySelector('#dethi');

    buildStructure(data.tailieu, tailieuElement);
    buildStructure(data.dethi, dethiElement);
});