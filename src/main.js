let count = 0;
const addButton = document.querySelector('.addGlass--js');
const removeButton = document.querySelector('.removeGlass--js')
const countChecker = document.querySelector('.counter--js')
let key = new Date(). toLocaleString().slice(0,10)
const storedCount = localStorage.getItem(key);

const setCounterValue = (value) => {
  countChecker.innerHTML = value;
  localStorage.setItem(key, value);
}

setCounterValue(count);

setInterval(() => {
  console.log('tik-tak')
  if (key !== new Date(). toLocaleString().slice(0,10)) {
    key = new Date(). toLocaleString().slice(0,10)
    setCounterValue(0)
    count = 0;
  }
}, 1000*5 );

if (storedCount !== null) {
  count = parseInt(storedCount);
  countChecker.textContent = count;
}

addButton.addEventListener('click',() => {
count++;
countChecker.textContent = count;
localStorage.setItem(key, count.toLocaleString())
});
removeButton.addEventListener('click',() => {
if (count>0) {
  count--;
  countChecker.textContent = count;
  localStorage.setItem(key, count.toLocaleString())
}
  });


  
  