export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 lg:py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif mb-6">ATELIER MODE</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed font-mono">
              {"시대를 초월한 우아함과 "}
              {"현대적 감각이 만나는 곳"}
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-4 font-mono">메뉴</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70 font-mono">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  브랜드 소개
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-primary-foreground transition-colors">
                  컬렉션
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-primary-foreground transition-colors">
                  가치
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  문의
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-4 font-mono">고객 지원</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70 font-mono">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  배송 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  교환/반품
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  고객센터
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-4 font-mono">연락처</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70 font-mono">
              <li>서울특별시 강남구</li>
              <li>청담동 123-45</li>
              <li className="pt-2">
                <a href="mailto:info@ateliermode.kr" className="hover:text-primary-foreground transition-colors">
                  info@ateliermode.kr
                </a>
              </li>
              <li>
                <a href="tel:+8221234567" className="hover:text-primary-foreground transition-colors">
                  02-123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50 font-mono">{"© 2025 ATELIER MODE. All rights reserved."}</p>
        </div>
      </div>
    </footer>
  )
}
