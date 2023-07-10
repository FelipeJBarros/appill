export default function translate(value) {
    switch(value) {
        case 'PILL':
            return 'pílula';
        case 'LIQUID':
            return 'ml';
        case 'ALL_DAYS':
            return 'Todos os dias';
        case 'EVEN_DAYS':
            return 'Em dias pares';
        case 'ODD_DAYS':
            return 'Em dias ímpares';
        default:
            return value;
    }
}