import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { DataItem, DataType } from "../../api";
import { Title } from "../../app"
import {
    EnvironmentOutlined,
    FileTextOutlined,
    LaptopOutlined,
    LoadingOutlined,
    UserOutlined
} from "@ant-design/icons";
import styled from "styled-components";

const Library = (data: DataType) => {
    let obj: { id: string } = useParams();
    const [state, setState] = useState<DataItem>();

    useEffect(() => {
        findLibrary(obj.id, data);
    }, [obj.id]);

    const findLibrary = (id: string, data: DataType) => {
        Object.values(data).forEach(arr => {
            arr.forEach(item => {
                if (item.order === +id) {
                    setState(item);
                }
            });
        });
    }

    return (
        <>
            {state ? (
                <>
                    <header>
                        <div className="inner">
                            <Title>{state.fullname}</Title>
                        </div>
                    </header>
                    <main>
                        <div className="inner">
                            <Row>
                                <div>Официальное название:</div>
                                <div><b>{state?.formname}</b></div>
                                <FileTextOutlined
                                    style={{
                                        position: 'absolute',
                                        fontSize: '20px',
                                        left: '0px',
                                        top: '0px',
                                    }}
                                />
                            </Row>
                            <Row>
                                <div>Область:</div>
                                <div><b>{state?.territory}</b></div>
                                <EnvironmentOutlined
                                    style={{
                                        position: 'absolute',
                                        fontSize: '20px',
                                        left: '0px',
                                        top: '0px',
                                    }}
                                />
                            </Row>
                            <Row>
                                <div>Количество сотрудников:</div>
                                <div><b>{state?.employees}</b></div>
                                <UserOutlined
                                    style={{
                                        position: 'absolute',
                                        fontSize: '20px',
                                        left: '0px',
                                        top: '0px',
                                    }}
                                />
                            </Row>
                            <Row>
                                <div>Количество компьютеров:</div>
                                <div><b>{state?.computers}</b></div>
                                <LaptopOutlined
                                    style={{
                                        position: 'absolute',
                                        fontSize: '20px',
                                        left: '0px',
                                        top: '0px',
                                    }}
                                />
                            </Row>
                        </div>
                    </main>
                </>
            ) : (
                <LoadingOutlined style={{
                    position: 'absolute',
                    fontSize: '40px',
                    left: '50%',
                    top: '50%',
                    marginTop: '-20px',
                    marginLeft: '-20px',
                    color: '#2787F5',
                }} spin/>
            )}
        </>
    )
}

const Row = styled.div`
    position: relative;
    color: #737373;
    padding-left: 25px;
    margin-bottom: 10px;
    font-size: calc(1rem + 0.5 * ((100vw - 50rem) / 60));
    line-height: calc(1.2rem + 0.5 * ((100vw - 50rem) / 60));
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    div:first-child {
        flex: 0 0 210px;
        padding-right: 10px;
    }

    @media (min-width: 900px) {
        font-size: 16px;
        line-height: 19px;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        div:first-child {
            flex: 0 0 auto;
            padding-right: 0;
            padding-bottom: 5px;
        }
    }
`

export default Library;
