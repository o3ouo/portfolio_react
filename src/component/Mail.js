import React from 'react';
import PageTransition from './PageTansition';

function Mail() {
  return (
    <PageTransition>
      <div className="mail-wrap">
        <div className="inner">
          <div className="contents">
            <div className="close"></div>
            <div className="mail_box">
              <form id="contact-form">
                <div className="title_button">
                  <p className="title">새로운 메시지</p>
                  <div className="button_box">
                    <input id="button" type="submit" className='submit_btn' />
                    <img src={`${process.env.PUBLIC_URL}/image/sand_icon.webp`} alt="sand_icon" />
                  </div>
                </div>

                <div className="to">
                  <label for="to_name" class="b-18">받는 사람:</label>
                  <input id="to_name" type="text" name="to_name" className='to_txt' placeholder="유아정" />
                </div>

                <div className="from">
                  <label for="from_name" class="b-18">참조/숨은 참조, 보낸 사람:</label>
                  <input id="from_name" type="email" name="to_name" className='from_txt' placeholder="example@gmail.com" />
                </div>

                <div className="from_title">
                  <label for="from_name" class="b-18">제목:</label>
                  <input id="from_name" type="text" name="to_name" className='from_txt' />
                </div>

                <label for="button" className="b-18"></label>
                <textarea name="message" className="text_area"></textarea>

              </form>
            </div>
          </div>
          <div className="indicator"></div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Mail;
