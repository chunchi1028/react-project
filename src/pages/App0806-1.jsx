import '../css/App0806-1.css'
const App = () => {
    // 資料抽離
    const photos = {
        photo1: {
            imgURL: 'https://images.unsplash.com/photo-1491604612772-6853927639ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top',
            title: '哈士奇1',
            desc: "我是黑白色哈士奇",
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1491604612772-6853927639ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top',
        },
        photo2: {
            imgURL: 'https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '哈士奇2',
            desc: '我是咖啡加白哈士奇',
            btnName: '圖片來源',
            btnURL: 'https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        photo3: {
            imgURL: 'https://plus.unsplash.com/premium_photo-1742893873393-d580f6e83817?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '哈士奇3',
            desc: '我是白色的哈士奇',
            btnName: '圖片來源',
            btnURL: 'https://plus.unsplash.com/premium_photo-1742893873393-d580f6e83817?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    }
    return (
        <>
            <div className="container">
                <div className="card" >
                    <img src={photos.photo1.imgURL} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1. desc}</p>
                        <a href="#" className="btn btn-primary">{photos.photo1.btnName}</a>
                    </div>
                </div>

                <div className="card" >
                    <img src={photos.photo2.imgURL} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href="#" className="btn btn-primary">{photos.photo2.btnName}</a>
                    </div>
                </div>

                <div className="card" >
                    <img src={photos.photo3.imgURL} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href="#" className="btn btn-primary">{photos.photo3.btnName}</a>
                    </div>
                </div>

            </div>

        </>
    )
}
export default App;