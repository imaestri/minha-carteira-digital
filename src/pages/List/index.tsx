import React from 'react'
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';

import { Container, Content } from './styles';

const List: React.FC = () => {
    const options = [
        { value: 'Isaque', label: 'Isaque' },
        { value: 'Leticia', label: 'Leticia' }
    ]

    const time = [
        { value: 'Galo', label: 'Galo' },
        { value: 'Vasco', label: 'Vasco' }
    ]
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options} />
                <SelectInput options={time} />
            </ContentHeader>
            <Content>
                <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="01/01/2020"
                    amount="R$ 113,00"
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="01/01/2020"
                    amount="R$ 113,00"
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="01/01/2020"
                    amount="R$ 113,00"
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="01/01/2020"
                    amount="R$ 113,00"
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="01/01/2020"
                    amount="R$ 113,00"
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="01/01/2020"
                    amount="R$ 113,00"
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="01/01/2020"
                    amount="R$ 113,00"
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="01/01/2020"
                    amount="R$ 113,00"
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="01/01/2020"
                    amount="R$ 113,00"
                />
                 <HistoryFinanceCard 
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="01/01/2020"
                    amount="R$ 113,00"
                />
            </Content>
        </Container>
    )
}


export default List;