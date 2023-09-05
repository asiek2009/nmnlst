function textLoading() {
    const bannerHeader = document.querySelectorAll('.banner_header_content')[0];
    const descriptionText = document.querySelectorAll('.description_container')[0];
    bannerHeader.classList.add('loaded');
    descriptionText.classList.add('loaded');
}

export { textLoading };