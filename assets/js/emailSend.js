
    document.querySelector('.wptb-form').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const subject = document.querySelector('input[name="subject"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
        const mailTo ="info.vibecreationsmedia@gmail.com";
        const data = { name, email, subject, message, mailTo };

        try {
            const response = await fetch('https://zenzap-mail-service.vercel.app/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            alert('Error occurred while sending email');
        }
    });

