import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ImageSlider from "./ImageSlider"; // 올바른 경로로 조정
import "../css/Home.css";

// Home 컴포넌트
function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ type: "", text: "" }); // modalContent 상태 추가
  const [selectedImages, setSelectedImages] = useState(null);

  const openImageSlider = (images) => {
    setSelectedImages(images);
  };

  const images1 = [
    "/images/봄춘내천1.JPG",
    "/images/봄춘내천2.JPG",
    "/images/봄춘내천3.JPG",
    "/images/봄춘내천4.JPG",
    "/images/봄춘내천5.JPG",
    "/images/봄춘내천6.JPG",
    "/images/봄춘내천7.JPG",
    "/images/빅데이터 경진대회 발표모습1.JPG",
    "/images/빅데이터 경진대회 상탄사진.JPG",
  ];

  const images2 = [
    "/images/로고페이지1.JPG",
    "/images/로고페이지2.JPG",
    "/images/로고페이지3.JPG",
    "/images/1홈.JPG",
    "/images/2게시물.JPG",
    "/images/3사이드메뉴.JPG",
    "/images/4업로드페이지.JPG",
    "/images/5다이렉트메세지.JPG",
    "/images/5알림.JPG",
    "/images/6프로필.JPG",
    "/images/7반응형팔로워리스트.JPG",
    "/images/8반응형홈.JPG",
    "/images/9반응형메세지.JPG",
    "/images/10반응형프로필.JPG",
    "/images/11반응형업로드.JPG",
  ];

  const images3 = [
    "/images/캡스톤3.JPG",
    "/images/캡스톤4.JPG",
    "/images/캡스톤5.JPG",
    "/images/캡스톤6.JPG",
    "/images/캡스톤7.JPG",
    "/images/캡스톤8.JPG",
    "/images/캡스톤9.JPG",
  ];

  // 모달 열기
  const openModal = (type, text) => {
    setModalContent({ type, text });
    setModalIsOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".home-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add("animate-fadeInUp");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 로드 시 체크

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <header className="home-header home-section">
        <h1>프론트엔드 개발자 지원 안중현 입니다.</h1>
        <h1>잘부탁드립니다</h1>
      </header>

      <div className="selfie">
        {" "}
        <div>
          <br></br>
        </div>
        <div className="introduce home-section">
          <div className="introduce-text">
            "저는 '원인이 없다면 결과도 없다'는 신념을 바탕으로, <br></br>문제의
            근본을 분석하고 해결하는 데 집중하는 사람입니다."
          </div>
        </div>
        <div className="photo-container">
          <img
            src="/증명사진/증명사진.jpg"
            alt="Profile"
            className="profile-photo"
          />
        </div>
      </div>
      <div className="home-content">
        <div className="home-sidebar">
          <h1>목차</h1>
          <ul>
            <br></br>
            <li>
              <a href="#intro">소개</a>
            </li>
            <br></br>
            <li>
              <a href="#skills">기술</a>
            </li>
            <br></br>
            <li>
              <a href="#projects">프로젝트</a>
            </li>
            <br></br>
            <li>
              <a href="#Education">학력</a>
            </li>
          </ul>
        </div>
        <main className="home-main">
          <section className="home-intro home-section">
            <h2>소개</h2>
            <h3>1. 프론트엔드로 지원하게 된 이유?</h3>
            <div className="text">
              <br></br>
              단순히 재밌다는 이유도 있지만, 제가 만드는 것을 눈으로 보고
              확인하며 <br></br>
              성취감을 얻으면서 능률이 올라가는 걸 느꼈기 때문입니다.
            </div>
            <br></br>
            <h3>2. 중요하게 생각하는 것?</h3>
            <div className="text">
              <br></br>
              처음엔 조금 느리더라도, 결국 빠른 길을 찾는 것이라고 생각합니다.{" "}
              <br></br>제 습관은 어떤 것에 대한 구조를 파악하려 하는 것입니다.
              <br></br>
              원인이 없이는 결과가 없다 생각을 해서 어떤 문제가 생겼을 때,{" "}
              <br></br>
              항상 원인을 먼저 파악하는 성격입니다.
            </div>
          </section>

          <section id="skills" className="home-skill home-section">
            <h2>기술</h2>
            <div className="skill-list">
              <div className="skill-item">
                <img src="/사진/react.png" alt="React" />
                <span>React</span>
              </div>

              <div className="skill-item">
                <img src="/사진/js.png" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <img src="/사진/html.png" alt="HTML" />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <img src="/사진/css.png" alt="CSS" />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <img src="/사진/github.png" alt="GitHub" />
                <span>GitHub</span>
              </div>
            </div>
          </section>

          <section id="projects" className="home-projects home-section">
            <h2>프로젝트</h2>
            <div className="project-list">
              <div className="project-item">
                <div className="image-container">
                  <img
                    src="/images/빅데이터 경진대회 발표모습1.JPG"
                    alt="빅데이터 경진대회 발표"
                    className="project-image"
                  />
                  <div
                    className="image-overlay"
                    onClick={() => openModal("competition", "")}
                    style={{ cursor: "pointer" }} // 클릭 가능하도록 스타일 추가
                  >
                    <p>📌 4인 프로젝트 📌 2023.08~2023.10.27 </p>
                  </div>
                </div>
                <div
                  className="project-description"
                  onClick={() => openModal("competition", "")}
                >
                  빅데이터 경진대회 금상
                </div>
              </div>
              <div className="project-item">
                <div className="image-container">
                  <img
                    src="/images/로고페이지1.JPG"
                    alt="React SNS 로고"
                    className="project-image"
                  />
                  <div
                    className="image-overlay"
                    onClick={() =>
                      openModal(
                        "react",
                        "개인적으로도 SNS 기능은 많이 사용하는데, 그 기능을 제가 만들어보고 싶다는 생각을 정말 많이 해왔습니다. React에 대해서 공부도 하고, 데이터베이스까지 이용해서 나만의 웹을 만들어보자 싶어서 시작했습니다.\n\n📌 주요 기능 및 특징\n- 서로 유저간 팔로우기능\n- 게시물의 업로드, 수정 및 삭제\n\n- 댓글추가, 수정 및 삭제\n- 상대방의 프로필 검색\n- 유저간 다이렉트메세지\n- 이벤트 발생 시, 알림메세지\n\n📌 사용 기술 및 언어\n- Firebase ( Authentication, firestore, storage 등 전반적인 데이터베이스에 정보 저장 역할 )\n- CSS ( 웹 페이지의 스타일을 지정하기 위해 사용 )\n- React ( React는 재사용 가능한 컴포넌트와 가상 DOM을 활용하여 효율적이고 유연한 사용자 인터페이스를 구축할 수 있게 해줍니다. )\n\n📌 작업내용 요약\n- 기초적인 토대는 AI를 이용하여 간단하게 제작 후, 살을 덧붙혀가는 식의 작업을 진행했습니다.\n- 전반적인 데이터베이스의 정보 저장 루트들은 AI를 통해서 잘못 되는 경우가 많았기에 직접 경로, 저장되는 내용들을 설정했습니다.\n\n📌 프로젝트 진행중 어려웠던 점\n- 문제 : 첫째로는 home 페이지에서 댓글 기능을 제작하던 중 아무런 에러도 없지만 기능도 작동하지 않는 상태가 되었습니다. 개발자모드의 콘솔로그랑, 에러가 발생하지 않아서 어디가 문제인지 찾기 어려워서 한참을 헤맸습니다\n- 해결 : 댓글에서 문제가 있다고 에러가 발생한건 아니지만 기능이 안되는 것에는 이유가 있다 생각하고 그 원인을 거슬러 올라가다가 연결된 다른 페이지에서 오타, 연결오류가 나있던 것을 알 수 있었습니다. 왜 에러가 발생하지 않았는지 이해는 못했지만 결과는 원인이 있어야 한다는 저의 생각대로 원인을 찾아 해결한 사례였습니다."
                      )
                    }
                    style={{ cursor: "pointer" }} // 클릭 가능하도록 스타일 추가
                  >
                    <p>📌 개인 프로젝트 📌 2024.05~2024.08 </p>
                  </div>
                </div>
                <div
                  className="project-description"
                  onClick={() =>
                    openModal(
                      "react",
                      "개인적으로도 SNS 기능은 많이 사용하는데, 그 기능을 제가 만들어보고 싶다는 생각을 정말 많이 해왔습니다. React에 대해서 공부도 하고, 데이터베이스까지 이용해서 나만의 웹을 만들어보자 싶어서 시작했습니다.\n\n📌 주요 기능 및 특징\n- 서로 유저간 팔로우기능\n- 게시물의 업로드, 수정 및 삭제\n\n- 댓글추가, 수정 및 삭제\n- 상대방의 프로필 검색\n- 유저간 다이렉트메세지\n- 이벤트 발생 시, 알림메세지\n\n📌 사용 기술 및 언어\n- Firebase ( Authentication, firestore, storage 등 전반적인 데이터베이스에 정보 저장 역할 )\n- CSS ( 웹 페이지의 스타일을 지정하기 위해 사용 )\n- React ( React는 재사용 가능한 컴포넌트와 가상 DOM을 활용하여 효율적이고 유연한 사용자 인터페이스를 구축할 수 있게 해줍니다. )\n\n📌 작업내용 요약\n- 기초적인 토대는 AI를 이용하여 간단하게 제작 후, 살을 덧붙혀가는 식의 작업을 진행했습니다.\n- 전반적인 데이터베이스의 정보 저장 루트들은 AI를 통해서 잘못 되는 경우가 많았기에 직접 경로, 저장되는 내용들을 설정했습니다.\n\n📌 프로젝트 진행중 어려웠던 점\n- 문제 : 첫째로는 home 페이지에서 댓글 기능을 제작하던 중 아무런 에러도 없지만 기능도 작동하지 않는 상태가 되었습니다. 개발자모드의 콘솔로그랑, 에러가 발생하지 않아서 어디가 문제인지 찾기 어려워서 한참을 헤맸습니다\n- 해결 : 댓글에서 문제가 있다고 에러가 발생한건 아니지만 기능이 안되는 것에는 이유가 있다 생각하고 그 원인을 거슬러 올라가다가 연결된 다른 페이지에서 오타, 연결오류가 나있던 것을 알 수 있었습니다. 왜 에러가 발생하지 않았는지 이해는 못했지만 결과는 원인이 있어야 한다는 저의 생각대로 원인을 찾아 해결한 사례였습니다."
                    )
                  }
                >
                  React SNS
                </div>
              </div>
              {/* 추가된 새로운 프로젝트 */}
              <div className="project-item">
                <div className="image-container">
                  <img
                    src="/images/캡스톤3.JPG"
                    alt="캡스톤 메인 이미지"
                    className="project-image"
                  />
                  <div
                    onClick={() =>
                      openModal(
                        "new-project",
                        "이 프로젝트는 새로운 아이디어와 기술을 사용하여 개발한 웹 애플리케이션입니다. 여러 기능들을 통합하여 사용자의 편의를 고려한 프로젝트입니다.\n\n📌 주요 기능 및 특징\n- 사용자 인증\n- 데이터 분석\n- 대시보드\n\n📌 사용 기술 및 언어\n- 새로운 프레임워크 (예: Vue.js)\n- API 통신\n- 데이터 시각화 라이브러리\n\n📌 작업내용 요약\n- 초기 디자인 및 기획\n- 기능 구현 및 테스트\n- 배포 및 유지보수\n\n📌 프로젝트 진행중 어려웠던 점\n- 문제 : 초기 기획 단계에서 요구사항을 명확히 이해하기 어려웠습니다.\n- 해결 : 요구사항을 명확히 하기 위해 여러 번의 회의를 통해 수정하고 조정하여 문제를 해결했습니다."
                      )
                    }
                    style={{ cursor: "pointer" }} // 클릭 가능하도록 스타일 추가
                    className="image-overlay"
                  >
                    <p>📌 2인 프로젝트 📌 2023.08~2023.11 </p>
                  </div>
                </div>
                <div
                  className="project-description"
                  onClick={() =>
                    openModal(
                      "new-project",
                      "이 프로젝트는 새로운 아이디어와 기술을 사용하여 개발한 웹 애플리케이션입니다. 여러 기능들을 통합하여 사용자의 편의를 고려한 프로젝트입니다.\n\n📌 주요 기능 및 특징\n- 사용자 인증\n- 데이터 분석\n- 대시보드\n\n📌 사용 기술 및 언어\n- 새로운 프레임워크 (예: Vue.js)\n- API 통신\n- 데이터 시각화 라이브러리\n\n📌 작업내용 요약\n- 초기 디자인 및 기획\n- 기능 구현 및 테스트\n- 배포 및 유지보수\n\n📌 프로젝트 진행중 어려웠던 점\n- 문제 : 초기 기획 단계에서 요구사항을 명확히 이해하기 어려웠습니다.\n- 해결 : 요구사항을 명확히 하기 위해 여러 번의 회의를 통해 수정하고 조정하여 문제를 해결했습니다."
                    )
                  }
                >
                  캡스톤 디자인
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="모달"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className="modal-close" onClick={closeModal}>
          ×
        </button>
        <div className="modal-content">
          {modalContent.type === "competition" && (
            <>
              <div className="slider-container">
                <ImageSlider images={images1} />
              </div>
              <div className="modal-text">
                <p>
                  <strong>빅데이터 경진대회를 진행하게 된 계기는</strong> 친구와
                  함께 프로젝트 경험을 쌓기 위해서였습니다.
                </p>
                <p>
                  실제 프로젝트에서는 멘토 교수님, 춘천시청 관계자분, 저와 친구
                  이렇게 프로젝트를 진행했습니다.
                </p>
                <br />

                <p>
                  <strong>📌 주요 기능 및 특징</strong>
                </p>
                <p>
                  대회에서 제공한 미션:{" "}
                  <strong>대규모 사업 유치를 위한 부지 선정</strong>
                </p>
                <p>
                  저희는 춘천시청에서 받아온 토지 정보를 토대로, 토지 성분을
                  분류하고, 지역 별로 사용 가능한 공간만 따로 <br></br>
                  <strong>QGIS 프로그램의 파이썬</strong>을 이용해 분류했습니다.
                </p>
                <br />

                <p>
                  <strong>📌 사용 기술</strong>
                </p>
                <p>
                  <strong>QGIS, Python</strong>
                </p>
                <br />

                <p>
                  <strong>📌 프로젝트 기여도</strong>
                </p>
                <p>
                  <strong>65%</strong>: 아무래도 처음 사용해보는 프로그램이라
                  친구와 저는 처음에는 많이 당황했지만, 공부하면서 파이썬을
                  써가며 프로그래밍을 완성시키는 것이 재밌어서 열심히 했습니다.
                </p>
                <p>
                  <strong>Python</strong> - 공간 데이터 처리 함수를 통해 벡터
                  데이터를 필터링하고 새로운 레이어를 생성했습니다.
                </p>
                <p>
                  <strong>Python</strong> - 공간 데이터 분석, 실제 공간에
                  존재하는 곳들을 색인을 사용하여 계산하였고,{" "}
                  <strong>Python</strong>을 사용하여 GIS 데이터를 분석하고, 특정
                  기준에 따라 객체를 평가했습니다.
                </p>
                <br />

                <p>
                  <strong>📌 문제와 해결</strong>
                </p>
                <p>
                  <strong>문제점:</strong> 코드 작성부터 새로운 프로그램 다루는
                  것까지 모든 것이 문제였지만, 그 중 가장 기억에 남는 것은
                  파이썬으로 원하는 부지의 크기를 선정하고 추출하는
                  것이었습니다.
                </p>
                <p>
                  <strong>해결:</strong> AI를 통해 기초적인 틀을 잡고 그 안에서
                  조금씩 추가해가며 제가 머릿속에서 구상한 기능들이 실행되도록
                  하였습니다. 그 후로 이 방법을 많이 사용하였습니다.
                </p>

                <p>
                  <strong>결과:</strong> 저는 그렇게 프로젝트를 하면서 저희의
                  프로젝트 방향을 <br></br>
                  분석에서 끝내는 것이 아니라 눈에 보이는 결과를 도출하고자
                  하였습니다. <br></br>그 결과 금상을 받게되는 영광을 얻었습니다
                </p>
              </div>
            </>
          )}
          {modalContent.type === "react" && (
            <div className="react-modal-content">
              <ImageSlider images={images2} />

              <div className="modal-text">
                <p>
                  개인적으로도 SNS 기능은 많이 사용하는데, 그 기능을 제가
                  만들어보고 싶다는 생각을 정말 많이 해왔습니다.<br></br>{" "}
                  React에 대해서 공부도 하고, 데이터베이스까지 이용해서 나만의
                  웹을 만들어보자 싶어서 시작했습니다.
                  <br></br> 제가 평소에 많이 사용하던 앱이었기 때문에 어떤식으로
                  구조가 이루어져 있을것이다 예상하여 제작한 웹입니다.
                </p>
                <br />
                <p>
                  <strong>📌 주요 기능 및 특징</strong>
                </p>
                <ul>
                  <li>서로 유저간 팔로우기능</li>
                  <li>게시물의 업로드, 수정 및 삭제</li>
                  <li>댓글추가, 수정 및 삭제</li>
                  <li>상대방의 프로필 검색</li>
                  <li>유저간 다이렉트메세지</li>
                  <li>이벤트 발생 시, 알림메세지</li>
                </ul>
                <br />
                <p>
                  <strong>📌 사용 기술 및 언어</strong>
                </p>
                <ul>
                  <li>
                    Firebase ( Authentication, firestore, storage 등 전반적인
                    데이터베이스에 정보 저장 역할 )
                  </li>
                  <li>CSS ( 웹 페이지의 스타일을 지정하기 위해 사용 )</li>
                  <li>
                    React ( React는 재사용 가능한 컴포넌트와 가상 DOM을 활용하여
                    효율적이고 유연한 사용자 인터페이스를 구축할 수 있게
                    해줍니다. )
                  </li>
                </ul>
                <br />
                <p>
                  <strong>📌 작업내용 요약</strong>
                </p>
                <ul>
                  <li>
                    기초적인 토대는 AI를 이용하여 간단하게 제작 후, 살을
                    덧붙혀가는 식의 작업을 진행했습니다.
                  </li>
                  <li>
                    전반적인 데이터베이스의 정보 저장 루트들은 AI를 통해서 잘못
                    되는 경우가 많았기에 직접 경로, 저장되는 내용들을
                    설정했습니다.
                  </li>
                </ul>
                <br />
                <p>
                  <strong>📌 프로젝트 진행중 어려웠던 점</strong>
                </p>
                <p>
                  <strong>문제:</strong> 첫째로는 home 페이지에서 댓글 기능을
                  제작하던 중 아무런 에러도 없지만 기능도 작동하지 않는 상태가
                  되었습니다. 개발자모드의 콘솔로그랑, 에러가 발생하지 않아서
                  어디가 문제인지 찾기 어려워서 한참을 헤맸습니다.
                </p>
                <p>
                  <strong>해결:</strong> 댓글에서 문제가 있다고 에러가 발생한건
                  아니지만 기능이 안되는 것에는 이유가 있다 생각하고 그 원인을
                  거슬러 올라가다가 연결된 다른 페이지에서 오타, 연결오류가
                  나있던 것을 알 수 있었습니다. 왜 에러가 발생하지 않았는지
                  이해는 못했지만 결과는 원인이 있어야 한다는 저의 생각대로
                  원인을 찾아 해결한 사례였습니다.
                </p>
              </div>
            </div>
          )}

          {modalContent.type === "new-project" && (
            <div className="modal-overlay">
              <div className="modal">
                {/* X 버튼 */}
                <button onClick={closeModal} className="modal-close">
                  ×
                </button>

                <ImageSlider images={images3} />

                <div className="modal-text">
                  <p>
                    📌 23년에는 코로나가 종식된지 얼마 안되던 해에 배달의민족,
                    당근마켓 등 비대면 어플들이 굉장히 잘되던 해에,<br></br>
                    마켓을 캡스톤디자인으로 해보자 결정하게 되었습니다
                  </p>
                  <br />
                  <p>
                    <strong>📌 주요 기능 및 특징</strong>
                  </p>
                  <ul>
                    <li>로그인, 로그아웃</li>
                    <li>상품의 검색</li>
                    <li>상품의 등록</li>
                    <li>상품의 장바구니, 등록</li>
                  </ul>
                  <br />
                  <p>
                    <strong>📌 사용 기술 및 언어</strong>
                  </p>
                  <ul>
                    <li>백엔드 (동료): Node.js</li>
                    <li>프론트엔드 (본인): React, Figma</li>
                  </ul>
                  <br />
                  <p>
                    <strong>📌 문제점 및 해결</strong>
                  </p>
                  <p>
                    <strong>문제점:</strong> 처음으로 제대로 해보는 프로젝트에서
                    백엔드와 프론트엔드를 나눠서 합치는 작업을 했었는데,
                    익숙하지 않아서 굉장히 어렵게 느껴졌습니다.
                  </p>
                  <p>
                    <strong>해결:</strong> ClassName 맞춰서 각 디자인이 최대한
                    적용되도록 하였지만, 그래도 안되는 부분은 Figma가 아닌
                    React에서 새로 작업해서 진행하였습니다.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
      <section id="Education" className="home-projects home-section">
        <h2 className="educareer">학력</h2>
        <div className="career-details">
          <h3>한림대학교 - 컴퓨터공학전공 / 학사 졸업</h3>
          <h3>2020 ~ 2024</h3>

          <ul>
            <li>알고리즘, 자료구조: CS 학습</li>
            <li>인공지능, Python, C 언어 기초, Java</li>
          </ul>
          <p></p>
          <h3>2023년</h3>
          <p>
            <strong>빅데이터 경진대회 금상 - 2위 </strong>
          </p>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 프론트엔드 개발자 안중현</p>
      </footer>
    </div>
  );
}

export default Home;
