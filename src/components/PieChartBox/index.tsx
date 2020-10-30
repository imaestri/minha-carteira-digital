import React from 'react';

import { Container, SideLeft, LegendContainer, Legend, SideRight } from './styles';

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts';


interface IPieChartProps{
    data: {
        name: string,
        value: number,
        percent: number,
        color: string
    }[];
}


const PieChartBox: React.FC<IPieChartProps> = ({data}) => (
    <Container>
        <SideLeft>
            <LegendContainer>
                <h3>Relação</h3>
                {
                    data.map(indicator => (
                        <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
                {/* <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saidas</span>
                </Legend> */}
                
            </LegendContainer>
        </SideLeft>
        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="percent"
                    >
                        {
                            data.map((indicator) =>
                                <Cell key={indicator.name} fill={indicator.color} />
                            )
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
)



export default PieChartBox;