import { useState } from "react";


const App0818_3 = () => {
    const [myselect, setMyselect] = useState('');
    // 建立下拉式清單的項目
    const opList = ['HTML', 'CSS', 'Javascript', 'React'];
    //    建立下拉式清單的內容
    const opListValue = ['html', 'css', 'js', 'react'];
    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2><hr />
            {/* <p>目前被選取的項目:{myselect}</p> */}
            <select name="" id="" value={myselect} onChange={(e) => {
                setMyselect(e.target.value)
                console.log(e.target.value);
            }}>
                {/* disabled=>只能看不能用 ，若想要用就要把disabled拿掉 */}
                <option value=""  disabled>請選擇</option>
                {/* 使用陣列map方法 */}
                {
                    opList.map((item,index) => {
                        return <option key={item} value={opListValue[index]}>{item}</option>
                    })
                }

                {/* <option value="">請選擇</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">Javascript</option>
            <option value="react">React</option> */}
            </select>
        </div>
    )
}

export default App0818_3