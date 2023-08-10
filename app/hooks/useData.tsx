export interface CardData {
    title: string;
    value: string;
    percentages: string;
    color: string
}

const useData = () => {

    const cardData: CardData[] = [
        {
        title: 'Income',
        value: '$23.5k',
        percentages: '+15.7',
        color: ''
        },
        {
        title: 'Website Visitors',
        value: '312',
        percentages: '-1.7',
        color: ''
        },
        {
        title: 'Tasks',
        value: '157',
        percentages: '+25',
        color: ''
        },
        {
        title: 'Invoices',
        value: '67',
        percentages: '+5',
        color: ''
        },
        {
        title: 'Team Members',
        value: '17',
        percentages: '-3',
        color: ''
        },
]

  return { cardData }
}

export default useData