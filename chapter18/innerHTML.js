const para1 = document.getElementsByTagName('p')[0];
para1.textContent;
para1.innerHTML;
para1.textContent = "Modified HTML file";
para1.innerHTML = "Modified HTML file";

const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = 'I was created dynamically!';
p2.textContent = 'I was also created dynamically!';

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];
parent.insertBefore(p1, firstChild);
parent.appendChild(p2);