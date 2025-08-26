import React, { useEffect } from 'react'
import "../css/App0826-tooltip.css"
import $ from 'jquery'

export const App = () => {
    // 現在的寫法
    useEffect(() => {
        $('a:has(.ttpshow)').on('mouseover',function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpshow').html() + '</div>');
            $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
        }).on('mousemove', function (e) {
            $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' });
        }).on('mouseout',function () {
       $('#ttpPanel').remove();
    },[])
})

// 過時的寫法
// useEffect(() => {
//     $(function () {
//         // has=>檢查是否有指定的名稱
//     //     $('a:has(.ttpshow)').mouseover(function (e) {
//     //         $('body').append('<div id="ttpPanel">' + $(this).children('.ttpshow').html() + '</div>');
//     //         $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
//     //     }).mousemove(function (e) {
//     //         $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' });
//     //     }).mouseout(function () {
//     //         $('#ttpPanel').remove();
//     //     })
//     // })
// }, [])
return (
    <div className='wrap'>
        <h1>Tooltip</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vel earum, laborum impedit nesciunt reiciendis
            facere asperiores quisquam sunt cumque. Dicta repellat, quasi minima excepturi maxime consequuntur possimus
            alias molestias libero atque sequi vitae saepe illum qui dolorem quod eum! Omnis placeat incidunt, eaque
            earum modi laboriosam. <a href="#">Eligendi<span className="ttpshow">Eligendi內容說明</span></a> suscipit, ipsam
            quasi, id reprehenderit harum corrupti assumenda accusamus
            possimus temporibus ut. Totam qui explicabo sint enim deserunt dolore alias cumque accusamus facere fugit
            molestias eveniet adipisci minima aspernatur, amet fugiat, quia minus doloribus delectus nostrum possimus
            iusto libero! Distinctio, praesentium maiores odio, molestiae, quis rem accusantium et voluptatem beatae est
            autem nobis dolorum repellendus sit iusto? Similique perspiciatis voluptate laborum doloremque. Officia
            atque ullam ducimus quod minima quibusdam veniam dolores adipisci laudantium ipsum consectetur soluta iste,
            praesentium eaque maiores doloremque. Nam animi esse error minima voluptates laudantium quam facere
            <a href="">
                <img src='./vite.svg' alt="" />
                <span className='ttpshow'>圖片說明</span>
            </a>
            molestias, deleniti, hic earum nesciunt fugiat qui adipisci consequatur minus facilis molestiae est velit!
            Repudiandae ad soluta modi magni, culpa vitae! Quos pariatur iusto at aliquid, accusamus nam repellendus.
            Corrupti repudiandae, cumque unde quasi officia nesciunt beatae numquam soluta quod error quidem, eos
            accusantium. Quod quas laudantium a accusantium enim, dolorum quibusdam veniam pariatur sequi deleniti
            voluptate aut quis itaque. Nihil qui laborum adipisci, doloremque odio facilis aspernatur est expedita
            repellat ipsum, soluta ullam aliquid, placeat fugiat quas esse. Facere, odit fuga explicabo laudantium
            neque, voluptates nobis accusamus earum, aperiam modi mollitia incidunt? Officiis placeat veniam doloremque
            ad nihil est nulla corporis inventore, nemo, odio perferendis porro quisquam cum quam facilis quas
            praesentium? Aspernatur <a href="#">consequuntur<span className="ttpshow">consequuntur內容說明</span></a> iste iure aperiam, tenetur deleniti provident numquam totam aut et!
            Ducimus perspiciatis consequuntur aut dolorem vero veritatis temporibus iusto, deserunt harum similique
            consectetur enim omnis magni qui quaerat tempora! Ab ex odit eligendi. Voluptatem suscipit vitae at error
            nemo quis, veritatis commodi excepturi maxime vel nobis nostrum?</p>
    </div>
)
    }
export default App