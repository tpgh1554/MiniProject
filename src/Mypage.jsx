import "./MypageStyle.scss";

const Mypage = () => {
  return (
    <>
      <body>
        <div className="container">
          <div className="contents">
            <div className="mem">
              <div className="meminfo1">
                <div className="profile">
                  <div className="person">
                    <img src="#" alt="프로필 사진" />
                    <p>홍길동님 반갑습니다!</p>
                  </div>
                  <div className="btn">
                    <button>정보수정</button>
                    <button>회원탈퇴</button>
                    <button>로그아웃</button>
                  </div>
                </div>
              </div>
              <div className="meminfo2">
                <p>아이디 :</p>
                <p>주소 : </p>
                <p>전화번호 :</p>
              </div>
            </div>

            <h2>찜 목록</h2>
            <hr />

            <div className="jjimcontainer">
              <div className="alinfo">
                <div className="alimg">
                  <img src="#" alt="술사진" />
                </div>
                <div className="alinfo1">
                  <p>제조사</p>
                  <p>술 이름</p>
                  <div className="alinfo2">
                    <p>국가</p>
                    <p>도수</p>
                    <p>용량</p>
                    <p>가격</p>
                  </div>
                  <p className="alinfo3">별점</p>
                </div>
                <div className="reviewbox">
                  review
                  <textarea name="reviewbox">안녕하세요 리뷰입니다</textarea>
                  <button className="more">더보기 ▼</button>
                </div>
                <div className="heart">♥</div>
              </div>
            </div>

            <h2>후기</h2>
            <hr />
            <div className="review">
              <div className="alinfo">
                <div about="alinfo2">
                  <div className="alimg">
                    <img src="#" alt="술사진" />
                  </div>
                  <div className="alinfo1">
                    <p>제조사</p>
                    <p>술 이름</p>
                    <div className="alinfo2">
                      <p>국가</p>
                      <p>도수</p>
                      <p>용량</p>
                      <p>가격</p>
                    </div>
                    <p className="alinfo3">별점</p>
                  </div>
                </div>
                <div className="reviewbox">
                  review
                  <textarea name="reviewbox">안녕하세요 리뷰입니다</textarea>
                  <button className="more">더보기 ▼</button>
                </div>
                <div className="heart">♥</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Mypage;
