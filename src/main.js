let count = 0;
const addButton = document.querySelector('.addGlass--js');
const removeButton = document.querySelector('.removeGlass--js')
const countChecker = document.querySelector('.counter--js')
const key = new Date(). toISOString().slice(0,10)
const storedCount = localStorage.getItem(key);

if (storedCount !== null) {
  count = parseInt(storedCount);
  countChecker.textContent = count;
}

addButton.addEventListener('click',() => {
count++;
countChecker.textContent = count;
localStorage.setItem(key, count.toString())
});
removeButton.addEventListener('click',() => {
if (count>0) {
  count--;
  countChecker.textContent = count;
  localStorage.setItem(key, count.toString())
}
  });


  
  