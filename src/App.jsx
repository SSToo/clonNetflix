import './App.less'
import bg from './assets/bg.jpg'
import logo from './assets/logo.png'
import one from './assets/one.png'
import two from './assets/two.jpg'
import four from './assets/four.png'
import { useState } from 'react'


function App() {
  // const [show1, setShow1] = useState('')
  const [name, setName] = useState('Taylor');
  return (
    <>
      <div className='frist'>
        <div className='head'>
          <div>
            <img src={logo} alt="" className='logo' />
          </div>
          <div className='headright'>
            <button className='lang'>中文</button>
            <button className='login'>登录</button>
          </div>
        </div>
        <div className='content'>
          <div className='big'>不限時數的電影與節目，還有更多精彩內容</div>
          <div className='secon'>隨處都能觀賞，可隨時取消。</div>
          <div className='text'>準備開心觀賞了嗎？請輸入您的電子郵件，以建立或重新啟用您的帳戶。</div>
          <div className='form'>
            <input type="text" className='email' placeholder='请输入电子邮箱地址' />
            <button className='btn'>开始使用</button>
          </div>
        </div>

        <div className='blackc'></div>
        <img src={bg} alt="" className='bgpig' />
      </div>
      <div className="second">
        <div className='content'>
          <div className="text">
            <div className='title'>在電視上觀賞。</div>
            <div className='text'>在智慧型電視、PlayStation、Xbox、Chromecast、Apple TV、藍光播放器等多種裝置上觀賞。</div>
          </div>
          <div className='img'>
            <img src={one} alt="" className='one' />
          </div>
        </div>
      </div>
      <div className="three">
        <div className='content'>
          <div className='pit'>
            <img src={two} alt="" className='twoimg' />
          </div>
          <div className="text">
            <div className='title'>下載您的節目以便離線觀賞。</div>
            <div className='text'>輕鬆儲存您最喜歡的影片，讓您時時都能盡情觀賞。</div>
          </div>
        </div>
      </div>
      <div className="four">
        <div className="content">
          <div className="text">
            <div className="title">隨處都能觀賞。</div>
            <div className="text">隨您在手機、平板電腦、筆記型電腦和電視上串流不限時數的電影與節目，無額外費用。</div>
          </div>
          <div className="pit">
            <img src={four} alt="" className="four1" />
          </div>
        </div>
      </div>
      <div className="problem">
        <div className="content">
          <div className="title">常見問題解答</div>
          <div className='item' onClick={() => { setName('one') }}>Netflix是什么？ <div className='icon'></div></div>
          {name === "one" &&
            <div className='item-text' >Netflix 是串流服務，透過數千種可連結網路的行動裝置，提供各種獲獎肯定的節目、電影、動畫、紀錄片等精彩內容。
              只要支付一筆經濟實惠的月費，就能隨時隨地，盡情觀賞，毫無廣告。時時都有新的內容供您探索，而且每星期都會加入新的節目與電影！</div>}
          <div className='item' onClick={() => { setName('two') }}>Netflix如何续费？ <div className='icon'></div></div>
          {name === "two" && <div className='item-text'>只要支付一筆固定月費，就能用您的智慧型手機、平板電腦、智慧型電視、筆記型電腦或串流裝置觀賞 Netflix。各種方案介於每月 HK$63 至 HK$93。無額外費用，不須綁約。</div>}
          <div className='item' onClick={() => { setName('three') }}>如何取消？ <div className='icon'></div></div>
          {name === 'three' && <div className='item-text'>Netflix 彈性十足。沒有難懂的合約，也不須綁約。點個兩下，就能線上輕鬆取消您的帳戶。無取消費用，可隨時開始或停用您的帳戶。</div>}
        </div>
      </div>
      <div className="button">
        <ul>
          <li>常見問題</li>
          <li>禮卡條款</li>
          <li>說明中心</li>
          <li>帳戶</li>
          <li>媒體中心</li>
          <li>
            投資人關係</li>
          <li>工作機會</li>
          <li>
            兌換禮卡</li>
          <li>購買禮卡</li>
          <li>觀賞方式</li>
          <li>
            使用條款</li>
          <li>
            隱私權</li>
          <li>Cookie 設定</li>
          <li>
            企業資訊</li>
          <li>
            聯絡我們</li>
          <li>速度測試</li>
          <li>
            法律聲明</li>
          <li>
            Netflix 獨家</li>
        </ul>
      </div>
    </>
  )
}

export default App
