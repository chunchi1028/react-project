import { useState } from 'react'
import '../css/App0826-2.css';
import { CgArrowLongLeftR } from "react-icons/cg";
import { CgArrowLongRightR } from "react-icons/cg";
const App = () => {
    // m預設為第一張圖
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: './images/p3.jpg' },
        { url: './images/p5.jpg' },
        { url: './images/p7.jpg' },
        { url: './images/p9.jpg' },
    ]

    // 上一張
    const prevSlide = () => {
        // 切換目前圖片的索引位置
        setCurrentIndex((prevIndex) => {
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        })
    }

    // 下一張
    const nextSlide = () => {
        // 切換目前圖片的索引位置
        setCurrentIndex((prevIndex) => {
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        })
    }

    // 按鈕
    const Arrow = ({ direction, onClick }) => {
        <div>
            {
                direction === "left"
                    ? (
                        // 左按鈕
                        <CgArrowLongLeftR />
                    )
                    : (
                        // 右按鈕
                        < CgArrowLongRightR />

                    )
            }
        </div>
    }
    return (
        <div className='wrap'>
            <h1>輪播</h1>
            <div className='slide'>
                <div className='slideImg' style={{
                    backgroundImage: `url(${slides[currentIndex].url})`
                }} />
                {/* 顯示圖片區 */}
            </div>
            {/* 左 */}
            <Arrow direction={"left"} onClick={null} />
            {/* 右 */}
            <Arrow direction={"right"} onClick={null} />
        </div>
    )
}

export default App