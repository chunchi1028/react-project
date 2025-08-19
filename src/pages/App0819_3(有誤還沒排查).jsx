import { useState } from "react"

function App0819_3() {
    const [curImg, setCurImg] = useState(0)
    const arrPhotos = [
        {
            imgName: "./p1.jpg"
        },
        {
            imgName: "./images/p3.jpg"
        },
        {
            imgName: "./images/p5.jpg"
        },
        {
            imgName: "./images/p7.jpg"
        }
    ]


    const App0819_3 = () => {
        return (
            <div>
                <h1>小圖換大圖</h1>
                <div>
                    <div>
                        {/* <img src="./images/p1.jpg" alt="" width={120} height={80} style={{ cursor: "pointer" }} />
                <img src="./images/p3.jpg" alt="" width={120} height={80} style={{ cursor: "pointer" }} />
                <img src="./images/p5.jpg" alt="" width={120} height={80} style={{ cursor: "pointer" }} />
                <img src="./images/p7.jpg" alt="" width={120} height={80} style={{ cursor: "pointer" }} />
                 */}
                        {
                            arrPhotos.map((photo, index) => {
                                console.log(photo)
                                return (
                                    <img
                                        key={index}
                                        src={photo}
                                        alt=""
                                        width={120}
                                        height={80}
                                        style={{ cursor: "pointer" }}
                                        onMouseOver={() => {
                                            setCurImg(index)
                                        }}
                                    />
                                )
                            })
                        }
                    </div>
                    <div>
                        {/* <img src="./src/images/images/p1.jpg" alt="" width={420} height={280}/> */}
                        <img src={arrPhotos[curImg]} alt="" width={420} height={280} />
                    </div>
                </div>
            </div>
        )
    }

}

export default App0819_3