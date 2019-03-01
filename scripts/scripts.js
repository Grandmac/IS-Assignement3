const ulStart = '<ul>';
const ulEnd = '</ul>';
const liStart = '<li>';
const liEnd = '</li>';

const org1_depts = [
  {
    name: 'accounting',
    children: [
      {name: 'accounting payable', children: []},
      {name: 'accounting receivable', children: []},
    ],
  },
  {
    name: 'finance',
    children: [],
  },
]

const org2_depts = [
  {
    name: 'accounting',
    children: [
      {name: 'accounting payable', children: []},
      {
        name: 'accounting receivable',
        children: [{name: 'cash', children: []}, {name: 'check', children: []}],
      },
    ],
  },
  {
    name: 'finance',
    children: [{name: 'investment', children: []}],
  },
]

function functionPrintDepts(depts) {
  let list = ulStart;

  depts.forEach((dept) => { // for each element in the array, dept is the current element
    list += liStart;
    list += dept.name;
    list += liEnd;

    if (dept.children.length > 0) {
      list += functionPrintDepts(dept.children); // if children count > 0, recursive call
    }
  });

  return list + ulEnd;
}

function renderList(selector, depts) {

  let divElement = document.querySelector(selector);

  divElement.innerHTML = functionPrintDepts(depts);

}

function renderLists() {

  // render first list
  renderList('#organizationalChart1', org1_depts);

  // render second list
  renderList('#organizationalChart2', org2_depts);

}

renderLists();