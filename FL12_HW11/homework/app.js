const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function showTitles(object) {
  let li = '';
  let ul;

  for (let i = 0; i < object.length; i++) {
    if (object[i].folder === true) {
      if (object[i].children !== null) {
        li += '<li>' + object[i].title + showTitles(object[i].children) + '</li>';
      } else {
        li += '<li>' + object[i].title + '</li>';
      }
    } else {
      li += '<li>' + object[i].title + '</li>';
    }
  }

  if (li) {
    ul = '<ul>' + li + '</ul>';
  }

  return ul || '';
}

function createTree(container, obj) {
  container.innerHTML = showTitles(obj);
}

createTree(rootNode, structure);