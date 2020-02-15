const initialData = {
    cards: {
        'card-1': { id: 'card-1', content: '1', color: '#330000' },
        'card-2': { id: 'card-2', content: '2', color: '#660000' },
        'card-3': { id: 'card-3', content: '3', color: '#990000' },
        'card-4': { id: 'card-4', content: '4', color: '#CC0000' },
        'card-5': { id: 'card-5', content: '5', color: '#FF0000' },
        'card-6': { id: 'card-6', content: '6', color: '#FF3333' },
        'card-7': { id: 'card-7', content: '7', color: '#FF6666' },
        'card-8': { id: 'card-8', content: '8', color: '#FF9999' },
        'card-9': { id: 'card-9', content: '9', color: '#331900' },
        'card-10': { id: 'card-10', content: '10', color: '#663300' },
        'card-11': { id: 'card-11', content: '11', color: '#994C00' },
        'card-12': { id: 'card-12', content: '12', color: '#CC6600' },
        'card-13': { id: 'card-13', content: '13', color: '#FF8000' },
        'card-14': { id: 'card-14', content: '14', color: '#FF9933' },
        'card-15': { id: 'card-15', content: '15', color: '#FFB266' },
        'card-16': { id: 'card-16', content: '16', color: '#FFCC99' },
        'card-17': { id: 'card-17', content: '17', color: '#333300' },
        'card-18': { id: 'card-18', content: '18', color: '#666600' },
        'card-19': { id: 'card-19', content: '19', color: '#999900' },
        'card-20': { id: 'card-20', content: '20', color: '#CCCC00' },
        'card-21': { id: 'card-21', content: '21', color: '#FFFF00' },
        'card-22': { id: 'card-22', content: '22', color: '#FFFF33' },
        'card-23': { id: 'card-23', content: '23', color: '#FFFF66' },
        'card-24': { id: 'card-24', content: '24', color: '#FFFF99' },
        'card-25': { id: 'card-25', content: '25', color: '#193300' },
        'card-26': { id: 'card-26', content: '26', color: '#336600' },
        'card-27': { id: 'card-27', content: '27', color: '#4C9900' },
        'card-28': { id: 'card-28', content: '28', color: '#66CC00' },
        'card-29': { id: 'card-29', content: '29', color: '#80FF00' },
        'card-30': { id: 'card-30', content: '30', color: '#99FF33' },
        'card-31': { id: 'card-31', content: '31', color: '#B2FF66' },
        'card-32': { id: 'card-32', content: '32', color: '#CCFF99' },
        'card-33': { id: 'card-33', content: '33', color: '#003300' },
        'card-34': { id: 'card-34', content: '34', color: '#006600' },
        'card-35': { id: 'card-35', content: '35', color: '#009900' },
        'card-36': { id: 'card-36', content: '36', color: '#00CC00' },
        'card-37': { id: 'card-37', content: '37', color: '#00FF00' },
        'card-38': { id: 'card-38', content: '38', color: '#33FF33' },
        'card-39': { id: 'card-39', content: '39', color: '#66FF66' },
        'card-40': { id: 'card-40', content: '40', color: '#99FF99' },
        'card-41': { id: 'card-41', content: '41', color: '#003319' },
        'card-42': { id: 'card-42', content: '42', color: '#006633' },
        'card-43': { id: 'card-43', content: '43', color: '#00994C' },
        'card-44': { id: 'card-44', content: '44', color: '#00CC66' },
        'card-45': { id: 'card-45', content: '45', color: '#00FF80' },
        'card-46': { id: 'card-46', content: '46', color: '#33FF99' },
        'card-47': { id: 'card-47', content: '47', color: '#66FFB2' },
        'card-48': { id: 'card-48', content: '48', color: '#99FFCC' },
        'card-49': { id: 'card-49', content: '49', color: '#003333' },
        'card-50': { id: 'card-50', content: '50', color: '#006666' },
        'card-51': { id: 'card-51', content: '51', color: '#009999' },
        'card-52': { id: 'card-52', content: '52', color: '#00CCCC' },
        'card-53': { id: 'card-53', content: '53', color: '#00FFFF' },
        'card-54': { id: 'card-54', content: '54', color: '#33FFFF' },
        'card-55': { id: 'card-55', content: '55', color: '#66FFFF' },
        'card-56': { id: 'card-56', content: '56', color: '#99FFFF' },
        'card-57': { id: 'card-57', content: '57', color: '#001933' },
        'card-58': { id: 'card-58', content: '58', color: '#003366' },
        'card-59': { id: 'card-59', content: '59', color: '#004C99' },
        'card-60': { id: 'card-60', content: '60', color: '#0066CC' },
        'card-61': { id: 'card-61', content: '61', color: '#0080FF' },
        'card-62': { id: 'card-62', content: '62', color: '#3399FF' },
        'card-63': { id: 'card-63', content: '63', color: '#66B2FF' },
        'card-64': { id: 'card-64', content: '64', color: '#99CCFF' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            cardIds: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7', 'card-8']
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            cardIds: ['card-9', 'card-10', 'card-11', 'card-12', 'card-13', 'card-14', 'card-15', 'card-16']
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            cardIds: ['card-17', 'card-18', 'card-19', 'card-20', 'card-21', 'card-22', 'card-23', 'card-24']
        },
        'column-4': {
            id: 'column-4',
            title: 'In progress',
            cardIds: ['card-25', 'card-26', 'card-27', 'card-28', 'card-29', 'card-30', 'card-31', 'card-32']
        },
        'column-5': {
            id: 'column-5',
            title: 'In progress',
            cardIds: ['card-33', 'card-34', 'card-35', 'card-36', 'card-37', 'card-38', 'card-39', 'card-40']
        },
        'column-6': {
            id: 'column-6',
            title: 'In progress',
            cardIds: ['card-41', 'card-42', 'card-43', 'card-44', 'card-45', 'card-46', 'card-47', 'card-48']
        },
        'column-7': {
            id: 'column-7',
            title: 'In progress',
            cardIds: ['card-49', 'card-50', 'card-51', 'card-52', 'card-53', 'card-54', 'card-55', 'card-56']
        },
        'column-8': {
            id: 'column-8',
            title: 'In progress',
            cardIds: ['card-57', 'card-58', 'card-59', 'card-60', 'card-61', 'card-62', 'card-63', 'card-64']
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6', 'column-7', 'column-8',]
}

export default initialData
