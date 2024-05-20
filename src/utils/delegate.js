export function delegate(box, selector, eventName, handler) {
  box.addEventListener(eventName, function (e) {
    let elem = e.target.closest(selector);
    if (elem !== null && box.contains(elem)) {
      handler.call(elem, e);
    }
  });
}
