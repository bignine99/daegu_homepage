import React from "react";

const publishedPapers = [
  { title: "A Machine Learning Approach for Factor Analysis and Scenario-Based Prediction of Construction Accidents", authors: "Ki-nam Kim, Dae-gu Cho, and Min-jae Lee", journal: "Buildings 15, no. 23 (2025): 4343, https://doi.org/10.3390/buildings15234343", year: "2025" },
  { title: "Development of Cost and Schedule Data Integration Algorithm Based on Big Data Technology", authors: "Daegu Cho, Myungdo Lee and Jihye Shin", journal: "Appl. Sci. Special Issue BIM and Its Integration with Emerging Technologies, 10(24), 8917", year: "2020" },
  { title: "비용-일정 정보통합을 위한 빅데이터 기반 다차원-다수준 Data Cube 알고리즘", authors: "조대구, 이명도", journal: "대한건축학회연합논문집, 제21권 제6호(통권 94호), 109-117", year: "2019" },
  { title: "Input information system building for BIM-Based simulation evaluation of apartment surface condensation", authors: "Hong, S.W., Ahn, H.j., Jung, H.G., Cho, D.G.", journal: "International J. of Sustainable Building Technology and Urban Development, Vol. 6, No. 3, 188–197", year: "2015" },
  { title: "Prototype Development for BIM based Thermal Insulation and Condensation Performance Evaluation of Apartment Housings", authors: "Oh, H.O., Cho, D.G., Jang, H.I., Hong, S.W., and Lee, M.S.", journal: "Architectural Research, Vol.17, No.2, pp. 75-81", year: "2015" },
  { title: "Automatic Data Processing System for Integrated Cost and Schedule Control of Excavation Works in NATM Tunnels", authors: "Cho, D.G., Cho, H.H., and Kim, D.W.", journal: "J. of Civil Engineering and Management, Vol. 20, No.1, pp 132-141", year: "2014" },
  { title: "Database Framework for Cost, Schedule, and Performance Data Integration", authors: "Cho, D.G., Russell, J.S., and Choi, J.S.", journal: "J. of Computing on Civil Engr. ASCE, Vol.27, No.6, pp.719-731", year: "2013" },
  { title: "BIM라이브러리를 활용한 에너지분석 속성체계 구축: Development of Library Property Framework for Energy Analysis Using BIM", authors: "신지혜, 조대구, 김형도", journal: "2012 추계학술발표대회, (사)한국건설IT융합학회", year: "2012" },
  { title: "Development of BIM Based Input-Output Module for Structural Design", authors: "Oh, H.O., Kim, J.H., Lee, J.H., and Cho, D.G.", journal: "2nd International Conf. on Computational Design in Engineering (CODE2012)", year: "2012" },
  { title: "Development of a Holistic System Library for Standard Types of NATM Tunnel Construction", authors: "Cho.D.G., Cho, N.S., Cho.H.H., and Kang, K.I.", journal: "Proceeding of ISARC2012 Conf., Eindhoven, Netherlands", year: "2012" },
  { title: "초고층 건축물의 개방형 BIM 적용을 위한 정보환경 구축 기초연구: A Basic Study on the Establishment of Open BIM Environment for Super-tall Buildings", authors: "김인한, 최중식, 조대구, 추승연, 조근하", journal: "대한건축학회 논문집, 제28권 2호, pp. 13-20", year: "2012" },
  { title: "효율적인 CM업무를 위한 파일 중심 정보 교환 구조", authors: "조대구, 류범기, 고영환, 이현수", journal: "한국건설관리학회 학술발표대회 논문집", year: "2010" },
  { title: "초고층 복합건축물 적용을 위한 개방형 BIM 표준적용 일반기준서 개발", authors: "조대구 외", journal: "buildingSmartKorea", year: "2010" },
  { title: "국내 건설사업관리대가기준 적용에 관한 연구: A Study on the Application of Domestic Construction Management Payment", authors: "조대구, 김영석", journal: "대한건축학회 논문집, 제16권 3호, pp. 69-76", year: "2000" }
];

