const descriptionContent = document.querySelectorAll('.description_content')[0];
const descriptionText = descriptionContent.innerText;
const readMoreButton = document.querySelectorAll('.description_read-more')[0];

function cutDescription() {
    const cutDescriptionText = descriptionText.substring(0, 79) + '...';
    descriptionContent.innerHTML = cutDescriptionText;
}

function onClickReadMore() {
    descriptionContent.classList.toggle('active');
    if (descriptionContent.classList.contains('active')) {
        readMoreButton.innerText = 'Read Less';
        descriptionContent.innerHTML = descriptionText;
    } else {
        readMoreButton.innerText = 'Read More';
        cutDescription();
    }
}
readMoreButton.addEventListener('click', onClickReadMore);

export { cutDescription };