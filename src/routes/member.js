import Navigation from '../navigation'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Helmet } from "react-helmet";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/footer';

function Member() {
  return (
    <div>
      <Helmet><script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></Helmet>
      <Navigation />
      <Container className='text-center bg-light p-5' style={{ "z-index": 100 }}>
        <div className='title'>
          <h2><b>メンバー一覧(本部)</b></h2>
        </div>
        <div className='admin'>
          <h3 className='mt-4'><b>運営</b></h3>
          <Row className='text-center'>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/yurisi.png" />
                <Card.Body>
                  <Card.Title>yurisi</Card.Title>
                  <Card.Text>
                    パチスロエンジョイ勢。<br />
                    話しやすさには自信あり<br />
                    主にやっているゲーム<br />
                    ・Valorant(アセンダント)<br />
                    ・MonsterHunter<br />
                    ・Minecraft<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                  <a href="https://twitter.com/Dev_yrs?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @Dev_yrs</a>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/tatchan.jpg" />
                <Card.Body>
                  <Card.Title>tatchan</Card.Title>
                  <Card.Text>
                    可愛さ100％<br />
                    シャイ100％<br />
                    主にやっているゲーム<br />
                    ・Valorant(アセンダント)<br />
                    ・Rainbow Six:Siege<br />
                    ・Minecraft<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                  <a href="https://twitter.com/rb_tatchan?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @rb_tatchan</a>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/raiden.jpg" />
                <Card.Body>
                  <Card.Title>raiden</Card.Title>
                  <Card.Text>
                    自称10歳ww<br />
                    ぴか<br />
                    主にやっているゲーム<br />
                    ・Valorant(アセンダント)<br />
                    ・Krunker<br />
                    ・Minecraft Dungeons<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                  <a href="https://twitter.com/rai3den4?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @rai3den4</a>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/meyason.jpg" />
                <Card.Body>
                  <Card.Title>meyason</Card.Title>
                  <Card.Text>
                    お茶目代表<br />
                    偏差値は多分カンスト<br />
                    主にやっているゲーム<br />
                    ・Rainbow Six:Siege<br />
                    ・Minecraft<br />
                    ・Rocket League<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                  <a href="https://twitter.com/Villagermeyason?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @Villagermeyason</a>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/spiny.jpg" />
                <Card.Body>
                  <Card.Title>SpinyMouse</Card.Title>
                  <Card.Text>
                    頭のおかしさは世界代表<br />
                    Minecraftの建築は最高峰<br />
                    主にやっているゲーム<br />
                    ・Rust<br />
                    ・Minecraft<br />
                    ・RocketLeague<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                  <a href="https://twitter.com/Mouse_Spiny?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @Mouse_Spiny</a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className='member'>
          <h3 className='mt-4'><b>メンバー</b></h3>
          <Row className='text-center'>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/tsuyoshikusa.jpg" />
                <Card.Body>
                  <Card.Title>つよっしくさ</Card.Title>
                  <Card.Text>
                    パチスロ破産勢。<br />
                    圧倒的ムードメーカー<br />
                    主にやっているゲーム<br />
                    ・Valorant<br />
                    ・MonsterHunter(Switch)<br />
                    ・BananaShooter<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/yoshit.jpg" />
                <Card.Body>
                  <Card.Title>yoshit</Card.Title>
                  <Card.Text>
                    逆張りポケモン<br />
                    特性:あまのじゃく<br />
                    主にやっているゲーム<br />
                    ・Valorant<br />
                    ・Rust<br />
                    ・Biohazardシリーズ(RTA)<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/alu.png" />
                <Card.Body>
                  <Card.Title>Alu</Card.Title>
                  <Card.Text>
                    酒カス<br />
                    気分じゃないときは適当な理由つけてゲーム断ってきます<br />
                    主にやっているゲーム<br />
                    ・Valorant<br />
                    ・Rainbow Six:Siege<br />
                    ・The Forest<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/apatetic.png" />
                <Card.Body>
                  <Card.Title>あぱ</Card.Title>
                  <Card.Text>
                    元ガンギマリ社畜<br />
                    転職してからとても楽しそうで良かった<br />
                    主にやっているゲーム<br />
                    ・Valorant<br />
                    ・Minecraft<br />
                    ・GTAV<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/mia.png" />
                <Card.Body>
                  <Card.Title>みあ</Card.Title>
                  <Card.Text>
                    最強の聞き専<br />
                    fpsフィジカル最強<br />
                    主にやっているゲーム<br />
                    ・Valorant(イモータル)<br />
                    ・ApexLegends(マスター)<br />
                    ・Minecraft<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/rinse.png" />
                <Card.Body>
                  <Card.Title>りんす</Card.Title>
                  <Card.Text>
                    みあちゃんの使い魔<br />
                    マウス没収常習犯<br />
                    主にやっているゲーム<br />
                    ・Valorant<br />
                    ・ApexLegends(マスター)<br />
                    ・Minecraft<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/fireryou.png" />
                <Card.Body>
                  <Card.Title>ふぁいありょう</Card.Title>
                  <Card.Text>
                    何でもゴミゴミ言う。<br />
                    陰キャいじりされるのが好き<br />
                    主にやっているゲーム<br />
                    ・Valorant<br />
                    ・MonsterHunterWorld<br />
                    ・原神<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='d-flex justify-content-center my-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/new_Parfait/images/member/takumatuti.png" />
                <Card.Body>
                  <Card.Title>たくまっち</Card.Title>
                  <Card.Text>
                    ライト勢だがどんなゲームでも楽しくやる<br />
                    絵のセンスは人一倍<br />
                    主にやっているゲーム<br />
                    ・Minecraft<br />
                    ・Craftpia<br />
                    ・Among us<br />
                    ・他たくさんのゲーム
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h3>他数名</h3>
        </div>
      </Container>
      <Footer />
    </div>

  );
}

export default Member;