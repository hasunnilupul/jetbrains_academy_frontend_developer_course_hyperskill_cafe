document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    let reviewTitle, reviewText, reviewName;
    for (const elem of form) {
        if (elem.id === 'reviewTitle') {
            reviewTitle = elem.value;
        }
        if (elem.id === 'reviewText') {
            reviewText = elem.value;
        }
        if (elem.id === 'reviewName') {
            reviewName = elem.value || 'Anonymous';
        }
    }
    const reviewsRow = document.querySelector('#reviewsRow');
    const review = document.createElement('div');
    review.classList.add('col-lg-4', 'col-md-4', 'col-sm-12', 'py-3');
    review.innerHTML = `<div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title fw-bold">${reviewTitle}</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>${reviewText}</p>
                                    <footer class="blockquote-footer text-end">
                                        <i><cite title="Source Title">${reviewName}</cite></i>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>`;
    reviewsRow.appendChild(review);
});