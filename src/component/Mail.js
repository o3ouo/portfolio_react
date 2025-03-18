import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import PageTransition from './PageTansition';

function Mail() {
  const formRef = useRef(null);
  const navigator = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("폼이 제출되었습니다."); // 확인용 로그 추가

    if (!formRef.current) {
      alert("폼을 찾을 수 없습니다. 다시 시도해주세요.");
      return;
    }

    emailjs
      .sendForm(
        "o3ouo", // 서비스 ID
        "template_jbqfrtr", // 템플릿 ID

        formRef.current, "ZQ95343467sXwou2y", // 사용자 ID (Public Key)
      )
      .then(() => {
        alert("메일이 성공적으로 전송되었습니다!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("메일 전송에 실패했습니다. 다시 시도해 주세요.");
      });
  };

  return (
    <PageTransition>
      <div className="mail_wrap">
        <div className="inner">
          <div className="contents">
            <div className="close" onClick={() => navigator("/home")}>취소</div>
            <div className="mail_form">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="title_button">
                  <p className="title">새로운 메시지</p>
                  <div className="button_box">
                    <input id="button" type="submit" value=" " className='submit_btn' />
                  </div>
                </div>

                <div className="to">
                  <label htmlFor="to_name">받는 사람:</label>
                  <input id="to_name" type="text" name="to_name" className="name_txt" placeholder="유아정" />
                </div>

                <div className="from">
                  <label htmlFor="from_name">보낸 사람:</label>
                  <input id="from_name" type="email" name="from_name" className="from_txt" placeholder="example@gmail.com" />
                </div>

                <div className="from_title email">
                  <label htmlFor="title">제목:</label>
                  <input id="title" type="text" name="title" className="title_txt" placeholder="제목을 입력하세요." />
                </div>

                <textarea id="message" name="message" className="text_area" placeholder="나의 iPhone에서 보냄"></textarea>
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
