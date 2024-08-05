
function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userexp = document.getElementById('userexp').value;

    const submitButton=document.getElementById('submitBtn');


    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = userexp;

    document.getElementById('userInfo').style.display = 'block';
}

function clickSubmit() {
    const feedback = document.getElementById('feedbackText').value;
    if (feedback) {
        submitFeedback();
        alert('Thank you for your valuable feedback');
    } else {
        alert('Please enter your feedback');
    }
}

document.addEventListener('keydown', function(event) {
    const feedback = document.getElementById('feedbackText').value;
    if (event.key === 'Enter') {
        if (feedback) {
            submitFeedback();
            alert('Thank you for your valuable feedback')
        } else {
            alert('Please enter your feedback');
        }
  }
});
