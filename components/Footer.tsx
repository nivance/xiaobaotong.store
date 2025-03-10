import Image from "next/image";
import Link from "next/link";

const navigation = {
  legal: [
    { name: '隐私协议', href: '/privacy-policy' },
    { name: '条款和条件', href: '/terms-of-service' },
  ],
  blog: [
    { name: '上新', href: '/blog' },
    { name: '发现', href: '/explore' },
    { name: '创作者', href: '/creators' },
  ],
  credit: [
    // { name: 'Cookie Clicker Unblocked', href: 'https://cookieclickerunblocked.site' },
  ],
  quickMenu: [
    { name: 'Abgerny Incredibox', href: 'https://sprunki.today/abgerny-incredibox' },
    { name: 'Sprunki Phase', href: 'https://sprunki.today/phase' },
    { name: 'Sprunki Retake', href: 'https://sprunki.today/sprunki-retake' },
    { name: 'Sprunki Rejoyed', href: 'https://sprunki.today/sprunki-rejoyed' },
    { name: 'jujutsu infinite wiki', href: 'https://jujutsuinfinite.im/en/wiki' },
    { name: 'Sprunki Phase 0', href: 'https://sprunki.today/sprunki-phase-0' },
    { name: 'Sprunki Phase 1', href: 'https://sprunki.today/sprunki-phase-1' },
    { name: 'Sprunki Phase 2', href: 'https://sprunki.today/sprunki-phase-2' },
    { name: 'Sprunki Phase 3', href: 'https://sprunki.today/sprunki-phase-3' },
    { name: 'sprunki', href: 'https://sprunki.today' },
    { name: 'Sprunki Phase 4', href: 'https://sprunki.today/sprunki-phase-4' },
    { name: 'Sprunki Phase 5', href: 'https://sprunki.today/sprunki-phase-5' },
    { name: 'Sprunki Phase 6', href: 'https://sprunki.today/sprunki-phase-6' },
    { name: 'Cookie Clicker Unblocked', href: 'https://cookieclickerunblocked.site' },
    { name: 'Sprunki Phase 7', href: 'https://sprunki.today/sprunki-phase-7' },
    { name: 'Sprunki Phase 8', href: 'https://sprunki.today/sprunki-phase-8' },
    { name: 'Sprunki Phase 9', href: 'https://sprunki.today/sprunki-phase-9' },
    { name: 'fisch codes', href: 'https://fischzone.com/fisch-codes' },
    { name: 'Sprunki Phase 10', href: 'https://sprunki.today/sprunki-phase-10' },
    { name: 'Sprunki Phase 11', href: 'https://sprunki.today/sprunki-phase-11' },
    { name: 'Sprunki Phase 12', href: 'https://sprunki.today/sprunki-phase-12' },
    { name: 'Sprunki Phase 13', href: 'https://sprunki.today/sprunki-phase-13' },
    { name: 'fisch', href: 'https://fischzone.com' },
    { name: 'Sprunki Mastered', href: 'https://sprunki.today/sprunki-mastered' },
    { name: 'Sprunki X Rejecz', href: 'https://sprunki.today/sprunki-x-rejecz' },
    { name: 'Incredibox Mustard', href: 'https://sprunki.today/incredibox-mustard' },
    { name: 'Jujutsu infinite', href: 'https://jujutsuinfinite.im' },
    { name: 'fisch script', href: 'https://fischzone.com/fisch-script' },
    { name: 'block breaker', href: 'https://blockbreaker.im/' },
    { name: 'Sprunki Christmas Modded', href: 'https://sprunki.today/sprunki-christmas-modded' },
    { name: 'Sprunki But Its Christmas', href: 'https://sprunki.today/sprunki-but-its-christmas' },
    
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="footer-heading">
      <div id="footer-heading" className="sr-only">
        Footer
      </div>
      <section>
        <div className="mx-auto max-w-5xl px-6 py-4 pt-10 border-t border-gray-300 text-sm">
          <div className="lg:flex lg:flex-row lg:justify-between">
            <div className="flex items-center lg:flex-1">
              <Link href={`/`} className="-m-0 p-1.5">
                <Image
                  className="h-8 w-auto"
                  src="/xiaobot_s.svg"
                  alt="xiaobaotong.store"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href={`/`} className="text-xl text-red-600 font-bold">小报童专栏<br/>精选导航站</Link>
            </div>
            <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
              <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10 lg:mt-0">
                <p className="font-inter font-bold text-red-600">Blog</p>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.blog.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link href={`${item.href}`} className="text-sm leading-6 whitespace-nowrap text-red-400 hover:underline">
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10 lg:mt-0">
                <p className="font-inter font-bold text-red-600">隐私条款</p>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.legal.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link
                          href={`${item.href}`}
                          className="text-sm leading-6 whitespace-nowrap text-red-400 hover:underline"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10 lg:mt-0">
                {/* <p className="font-inter font-bold text-red-600">友情链接</p>
                <ul role="list" className="mt-6 space-y-2 w-48">
                  {navigation.credit.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.href} target="_blank" className="font-inter whitespace-nowrap text-red-400 hover:underline">
                        {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul> */}
              </div>
            </div>
            {/* <div className="mt-10 flex flex-col lg:mt-0">
              <div className="mb-4 flex flex-row items-center">
                <p className="block">联系作者: </p>
                <p className="font-inter ml-4 text-black"></p>
              </div>
            </div> */}
          </div>
          <div className="mx-auto mb-4 flex flex-wrap items-center justify-center gap-x-3 px-2">
            {navigation.quickMenu.map((item) => {
              return (
                <Link key={item.name} href={`${item.href}`} target="_blank" className="text-sm text-red-400 leading-6 whitespace-nowrap hover:underline hover:text-blue-500">
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div>
            <p className="font-inter text-center text-sm text-red-600 lg:mt-0">
              © Copyright { new Date().getFullYear() }.{" "}
              <a
                href="https://xiaobaotong.store"
                target="_blank"
                className="text-red-400 hover:underline hidden md:inline-block"
              >
                xiaobaotong.store
              </a>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}