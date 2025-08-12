import { useEffect } from 'react';
import '../css/App0812-weather.css'
import { IoUmbrella } from "react-icons/io5";
import axios from 'axios';
const App = () => {
    // useEffect()=>渲染後，只呼叫一次json
    useEffect(() => {
        // 非同步資料
        (async () => {
            // 取得public的json檔
            const data = await axios.get('./F-C0032-001.json')
            // 檢查是否連上json
            console.log(data.data.cwaopendata.dataset);
        })();
    }, []);


    return (
        <>
            {/* 36小時天氣預報的版型 */}
            {/* Wx (天氣現象) MaxT(最高溫度) MinT(最低溫度) CI(舒適度) Pop(降雨率)*/}
            <h2>三十六小時天氣預報</h2>
            <div className='cards'>{
                LiaCitySolid.map((city) => {
                    return (
                        <div key={city.locationName}>
                            < div className='card' >
                                {/* 卡片標題 */}
                                < div className='card-header' >
                                    台北市
                                    {/* {city.locatationName} */}

                                </div>
                                {/* 卡片內容 */}
                                <div className='card-body'>
                                    <div className='item'>
                                        {/* 日期 */}
                                        <div className='date'>
                                            11日
                                        </div>
                                        {/* 時間 */}
                                        <div className='time'>
                                            上午6:00<br />
                                            ~<br />
                                            下午6:00<br />
                                        </div>
                                        {/* 天氣圖 */}
                                        <div className='weatherPic'>
                                            <img src="./weatherIcon/晴午後短暫陣雨.svg" alt="" />
                                        </div>
                                        {/* 天氣名稱 */}
                                        <div className='weatherName'>
                                            晴午後短暫陣雨
                                        </div>
                                        {/* 降雨率pop */}
                                        <div className='pop'>
                                            < IoUmbrella />
                                            80%
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    )
                })
            }
            </div >

        </>
    )
}

export default App