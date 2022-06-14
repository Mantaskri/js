// SWITCH salygu palyginimas (panasiai kaip if())

const day = 1;

switch (day) {
    case 1:
        console.log('Monday');
        break;

    case 2:
        console.log('Tuesday');
        break;
        
    case 3:
        console.log('Wednesday');
        break;

    case 4:
        console.log('Thursday');
        break;
    
    case 5:
        console.log('Friday');
        break;
            
    case 6:
        console.log('Saturday');
        break;

    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('No such day in a week');
        break;
}

const weekday = 4;

switch (weekday) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('workday');
        break;

    case 6:
    case 7:
        console.log('weekend');
        break;

    default:
        console.log('No such day in a week');
        break;
}

if (weekday === 1
    || weekday === 2
    || weekday === 3
    || weekday === 4
    || weekday === 5) {
    console.log('workday');
} else if (weekday === 6
    || weekday === 7) {
    console.log('weekend');
} else {
    console.log('No such day in a week');
}
// Pavyzdys su stotelem, kai naudojam switch :

console.log('----------------');
const stotele = 'Lvovo';

switch (stotele) {
    case 'Parko':
        console.log('Parko');

    case 'Geniu':
        console.log('Geniu');

    case 'Tremtiniu':
        console.log('Tremtiniu');

    case 'Rudens':
        console.log('Rudens');

    case 'Mindaugo':
        console.log('Mindaugo');

    case 'Zalias tiltas':
        console.log('Zalias tiltas');
        break;

    case 'Lvovo':
        console.log('Lvovo');

    case 'Vasara':
        console.log('Vasara');

    case 'Rudens 2':
        console.log('Rudens');

    case 'Tremtiniu 2':
        console.log('Tremtiniu');

    case 'Parko 2':
        console.log('Parko');
        break;
}