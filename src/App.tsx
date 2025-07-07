import {
  MapPin,
  Users,
  Coffee,
  MessageCircle,
  Star,
  ArrowRight,
  Check,
  Clock,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                WorkMate
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                기능
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                사용법
              </a>
              <a
                href="#community"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                커뮤니티
              </a>
            </nav>
            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              나만의 워크스페이스를
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                공유하세요
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              자주 가는 카페와 코워킹 스페이스를 지도에 기록하고, 비슷한
              관심사를 가진 전문가들과 만나
              <br />
              협업의 기회를 만들어보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://work-mate-web.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                  워크스페이스 기록 시작하기
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              협업을 위한 모든 기능
            </h2>
            <p className="text-xl text-gray-600">
              영감을 주는 공간에서 발견하고, 공유하고, 협업하세요
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                장소 기록하기
              </h3>
              <p className="text-gray-600 leading-relaxed">
                자주 가는 카페, 코워킹 스페이스, 업무하기 좋은 장소들을 지도에
                핀으로 표시하고 나만의 워크스페이스 지도를 만들어보세요.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                업무 세션 기록
              </h3>
              <p className="text-gray-600 leading-relaxed">
                각 장소에서의 업무 시간과 생산성을 기록하고, 나만의 업무 패턴을
                분석해 가장 효율적인 워크스페이스를 찾아보세요.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                협업 요청하기
              </h3>
              <p className="text-gray-600 leading-relaxed">
                같은 공간을 자주 이용하는 전문가들을 발견하고, 협업 요청을 보내
                의미 있는 비즈니스 관계를 구축하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">사용 방법</h2>
            <p className="text-xl text-gray-600">
              간단한 4단계로 전문가 네트워크를 확장하세요
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                프로필 생성
              </h3>
              <p className="text-gray-600">
                전문 분야와 관심사를 포함한 프로필을 설정하세요
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                장소 등록
              </h3>
              <p className="text-gray-600">
                자주 이용하는 워크스페이스를 지도에 추가하세요
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                업무 기록
              </h3>
              <p className="text-gray-600">
                업무할 때 체크인하고 가용성을 공유하세요
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                협업 시작
              </h3>
              <p className="text-gray-600">
                다른 전문가들을 발견하고 의미 있는 관계를 시작하세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                성장하는 커뮤니티에 참여하세요
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                좋은 공간에서 좋은 일이 일어난다고 믿는 수천 명의 전문가들과
                함께하세요. 프리랜서부터 원격 팀까지, 당신의 동료를 찾고 함께
                성장하세요.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">
                    도시 곳곳의 숨겨진 명소 발견
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">진정한 전문가 관계 구축</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">협업 기회 발견</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">지식과 리소스 공유</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Coffee className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">3,200+</h4>
                      <p className="text-sm text-gray-600">등록된 장소</p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Users className="h-8 w-8 text-purple-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">8,500+</h4>
                      <p className="text-sm text-gray-600">활성 멤버</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">520+</h4>
                      <p className="text-sm text-gray-600">성사된 협업</p>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Star className="h-8 w-8 text-orange-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">4.8/5</h4>
                      <p className="text-sm text-gray-600">사용자 평점</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              사용자 후기
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  김
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">김서연</h4>
                  <p className="text-sm text-gray-600">UI/UX 디자이너</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "이 플랫폼을 통해 단골 카페에서 만난 동료들과 정기적으로
                협업하고 있어요. 원격근무의 외로움이 완전히 사라졌습니다."
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  박
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">박민준</h4>
                  <p className="text-sm text-gray-600">개발자</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "장소별 생산성 기록 기능이 정말 유용해요. 덕분에 집중이 가장 잘
                되는 카페들을 찾을 수 있었고, 몰랐던 좋은 곳들도 많이
                발견했어요!"
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  이
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">이지은</h4>
                  <p className="text-sm text-gray-600">콘텐츠 라이터</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "딱딱한 네트워킹 이벤트 대신 자연스럽고 편안한 환경에서 사람들과
                연결될 수 있어서 너무 좋아요. 네트워킹의 새로운 방식이에요."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            워크스페이스를 새롭게 경험해보세요
          </h2>
          <p className="text-xl mb-8 opacity-90">
            좋아하는 공간에서 의미 있는 관계를 만들어가는 수천 명의 전문가들과
            함께하세요.
          </p>
          <a
            href="https://work-mate-web.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center cursor-pointer">
              지금 시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </a>
          <p className="text-sm mt-4 opacity-75">무료 가입 • 신용카드 불필요</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Coffee className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">WorkMate</span>
              </div>
              <p className="text-gray-400">
                공유된 공간을 통해 전문가들을 연결하고 의미 있는 협업을
                만들어갑니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    기능
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    요금제
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    모바일 앱
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    소개
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    블로그
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    채용
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">지원</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    도움말
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    문의
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    개인정보처리방침
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WorkMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
