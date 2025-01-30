

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var ballMessage = cursor.querySelector(".cusor-span");
var images = document.querySelectorAll(".hover-text[data-hover]");
var bg = document.querySelectorAll(".hovered-bg");

var bg1 = document.querySelectorAll(".hovered-bg1");

var bg2 = document.querySelectorAll(".hovered-bg2");

var a = document.querySelectorAll('.link-ancoh');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});


images.forEach(image => {
    image.addEventListener("mouseover", function (){
        ballMessage.innerHTML = image.getAttribute("data-hover")
        ballMessage.classList.add("visible")
    })

        image.addEventListener("mouseout", function (){
         ballMessage.classList.remove("visible")
    })
})

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

bg.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover1');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover1');
  });
})


bg1.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover2');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover2');
  });
})


bg2.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover3');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover3');
  });
})
