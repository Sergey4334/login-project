function notifyContainer() { 
 return document.querySelector('.notify-container');
}

function notifyContainerTemplate() {
  return `
    <div class="notify-container" style="position: fixed; top: 10px; right: 10px;z-index: 99;"></div>
  `;
}

function createNotifyContainer() {
  const template = notifyContainerTemplate();
  document.body.insertAdjacentHTML('afterbegin', template);
}

function alertTemplate(msg, className, index) {
  return `
    <div class="alert ${className}" date-index="${index}">
      ${msg}
    </div>
  `;
}

function getAlertIndex() {
  return document.querySelectorAll('.notify-container .alert').length;
}

/**
 * Function notify. Show notifycation message.
 * @param {Object} settings 
 * @param {String} settings.msg 
 * @param {String} settings.className
 * @param {Number} settings.timeout
 */
export function notify({ msg = 'Info message', className = 'alert-info', timeout = 2000 } = {}) { 
  if (!notifyContainer()) {
    createNotifyContainer();
  }
  const index = getAlertIndex();
  const template = alertTemplate(msg, className, index);
  const container = notifyContainer();
  container.insertAdjacentHTML('beforeend', template);

  setTimeout(() => closeNotify(index), timeout);
}


export function closeNotify(index) {
  let alert;

  if (index === undefined) {
    alert = document.querySelector('.notify-container .alert');
  } else {
    alert = document.querySelector(`.notify-container .alert[date-index="${index}"]`);
  }

  if (!alert) {
    console.warn('Alert not found');
    return;
  }
  const container = notifyContainer();
  container.removeChild(alert);
}