const researchProjects = [
  { name: "[주거환경연구사업] 모듈러 건축 중고층화 및 생산성 향상 기술 개발", role: "연구책임자 (나인티나인)", period: "2020.01 – 2021.12", developer: "국토교통과학기술진흥원", amount: "124,000,000" },
  { name: "[국토교통기술촉진연구 사업] 건설산업 데이터베이스 인프라 확장을 위한 빅데이터 마이닝 사업화 기술 개발", role: "연구책임자 (나인티나인)", period: "2019.04 – 2021.12", developer: "국토교통과학기술진흥원", amount: "805,000,000" },
  { name: "[산학연협력기술개발사업] 작업자 동작 감지 정보를 활용한 빅데이터 기반 안전사고 징후 감지기술 개발", role: "연구책임자 (나인티나인)", period: "2018.12 – 2019.12", developer: "중소기업기술정보진흥원", amount: "133,334,000" },
  { name: "모듈러건축 중고층화 및 생산성 향상기술 개발", role: "책임연구원", period: "2014.07 – 2020.07", developer: "국토교통기술연구개발사업", amount: "약 950,000,000" },
  { name: "BIM기반 공동주택 단열결로 해석 시스템 개발", role: "연구책임자", period: "2014.05 – 2016.05", developer: "국토교통기술연구개발사업", amount: "약 306,000,000" },
  { name: "수요자 맞춤형 조립식 주택 기술개발 및 실증단지 구축", role: "위탁연구책임자", period: "2013.12 – 2017.11", developer: "국토교통기술연구개발사업", amount: "약 50,000,000" },
  { name: "해공군 특수시설 시설기준 정립 연구", role: "특급연구원", period: "2013.09 – 2013.06", developer: "21세기군사연구소", amount: "약 180,000,000" },
  { name: "BIM 기반 물량산출자동화 프로그램 개발", role: "연구개발기술 자문위원", period: "2013.05 – 현재", developer: "㈜ 명진소프트컨설팅", amount: "-" },
  { name: "BIM/GIS 플랫폼 기반 건설공간정보 통합운영 기술개발", role: "객원연구원", period: "2013.05 – 2013.10", developer: "한국건설기술연구원", amount: "-" },
  { name: "BIM기반의 Facility Management System 개발", role: "연구책임자", period: "2012.08 – 2012.12", developer: "한국건설기술연구원", amount: "110,000,000" },
  { name: "첨단센서 기반의 대형 건설현장 실시간 시공관리 기술개발", role: "연구원", period: "2010.12 – 2012.11", developer: "한국건설교통기술평가원", amount: "5,712,370,000" },
  { name: "초고층 개방형 BIM 정보환경 기술 개발", role: "책임연구원", period: "2010.04 – 2010.11", developer: "한국건설교통기술평가원", amount: "30,320,000" },
  { name: "초고층 공사관리를 위한 통합형 원천정보 관리기술 개발", role: "책임연구원", period: "2010.04 – 2010.11", developer: "한국건설교통기술평가원", amount: "30,000,000" }
];

