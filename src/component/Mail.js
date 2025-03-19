import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import PageTransition from './PageTansition';

function Mail() {
  const formRef = useRef(null);
  const navigator = useNavigate();

  // 모바일에서 공백 생기는 문제 State로 텍스트 관리
  const [inputText, setInputText] = useState({
    to_name: '',
    from_name: '',
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: inputText.to_name,
      from_name: inputText.from_name,
      title: inputText.title,
      message: inputText.message,
    };

    emailjs.send("o3ouo", "template_jbqfrtr", templateParams, "ZQ95343467sXwou2y")
      .then(() => alert("메일이 성공적으로 전송되었습니다!"))
      .catch((error) => console.error("FAILED...", error));
  };

  useEffect(() => {
    const handleResize = () => {
      window.scrollTo(0, 0); // 화면을 최상단으로 이동시켜서 잘림 방지
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                    <input
                      type="submit"
                      id="button"
                      value=" "
                      className='submit_btn'
                    />
                  </div>
                </div>

                <div className="to">
                  <label htmlFor="to_name">받는 사람:</label>
                  <input
                    type="text"
                    id="to_name"
                    name="to_name"
                    value={inputText.to_name}
                    onChange={handleChange}
                    placeholder="유아정"
                    className="name_txt"
                  />
                </div>

                <div className="from">
                  <label htmlFor="from_name">보낸 사람:</label>
                  <input
                    type="email"
                    id="from_name"
                    name="from_name"
                    value={inputText.from_name}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="from_txt"
                  />
                </div>

                <div className="from_title email">
                  <label htmlFor="title">제목:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={inputText.title}
                    onChange={handleChange}
                    placeholder="제목을 입력하세요."
                    className="title_txt"
                  />
                </div>

                <textarea
                  id="message"
                  name="message"
                  value={inputText.message}
                  onChange={handleChange}
                  placeholder="나의 iPhone에서 보냄"
                  className="text_area"
                ></textarea>
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
