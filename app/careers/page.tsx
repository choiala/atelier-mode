import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 lg:pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              돌아가기
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              채용정보
            </h1>
            <p className="text-muted-foreground text-lg mb-12">
              ATELIER MODE와 함께 성장할 인재를 찾습니다.
            </p>

            <div className="space-y-12">
              {/* MD 채용 공고 */}
              <section className="border border-border rounded-lg p-8 lg:p-12 bg-card">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                    마케팅 디렉터 (Marketing Director)
                  </h2>
                  <p className="text-muted-foreground">
                    풀타임 · 정규직
                  </p>
                </div>

                <div className="space-y-8">
                  {/* 직무 소개 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">직무 소개</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      ATELIER MODE의 브랜드 가치를 전 세계에 알리고, 고객과의 깊은 연결을 만들어가는 마케팅 디렉터를 모집합니다. 
                      창의적인 마케팅 전략 수립부터 실행까지, 브랜드의 성장을 이끌어갈 핵심 인재를 찾습니다.
                    </p>
                  </div>

                  {/* 주요 업무 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">주요 업무</h3>
                    <ul className="space-y-2 text-foreground/90">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>브랜드 마케팅 전략 수립 및 실행</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>디지털 마케팅 캠페인 기획 및 운영</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>소셜 미디어 채널 관리 및 콘텐츠 전략 수립</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>브랜드 파트너십 및 협업 기획</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>마케팅 성과 분석 및 최적화</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>팀 리더십 및 크로스펑셔널 협업</span>
                      </li>
                    </ul>
                  </div>

                  {/* 자격 요건 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">자격 요건</h3>
                    <ul className="space-y-2 text-foreground/90">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>마케팅 관련 경력 5년 이상</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>패션/럭셔리 브랜드 마케팅 경험 우대</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>디지털 마케팅 및 소셜 미디어 플랫폼 운영 경험</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>데이터 분석 및 성과 측정 역량</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>프로젝트 관리 및 팀 리더십 경험</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>창의적 사고와 전략적 기획 능력</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>우수한 커뮤니케이션 및 프레젠테이션 스킬</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>영어 의사소통 가능 (비즈니스 레벨)</span>
                      </li>
                    </ul>
                  </div>

                  {/* 우대 사항 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">우대 사항</h3>
                    <ul className="space-y-2 text-foreground/90">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>글로벌 브랜드 마케팅 경험</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>인플루언서 마케팅 및 협업 경험</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>크리에이티브 디렉션 이해도</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>마케팅 자동화 도구 활용 경험</span>
                      </li>
                    </ul>
                  </div>

                  {/* 근무 조건 */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">근무 조건</h3>
                    <ul className="space-y-2 text-foreground/90">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>근무지: 서울 (재택근무 병행 가능)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>근무시간: 주 5일 (09:00 - 18:00, 유연근무제)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>급여: 경력에 따라 협의</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>복리후생: 4대보험, 퇴직금, 건강검진, 교육비 지원 등</span>
                      </li>
                    </ul>
                  </div>

                  {/* 지원 방법 */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-xl font-semibold mb-4">지원 방법</h3>
                    <p className="text-foreground/90 mb-4">
                      이력서와 자기소개서를 첨부하여 아래 이메일로 지원해주세요.
                    </p>
                    <p className="text-foreground/90">
                      <strong>이메일:</strong> careers@ateliermode.com
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      * 제목에 &quot;마케팅 디렉터 지원&quot;을 명시해주세요.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