export default function Research() {
  return (
    <div className="w-full flex flex-col items-center bg-background min-h-screen pt-8">
      <div className="max-w-[1920px] px-8 md:px-16 mx-auto w-full flex flex-col gap-16 py-12">
        
        {/* Abstract Section */}
        <section id="dissertation" className="w-full flex flex-col gap-6 relative">
          <div className="flex items-center gap-4 mb-2">
            <span className="material-symbols-outlined text-3xl text-primary">school</span>
            <h2 className="font-serif text-3xl font-bold text-foreground">Ph.D. Dissertation</h2>
          </div>
          <div className="w-full bg-card border border-border shadow-sm rounded-[5px] p-8 md:p-10 flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
            <h3 className="text-xl font-bold text-foreground leading-snug max-w-3xl">
              Construction Information Database Framework (CIDF) for Integrated Cost, Schedule, and Performance Control
            </h3>
            <p className="text-sm text-primary/80 font-mono mb-4 italic">
              Supervision of Professor Jeffrey S. Russell at the University of Wisconsin-Madison
            </p>
            <div className="text-muted-foreground text-sm leading-relaxed max-w-5xl text-justify space-y-4">
              <p>
                In the contemporary information era, data has become a critical asset for project success, which is fundamentally dependent on continuous access to accurate information. Construction projects generate vast amounts of data that are increasingly complex, specialized, and multi-disciplinary. Despite significant advancements in information models, tools, and standards, poor communication and information fragmentation remain persistent challenges in the industry. This research identifies several fundamental deficiencies: a narrow focus on isolated problems, the absence of an integrated information framework, rigid and unidirectional representation methods, overly complex applications, and a lack of standardized evaluation metrics.
              </p>
              <p>
                Consequently, a pivotal question emerges: how can an information system deliver the right data to the right person at the right time and location? The primary objective of this study is to establish guidelines for gathering, recording, tracking, sharing, and retrieving project execution data in an accurate, efficient, and consistent manner. To address this, the research proposes the Construction Information Database Framework (CIDF), which supports multi-perspective management functions and varying levels of detail within a single database structure.
              </p>
              <p>
                The methodology is organized into four integrated components: a structural element utilizing a faceted 5W1H information unit; a semantic element featuring a multi-functional and semantic-rich database; an application element focusing on a user-friendly and flexible system; and an evaluation element to measure practical applicability. The CIDF encompasses multi-leveled faceted information structures including What, Where, When, Who, Why, and How units. This framework enables users to access multi-dimensional and multi-level information with significantly reduced administrative overhead compared to current tools. Ultimately, the CIDF contributes to enhancing information quality and streamlining data management within the construction execution domain.
              </p>
            </div>
          </div>
        </section>

        {/* Research Projects Section */}
        <section id="projects" className="w-full flex flex-col gap-6 relative">
          <div className="flex items-center gap-4 mb-2">
            <span className="material-symbols-outlined text-3xl text-primary">account_tree</span>
            <h2 className="font-serif text-3xl font-bold text-foreground">Completed & In-Progress Projects</h2>
          </div>
          <div className="w-full bg-card border border-border shadow-sm rounded-[5px] overflow-hidden">
            <div className="w-full">
              <table className="w-full text-left border-collapse">
                <thead className="bg-muted">
                  <tr>
                    <th className="font-mono text-xs text-muted-foreground font-bold tracking-widest py-4 px-6 border-b border-border w-40 text-center">PERIOD</th>
                    <th className="font-mono text-xs text-muted-foreground font-bold tracking-widest py-4 px-6 border-b border-border">PROJECT NAME</th>
                    <th className="font-mono text-xs text-muted-foreground font-bold tracking-widest py-4 px-6 border-b border-border w-48">ROLE / DEVELOPER</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {researchProjects.map((proj, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-colors group">
                      <td className="py-5 px-6 font-data-tabular text-sm text-muted-foreground font-medium align-top text-center whitespace-nowrap">
                        {proj.period}
                      </td>
                      <td className="py-5 px-6 flex flex-col gap-1 align-top">
                        <span className="text-foreground font-bold text-sm leading-snug">{proj.name}</span>
                        {proj.amount !== "-" && (
                          <span className="text-primary/70 font-mono text-xs mt-1">Amount: {proj.amount} KRW</span>
                        )}
                      </td>
                      <td className="py-5 px-6 align-top">
                        <div className="flex flex-col gap-1">
                          <span className="text-foreground text-sm font-semibold">{proj.role}</span>
                          <span className="text-muted-foreground text-xs">{proj.developer}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="w-full flex flex-col gap-6 relative">
          <div className="flex items-center gap-4 mb-2">
            <span className="material-symbols-outlined text-3xl text-primary">library_books</span>
            <h2 className="font-serif text-3xl font-bold text-foreground">Published Papers</h2>
          </div>
          <div className="w-full bg-card border border-border shadow-sm rounded-[5px] overflow-hidden">
            <div className="w-full">
              <table className="w-full text-left border-collapse">
                <thead className="bg-muted">
                  <tr>
                    <th className="font-mono text-xs text-muted-foreground font-bold tracking-widest py-4 px-6 border-b border-border w-24 text-center">YEAR</th>
                    <th className="font-mono text-xs text-muted-foreground font-bold tracking-widest py-4 px-6 border-b border-border">PUBLICATION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {publishedPapers.map((paper, idx) => (
                    <tr key={idx} className="hover:bg-muted/30 transition-colors group">
                      <td className="py-5 px-6 font-data-tabular text-sm text-muted-foreground font-medium align-top text-center">
                        {paper.year}
                      </td>
                      <td className="py-5 px-6 flex flex-col gap-1 align-top">
                        <span className="text-foreground font-semibold text-base leading-snug group-hover:text-primary transition-colors duration-200">{paper.title}</span>
                        <span className="text-muted-foreground text-sm mt-1">{paper.authors}</span>
                        <span className="text-primary/80 font-mono text-xs mt-2 italic">{paper.journal}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
