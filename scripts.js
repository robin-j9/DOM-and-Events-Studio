// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    let takeoff = document.getElementById('takeoff');
    let landing = document.getElementById('landing');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let missionAbort = document.getElementById('missionAbort');
    let up = document.getElementsByTagName('button')[0];
    let down = document.getElementsByTagName('button')[1];
    let right = document.getElementsByTagName('button')[2];
    let left = document.getElementsByTagName('button')[3];
    let rocket = document.getElementById('rocket');
    let y = 0;
    let x = 0;

    takeoff.addEventListener('click', function () {
        let confirmed = confirm('Confirm that the shuttle is ready for takeoff.');
        if (confirmed) {
            flightStatus.textContent = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.textContent = '10000';
        }
    })

    landing.addEventListener('click', function() {
        alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.textContent = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.textContent = '0';
        rocket.style.transform = `translate(0, 0)`;
        x = 0;
        y = 0;
    })

    missionAbort.addEventListener('click', function() {
        let confirmed = confirm('Confirm that you want to abort the mission.');
        if (confirmed) {
            flightStatus.textContent = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.textContent = '0';
        }
        rocket.style.transform = `translate(0, 0)`;
        x = 0;
        y = 0;
    })

    up.addEventListener('click', function() {
        if (y >= 0) {
            rocket.style.transform = `translate(${x}px, ${y-10}px)`;
            y -= 10;
            spaceShuttleHeight.textContent = String(Number(spaceShuttleHeight.textContent) + 10000);    
        }
    })

    down.addEventListener('click', function() {
        if (y <= 250) {
            rocket.style.transform = `translate(${x}px, ${y+10}px)`;
            y += 10;
            spaceShuttleHeight.textContent = String(Number(spaceShuttleHeight.textContent) - 10000);    
        }
    })

    left.addEventListener('click', function() {
        if (x >= -230) {
            rocket.style.transform = `translate(${x-10}px, ${y}px)`;
            x -= 10;    
        }
    })

    right.addEventListener('click', function() {
        if (x <= 230) {
            rocket.style.transform = `translate(${x+10}px, ${y}px)`;
            x += 10;    
        }
    })
}

window.onload = init;