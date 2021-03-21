import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { getData, DataItem, DataType } from "./api";
import { Route } from 'react-router-dom';
import {
    RegionItem,
    Library
} from './components';
import './app.css';
import styled from 'styled-components';

export default function App () {
    const [initData, setInitData] = useState<DataType>({});
    const [data, setData] = useState<DataType>({});

    useEffect(() => {
        getData().then(value => {
            let obj: DataType = {};
            value.forEach((item: DataItem) => {
                if (!obj[item.territory])
                    obj[item.territory] = [];
                obj[item.territory].push(item);
            })
            setInitData(obj);
            setData(obj);
        });
    }, []);

    const onSearch = (value: string) => {
        if (value) {
            let obj: DataType = {};
            Object.keys(initData).forEach(key => {
                if (key.search(value) === 0)
                    obj[key] = initData[key];
            });
            setData(obj);
        } else setData(initData)
    }

    return (
        <div style={{padding: '20px 0'}}>
            <Route exact path='/'>
                <header>
                    <div className="inner">
                        <Title>Список регионов</Title>
                    </div>
                </header>
                <main>
                    <div className="inner">
                        <Input.Search
                            placeholder="Поиск по региону"
                            onSearch={onSearch}
                            enterButton
                            style={{
                                marginBottom: '10px'
                            }}
                        />
                        <ul>
                            {data && Object.keys(data).map((item, index) => (
                                <RegionItem key={index} title={item} data={data[item]}/>
                            ))}
                        </ul>
                    </div>
                </main>
            </Route>
            <Route path='/library/:id'>
                <Library {...data} />
            </Route>
        </div>
    );
}

export const Title = styled.h1`
    font-size: calc(1.8rem + 0.5 * ((100vw - 50rem) / 60));
    line-height: calc(2rem + 0.5 * ((100vw - 50rem) / 60));
`
