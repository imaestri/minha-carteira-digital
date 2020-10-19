import React from 'react'
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

import { Container } from './styles';

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
        </Container>
    )
}


export default List;