document.addEventListener('DOMContentLoaded', () => {
    fetch('GPT-skjema.json')
        .then(response => response.json())
        .then(data => {
            const prosjektListe = document.getElementById('prosjekter');
            data.forEach(prosjekt => {
                const li = document.createElement('li');
                li.textContent = `${prosjekt.name} - ${prosjekt.status}`;
                prosjektListe.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('prosjekt-skjema').addEventListener('submit', event => {
    event.preventDefault();

    const prosjekt = {
        name: document.getElementById('navn').value,
        description: document.getElementById('beskrivelse').value,
        startDate: document.getElementById('startdato').value,
        endDate: document.getElementById('sluttdato').value,
        status: document.getElementById('status').value
    };

    fetch('/api/prosjekter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(prosjekt)
    })
    .then(response => response.json())
    .then(data => {
        // Legg til det nye prosjektet i listen
        const li = document.createElement('li');
        li.textContent = `${data.name} - ${data.status}`;
        document.getElementById('prosjekter').appendChild(li);
    })
    .catch(error => console.error('Error:', error));
});
