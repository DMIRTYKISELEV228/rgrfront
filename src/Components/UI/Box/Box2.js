import Calendar from 'react-calendar'


const Box2 = () => {
 
        return (
            <div className="box2">
                <div class="module module--banner" style={{ marginBottom: ' 30px' }}>
                    <div className="mr">
                        <a class="banner" href="http://shop.hcsibir.ru/">
                            <img src="https://hcsibir.ru/uploads/advert/image/1/forma.jpg" alt="Forma" />
                        </a>
                    </div>
                    <div className="mr">
                        <a class="banner" href="http://tickets.hcsibir.ru/">
                            <img src="https://hcsibir.ru/uploads/advert/image/2/tickets.jpg" alt="Tickets" />
                        </a>
                    </div>
                    <div className="mr">
                        <a class="banner" href="https://hcsibir.ru/pages/new_arena">
                            <img src="https://hcsibir.ru/uploads/advert/image/14/banner-abon-2022.png" alt="Banner abon 2022" />
                        </a>
                    </div>
                </div>
                <Calendar />
            </div>
        )
 
}


export default Box2