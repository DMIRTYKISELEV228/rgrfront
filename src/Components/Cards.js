import Card from 'react-bootstrap/Card';
import '../CSS/App.css';

function Cards() {
  return (
    <div className='cs'>
      
      <Card style={{ width: '28rem', marginLeft: '10px' }}>
        <Card.Img variant="top" alt="Итоги дня в хоккее" title="Итоги дня в хоккее" src="https://img.championat.com/s/570x380/news/big/b/e/itogi-dnya-v-hokkee_1683314355150753560.jpg" />
        <Card.Body>
          <Card.Title style={{ fontSize: '20px' }}>
            Канада везёт на ЧМ возрастного тафгая, Бобровский бьёт рекорды в НХЛ. Итоги дня в хоккее
          </Card.Title>
          <Card.Text>

            <p style={{ fontSize: '12.5px' }}>«Северсталь» повторила оффершит Гераськину, но игрок всё равно покинет клуб.</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginLeft: '10px' }}>
        <Card.Img variant="top" src="https://img.championat.com/s/270x180/news/big/a/a/novaya-zhizn-hokkeya-kazahstana_16833038771392559003.jpg" />
        <Card.Body>
          <Card.Title style={{ fontSize: '20px' }}>Новая жизнь хоккея Казахстана. Уничтожили прежнюю сборную и достойно бились с Россией</Card.Title>
          <Card.Text>

            <p style={{ fontSize: '12.5px' }}>Мы начинаем знакомить вас с нашими новичками и сегодня расскажем о новом главном тренере — Дэвиде Немировски, который в 2018-2022 годах возглавлял «Торпедо» и за это время трижды выводил нижегородцев в плей-офф.</p>
          </Card.Text>
        </Card.Body>
      </Card>


    </div>


  );
}

export default Cards;