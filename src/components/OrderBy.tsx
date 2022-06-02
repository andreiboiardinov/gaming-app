import Modal from "./Modal";
import React, {useRef, useState} from "react";
import { resetState } from "../store/gameListSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";

export interface IOrderBy {
    [key: string]: any
}

const orderBy: IOrderBy = {
    'Date added': '-created',
    'Name': 'name',
    'Release date': '-released',
    'Popularity': '-added',
    'Average rating': '-rating',
}

export interface OrderByProps {
    order: string,
    setOrder: (order: string) => void
}

const OrderBy = ({ order, setOrder }: OrderByProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [left, setLeft] = useState<number>(0)
    const [top, setTop] = useState<number>(0)
    const [width, setWidth] = useState<number>(0)
    /*const [order, setOrder] = useState<string>(Object.values(orderBy)[0])*/
    const [orderName, setOrderName] = useState<string>(Object.keys(orderBy)[0])
    const modalRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch<AppDispatch>()

    const handleModalPosition = () => {
        if (modalRef.current) {
            console.log('modalRef', modalRef)
            setLeft(modalRef.current.offsetLeft)
            setTop(modalRef.current.offsetTop)
            setWidth(modalRef.current.offsetWidth)
        }
    }

    const handleOrderChange = (newOrder: string, key: string) => {
        setOrder(newOrder)
        setOrderName(key)
        dispatch(resetState())
    }

    return (
        <div style={{ position: 'relative' }} ref={modalRef} onMouseEnter={handleModalPosition}>
            <button onClick={() => setOpenModal(true)}>Order by: {orderName}</button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} top={top} left={left} width={width}>
                {Object.keys(orderBy).map(key => (
                    <div key={key} onClick={() => handleOrderChange(orderBy[key], key)}>{key}</div>
                ))}
            </Modal>
        </div>
    )
}

export default OrderBy