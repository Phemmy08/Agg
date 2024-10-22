document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get scores from the select elements
    const mathsScore = parseInt(document.getElementById('maths').value);
    const englishScore = parseInt(document.getElementById('english').value);
    const others1Score = parseInt(document.getElementById('others1').value);
    const others2Score = parseInt(document.getElementById('others2').value);
    const others4Score = parseInt(document.getElementById('others4').value);

    // Get the UTME score
    const utmeScore = parseInt(document.getElementById('jamb').value);

    // Calculate O'level average
    const oLevelAverage = (mathsScore + englishScore + others1Score + others2Score + others4Score) / 5;

    // Calculate weighted scores
    const utmeWeighted = (utmeScore / 400) * 75;
    const oLevelWeighted = (oLevelAverage / 100) * 25;

    // Calculate the aggregate
    const aggregate = utmeWeighted + oLevelWeighted;

    // Display the result
    document.getElementById('aggregateResult').innerText = aggregate.toFixed(2) + '%';
    document.getElementById('resultSection').style.display = 'block'; // Show result section

    // Update the WhatsApp button with your number and a pre-filled message
    const whatsappMessage = `Hello, I just calculated my aggregate score and it is ${aggregate.toFixed(2)}%.`;
    const whatsappNumber = '2348109972243'; // Replace with your WhatsApp number
    document.getElementById('whatsappButton').onclick = function() {
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`);
    };
});
