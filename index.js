function borderAll(option) {
  let images = document.querySelectorAll('.hmid');

  if (option.activate === true) option.border = '50%';
  else option.border = '0%';

  images.forEach((image) => {
    image.style.borderRadius = `${option.border}`;
  });
}

module.exports.hmidborder = borderAll;
