const scriptURL = 'https://script.google.com/macros/s/AKfycbyEod6_zsylf1LR2MTP8ZbDhGxbD9gRHIbTKO85EnNDFobLaaw0Q3D-w6goTWFKzKf4/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            $("#form_alerts").html("<div style='padding: 1rem;'>message sent successfully. You will get a mail from us within 24 hours!</div> <button class='ok-btn' type='button'>Ok</button>");
            $('#name').prop('readonly', true);
            $('#email').prop('readonly', true);
            $('#message').prop('readonly', true);
            $('.send-btn').prop('disabled', true);
            $('.ok-btn').click(function() {
                $('#form_alerts').hide(100);
            });
        })
        .catch(error => console.error('Error!', error.message))
})