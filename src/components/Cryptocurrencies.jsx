import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

function Cryptocurrencies() {

    const { data: cryptoList, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

    return (
        <div>
            
        </div>
    )
}

export default Cryptocurrencies;
