import React from "react";
import styled from 'styled-components';
import { DataItem } from "../../api";
import { DownCircleTwoTone } from '@ant-design/icons';
import { LibraryItem } from "./LibraryItem";

const RegionItem = ({
    title,
    data
}: {
    title: string,
    data: Array<DataItem>
}) => {
    const [active, setActive] = React.useState(false);

    return (
        <Item>
            <div style={{position: 'relative', padding: '20px 50px 20px 20px'}}>
                <Title>{title}</Title>
                <Count>Количество библиотек: {data?.length}</Count>
                <DownCircleTwoTone
                    style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        marginTop: '-13px',
                        fontSize: '26px',
                        fontWeight: 'bold',
                        color: '#1890FF',
                        cursor: 'pointer',
                        transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform .2s linear',
                    }}
                    onClick={() => setActive(!active)}
                />
            </div>
            {active && data.map(item => (
                <LibraryItem key={item.order} {...item} />
            ))}
        </Item>
    )
}

const Item = styled.li`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-sizing: border-box;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin-bottom: 20px;
`

const Title = styled.div`
    color: #000;
    font-weight: bold;
    font-size: calc(1.5rem + 0.5 * ((100vw - 50rem) / 60));
    line-height: calc(1.7rem + 0.5 * ((100vw - 50rem) / 60));
`

const Count = styled.div`
    margin-top: 10px;
    font-size: calc(1.1rem + 0.5 * ((100vw - 50rem) / 60));
    line-height: calc(1.2rem + 0.5 * ((100vw - 50rem) / 60));
`

export default RegionItem;
