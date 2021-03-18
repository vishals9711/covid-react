import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react'
import React from 'react'
import { COUNTRY_LIST } from '../../../constants/countries'
import { IAllCountryResponse } from '../../../services/covidapi'

export default function TableComponent(props: IAllCountryResponse) {
    const { count, date, result } = props

    const returnTableRow = (data: {
        [key: string]: {
            confirmed: number;
            deaths: number;
            recovered: number;
        };
    }, index: number) => {
        const countryKey = Object.keys(data)[0];
        const countryName = COUNTRY_LIST.find(country => country.alpha_code === countryKey);
        const obj = data[countryKey];
        return <Tr key={index}>
            <Td>{countryName?.name || countryKey}</Td>
            <Td isNumeric>{obj.confirmed}</Td>
            <Td isNumeric>{obj.recovered}</Td>
            <Td isNumeric>{obj.deaths}</Td>
        </Tr>
    }

    return (
        <>
            <Table variant="simple">
                <TableCaption placement="top">Last Update Date : {date}</TableCaption>
                <Thead className="headRow">
                    <Tr >
                        <Th>Country</Th>
                        <Th isNumeric>Confirmed</Th>
                        <Th isNumeric>Recovered</Th>
                        <Th isNumeric>Deaths</Th>
                    </Tr>
                </Thead>
                <Tbody className="tableBody">
                    {result.map((data, index) => returnTableRow(data, index))}
                </Tbody>
            </Table>
        </>
    )
}
