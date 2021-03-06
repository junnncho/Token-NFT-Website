import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Event(props) {
  useEffect(() => {
    AOS.init();
  });
  const img = "eimg " + props.fit;
  return (
    <div
      className={`events ${props.banner ? "event-banner" : ""}`}
      data-aos="zoom-out-up"
      data-aos-offset="-20"
    >
      <div className="eimgdesc">
        <img className={img} src={props.img} alt={props.name} />
        <div className="img-overlay">
          <div className="edesc">{props.desc}</div>
        </div>
      </div>
      <div className="ename">{props.name}</div>
    </div>
  );
}

function Events() {
  return (
    <div className="d-flex event-container">
      <Event
        img="./assets/Percent/10.png"
        fit="fit"
        name="22년 7월"
        desc={
          <p>
            1. 웹사이트 런칭 <br />
            <br />
            2. 커뮤니티 채널 개설
            <br />
            (디스코드, 카카오톡, 트위터)
            <br />
            <br />
            3. 에어드랍 및 화이트리스트 이벤트 진행
            <br />
            <br />
            4. 파트너십 체결 및 프로젝트 홍보
          </p>
        }
      />
      <Event
        img="./assets/Percent/20.png"
        fit="fit"
        name="22년 8월"
        desc={
          <p>
            8월, 민팅 진행
            <br />
            (시장상황에 따라 변동 가능)
          </p>
        }
      />
      <Event
        img="./assets/Percent/30.png"
        fit="fit"
        name="22년 10월"
        desc={
          <p>
            1.DEX 상장
            <br /> (KLAYSWAP 유동성 공급)
            <br />
            <br />
            2.10월, 앱 테스터 모집 및 개선
          </p>
        }
      />
      <Event
        img="./assets/Percent/40.png"
        fit="fit"
        name="22년 11-12월"
        desc={
          <p>
            1. 11월, 어플 런칭 <br />
            (플레이스토어 / 앱스토어)
            <br />
            <br /> 2. 어플 런칭 기념 삼성역 전광판 광고 게시
          </p>
        }
      />
      <Event
        img="./assets/Percent/50.png"
        fit="fit"
        name="23년 1-2월"
        desc={
          <p>
            1. 멀티 체인 런칭 <br />
            (기념 제네시스 NFT 민팅)
            <br />
            <br />
            2. CEX 상장(해외 거래소/MEXC)
          </p>
        }
      />
      <Event
        img="./assets/Percent/60.png"
        fit="fit"
        name="23년 3월"
        desc="해외 마케팅을 통해 생태계 확장"
      />
      <Event
        img="./assets/Percent/70.png"
        fit="fit"
        name="23년 4월"
        desc="추첨을 통해서 취미에 맞는 홀더들 끼리 오프라인 만남 개최"
      />
      <Event
        img="./assets/Percent/80.png"
        fit="fit"
        name="23년 5월"
        desc="취미와 관련된 브랜드들과 협업을 통하여 한정판 NFT 및 굿즈 출시"
      />
      {/* <Event img="./assets/Logos/udaan.png" fit="fit" name="Udaan" desc="Udaan is a business ecosystem simulation where partakers get to learn about the intricacies behind businesses, which are beyond obvious. Students get to devise business plans which are financially sustainable while being efficient with processes involving legalities, compliance and managing CXOs to facilitate company's scalability." /> */}
      <Event
        img="./assets/Percent/90.png"
        fit="fit"
        name="23년 6월"
        desc="THINKFI코인을 토대로한 새로운 프로젝트 소개 및 투자 유치"
      />
      {/* <Event img="./assets/Logos/alumni_talk.png" fit="fit" name="Alumni Talk" desc="There's no better teacher than experience and no better preacher than the experienced. Expand the horizons of your knowledge and learn the best ways to deal with obstacles from people who have already been in your shoes in the past." /> */}
    </div>
  );
}

export default Events;
