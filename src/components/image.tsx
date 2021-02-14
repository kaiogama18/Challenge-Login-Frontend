import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    src: string
    alt?: string
}

const Img = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;

    img {
        max-width: 100%;
        height: 99vh;
        object-fit: cover;
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: inline-block;

        background: linear-gradient(
            180deg,
            #130525 0%,
            rgba(105, 57, 153, 0) 100%
        );
        transform: rotate(-180deg);
    }
`

const Image: React.FC<InputProps> = ({ src, alt }) => {
    return (
        <Img>
            <img src={src} alt={alt} />
        </Img>
    )
}

export default Image
