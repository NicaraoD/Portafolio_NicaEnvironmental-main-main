import '../../styles/hero/hero_com.css'

export default function Hero_com({
    title,
    p1,
    p2,
    p3,
    isTrue,
    img

}: any) {

    return (
        <div className={isTrue ? 'p_1' : 'p_1_com'}>
            <div className={'image_container_p2'} >
                <img src={img} alt="" className='hero_image' />
            </div>
            <div className='hero_text_p'>
                <h1>{title}</h1>
                <p className="hero_paragraph hero_paragraph_1">
                    {p1}
                </p>
                <p className="hero_paragraph hero_paragraph_1">
                    {p2}
                </p>
                <p className="hero_paragraph hero_paragraph_1">
                    {p3}
                </p>
            </div>
        </div>

    )
}
