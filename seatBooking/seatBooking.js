const theaterSeats = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
]

function renderSeats(){
    const seatingChart = document.getElementById('seating-chart');
    seatingChart.innerHTML = ''; // Clear existing seats

    for(let row = 0; row < theaterSeats.length; row++){
        for(let col = 0; col < theaterSeats[row].length; col++){
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.classList.add(theaterSeats[row][col] === 'O' ? 'available' : 'booked');
            seat.textContent = `${String.fromCharCode(65 + row)}${col + 1}`;
            seat.onclick = () => bookSeat(row, col);
            seatingChart.appendChild(seat);
        }
    }
}

window.onload = renderSeats;

function bookSeat(row, col){
    if(theaterSeats[row][col] === 'O'){
        theaterSeats[row][col] = 'X';
        updateSeatStatus(row, col, 'booked');
        alert(`Seat ${String.fromCharCode(65+ row)}${col+1} is booked.`);
    }else {
        alert(`Seat ${String.fromCharCode(65+ row)}${col+1} is already taken.`)
    }
}
function updateSeatStatus(row, col, status){
    const seats = document.getElementsByClassName('seat');
    const index = row * 3 + col;
    seats[index].classList.remove('available', 'booked');
    seats[index].classList.add(status);
}
function bookRandomSeat() {
    const availableSeats = [];

    for(let row = 0;row < theaterSeats.length; row++){
        for(let col = 0;col < theaterSeats[row].length; col++){
            if (theaterSeats[row][col] === 'O'){
                availableSeats.push({row, col});
            }
        }
    }
    if (availableSeats.length > 0){
        const randomIndex = Math.floor(Math.random() * availableSeats.length);
        const { row, col} = availableSeats[randomIndex];
        bookSeat(row, col);
    } else {
        alert('All seats are already booked.')
    }
}