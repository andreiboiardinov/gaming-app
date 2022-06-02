import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps extends React.HTMLAttributes<Element> {
    children: React.ReactNode,
    open: boolean,
    onClose: React.MouseEventHandler<HTMLButtonElement>,
    top: number,
    left: number,
    width: number,
}

interface ContainerProps {
    top: number,
    left: number,
    width: number,
}

const Modal = ({ open, onClose, children, top, left, width }: ModalProps) => {
    if (!open) return null

    return ReactDOM.createPortal(
        <Container top={top} left={left} width={width}>
            <button onClick={onClose}>&times;</button>
            { children }
        </Container>,
        document.getElementById('portal') as HTMLElement
    )
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  background: aqua;
  width: ${props => props.width}px;
`

export default Modal