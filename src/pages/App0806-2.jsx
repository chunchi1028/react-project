import Card from '../components/Card';
import '../css/App0806-1.css'
// 陣列方式
const arrCards = [
    {
        id: 1,
        imgURL: 'https://images.unsplash.com/photo-1491604612772-6853927639ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top',
        desc: "我是黑白色哈士奇",
        btnName: '圖片來源',
        btnURL: 'https://images.unsplash.com/photo-1491604612772-6853927639ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top',
    },
    {
        id: 2,
        imgURL: 'https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '我是咖啡加白哈士奇',
        btnName: '圖片來源',
        btnURL: 'https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        imgURL: 'https://plus.unsplash.com/premium_photo-1742893873393-d580f6e83817?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '我是白色的哈士奇',
        btnName: '圖片來源',
        btnURL: 'https://plus.unsplash.com/premium_photo-1742893873393-d580f6e83817?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

]

const App = () => {
    // 資料抽離
    // const photos = {
    //     photo1: {
    //         imgURL: 'https://images.unsplash.com/photo-1491604612772-6853927639ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top',
    //         title: '哈士奇1',
    //         desc: "我是黑白色哈士奇",
    //         btnName: '圖片來源',
    //         btnURL: 'https://images.unsplash.com/photo-1491604612772-6853927639ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top',
    //     },
    //     photo2: {
    //         imgURL: 'https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         title: '哈士奇2',
    //         desc: '我是咖啡加白哈士奇',
    //         btnName: '圖片來源',
    //         btnURL: 'https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     },
    //     photo3: {
    //         imgURL: 'https://plus.unsplash.com/premium_photo-1742893873393-d580f6e83817?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         title: '哈士奇3',
    //         desc: '我是白色的哈士奇',
    //         btnName: '圖片來源',
    //         btnURL: 'https://plus.unsplash.com/premium_photo-1742893873393-d580f6e83817?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     }
    // }
      return(
        <>
             <div className="container">
                
             {/* <Card
                    imgURL={photos.photo1.imgURL}
                    title={photos.photo1.title}
                    desc={photos.photo1.desc}
                    btnName={photos.photo1.btnName}
                    btnURL={photos.photo1.btnURL}
                ></Card>

                <Card
                    imgURL={photos.photo2.imgURL}
                    title={photos.photo2.title}
                    desc={photos.photo2.desc}
                    btnName={photos.photo2.btnName}
                    btnURL={photos.photo2.btnURL}
                ></Card>


                <Card
                    imgURL={photos.photo3.imgURL}
                    title={photos.photo3.title}
                    desc={photos.photo3.desc}
                    btnName={photos.photo3.btnName}
                    btnURL={photos.photo3.btnURL}
                ></Card>  */}
             

            {/*陣列方式  */}
            {
                arrCards.map((photo) => {
                    return (
                        <Card key={photo.id} imgURL={photo.imgURL} desc={photo.desc} btnName={photo.btnName} btnURL={photo.btnURL} />
                    )
                })

            }
            </div>
        </>
    )
}
    


export default App;