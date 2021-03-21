import React from "react";
import { DataItem } from "../../api";
import styled from "styled-components";
import {
    EnvironmentOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const LibraryItem = (data: DataItem) => (
    <Container>
        <Name>{data.fullname}</Name>
        <Address>
            <EnvironmentOutlined
                style={{
                    position: 'absolute',
                    fontSize: '20px',
                    left: '0px',
                    top: '0px',
                }}
            />
            Адрес: <b>{data.address}</b>
        </Address>
        <Link to={`/library/${data.order}`}>
            <ArrowRightOutlined
                style={{
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    right: '0',
                    fontSize: '20px',
                    color: '#2787F5',
                    cursor: 'pointer',
                    height: '100%',
                    width: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            />
        </Link>
    </Container>
)

const Container = styled.div`
    position: relative;
    border-top: 1px solid #ccc;
    padding: 20px 50px 20px 10px;
`

const Name = styled.div`
    color: #000;
    font-weight: bold;
    font-size: calc(1.1rem + 0.5 * ((100vw - 50rem) / 60));
    line-height: calc(1.2rem + 0.5 * ((100vw - 50rem) / 60));
    margin-bottom: 10px;

    @media (min-width: 900px) {
        font-size: 18px;
        line-height: 20px;
    }
`

const Address = styled.div`
    position: relative;
    color: #737373;
    padding-left: 25px;
    font-size: calc(1rem + 0.5 * ((100vw - 50rem) / 60));
    line-height: calc(1.1rem + 0.5 * ((100vw - 50rem) / 60));

    @media (min-width: 900px) {
        font-size: 16px;
        line-height: 19px;
    }
`
