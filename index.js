function removeFirstWithClass(className) {
  var target = document.getElementsByClassName(className)[0];

  if (!target) return;

  var parentElement = target.parentElement;

  target.remove();

  if (parentElement.childElementCount === 0) parentElement.remove();
}

removeFirstWithClass("Header-link notification-indicator");
removeFirstWithClass("news");
