import styled from "styled-components";
import { Card } from "antd";
export const WrapperCardStyle = styled(Card)`
    with: 200px;
    & img {
        height: 200px;
        with: 200px;
    }
`



export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56, 56, 61);
    font-weight: 400

`
export const WrapperReportText = styled.div `
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: ceter;
    margin: 6px 0 0px ;
`
export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
    margin: 8px 0;

`
export const WrapperDiscoutText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500;
    
`
export const WrapperStyleTextSell = styled.span`
    font-size : 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);

`