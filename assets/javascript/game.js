const mace = document.getElementById('mace');
const obi = document.getElementById('obi');
const luke = document.getElementById('luke');
const maul = document.getElementById('maul');
const sid = document.getElementById('sid');
const vader = document.getElementById('vader');

function game() {

}

function main() {
    mace.addEventListener('click', function() {
        game('mace');
        $('mace').css('opacity', 0);
        console.log('You picked Mace Windu! - ', 'Attack: 75 - ', 'Health: 200')
    })

    obi.addEventListener('click', function() {
        game('obi');
        $('obi').css('opacity', 0);
        console.log('You picked Obi-Wan! - ', 'Attack: 50 - ', 'Health: 250')    
    })

    luke.addEventListener('click', function() {
        game('luke');
        $('luke').css('opacity', 0);
        console.log('You picked Luke Skywalker! - ', 'Attack: 100 - ', 'Health: 300')
    })

    maul.addEventListener('click', function() {
        game('maul');
        $('maul').css('opacity', 0);
        console.log('You engage Darth Maul! - ', 'Attack: 50 - ', 'Health: 150')
    })

    sid.addEventListener('click', function() {
        game('sid');
        $('sid').css('opacity', 0);
        console.log('You engage Darth Sidious! - ', 'Attack: 75 - ', 'Health: 200')    
    })

    vader.addEventListener('click', function() {
        game('vader');
        $('vader').css('opacity', 0);
        console.log('You engage Darth Vader! - ', 'Attack: 75 - ', 'Health: 300')
    })
}

main();