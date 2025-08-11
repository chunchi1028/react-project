import { useEffect } from 'react';
import '../css/App0811-weather.css'
import { IoUmbrella } from "react-icons/io5";
import axios from 'axios';
const App = () => {
    // useEffect()=>渲染後，只呼叫一次json
    useEffect(() => {
        // 非同步資料
        (async () => {
            // 取得public的json檔
            const data =await axios.get('./F-C0032-001.json')
            // 檢查是否連上json
            console.log(data.data.cwaopendata.dataset);
        })();
    }, []);


    return (
        <>
            {/* 36小時天氣預報 */}
            <div className='container'>
                <div className="location">
                    <h2>臺北市</h2>
                </div>
                <div className='cards'>
                    <div className='weather'>
                        <h2>11日</h2>
                        <p>上午6:00<br />
                            ~<br />
                            下午6:00<br /></p>
                        {/* 天氣圖:使用執行路徑，所以要將圖片放在public資料夾中，才讀的到 */}
                        <img src="./weatherIcon/晴午後短暫陣雨.svg" />
                        <p>晴午後短暫陣雨</p>
                        <div>
                            <IoUmbrella />
                            80%
                        </div>
                    </div >
                </div>

            </div>
        </>
    )
}

export default App